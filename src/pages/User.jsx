import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar';

const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editableUserId, setEditableUserId] = useState(null);
  const [editedUserData, setEditedUserData] = useState({ username: '', email: '' }); // Initialize with empty values
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (userId, userData) => {
    setEditableUserId(userId);
    setEditedUserData(userData);
  };

  const handleSave = async (userId) => {
    try {
      const updatedUser = { ...users.find((user) => user.id === userId), ...editedUserData };
      await axios.put(`https://fakestoreapi.com/users/${userId}`, updatedUser);

      const updatedUsers = users.map((user) => {
        if (user.id === userId) {
          return { ...user, ...editedUserData };
        }
        return user;
      });
      setUsers(updatedUsers);

      setEditableUserId(null);
      alert('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error.message);
      alert(`Error updating user: ${error.message}`);
    }
  };

  const handleCancelEdit = () => {
    setEditableUserId(null);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://fakestoreapi.com/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
      alert('User deleted successfully');
    } catch (error) {
      alert(`Error deleting user: ${error.message}`);
    }
  };

  const handleFieldChange = (field, value) => {
    setEditedUserData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleAddUser = async () => {
    try {
      const newUser = await axios.post('https://fakestoreapi.com/users', editedUserData);
      setUsers([...users, newUser.data]);
      setEditedUserData({ username: '', email: '' }); // Reset state for adding new user
      setShowAddUserForm(false);
      alert('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error.message);
      alert(`Error adding user: ${error.message}`);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-4">User Management</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded mb-4"
          onClick={() => setShowAddUserForm(true)}
        >
          Want to Add a User?
        </button>
        {showAddUserForm && (
          <div className="mb-4">
            <input
              type="text"
              value={editedUserData.username}
              onChange={(e) => handleFieldChange('username', e.target.value)}
              placeholder="Enter username"
              className="border border-gray-300 px-2 py-1 rounded mr-2"
            />
            <input
              type="email"
              value={editedUserData.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              placeholder="Enter email"
              className="border border-gray-300 px-2 py-1 rounded mr-2"
            />
            <button
              className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded"
              onClick={handleAddUser}
            >
              Save
            </button>
          </div>
        )}
        <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-gray-700">
                <td className="py-2 px-4 border">{user.id}</td>
                <td className="py-2 px-4 border">
                  {editableUserId === user.id ? (
                    <input
                      type="text"
                      value={editedUserData.username}
                      onChange={(e) => handleFieldChange('username', e.target.value)}
                      className="border border-gray-300 px-2 py-1 rounded"
                    />
                  ) : (
                    user.username
                  )}
                </td>
                <td className="py-2 px-4 border">
                  {editableUserId === user.id ? (
                    <input
                      type="email"
                      value={editedUserData.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      className="border border-gray-300 px-2 py-1 rounded"
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td className="py-2 px-4 border">
                  {editableUserId === user.id ? (
                    <>
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded mr-2"
                        onClick={() => handleSave(user.id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 hover:bg-gray-700 text-white py-1 px-3 rounded"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded mr-2"
                        onClick={() => handleEdit(user.id, { username: user.username, email: user.email })}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
