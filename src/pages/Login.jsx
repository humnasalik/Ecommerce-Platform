import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'humna123@gmail.com' && password === 'admin123') {
      window.location.href = '/admin';
    } else {
      setError('Invalid email or password. Login as admin required (email: humna123@gmail.com, password: admin123)');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-4">Admin Login</h1>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded mb-4"
          />
          <label htmlFor="password" className="mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded mb-4"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Login as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
