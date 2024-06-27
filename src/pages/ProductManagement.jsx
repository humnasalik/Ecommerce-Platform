import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../components/AdminNavbar';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editableProductId, setEditableProductId] = useState(null); 
  const [editedProductData, setEditedProductData] = useState({}); 
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    category: '',
    description: ''
  });
  const [showAddProductForm, setShowAddProductForm] = useState(false); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (productId, productData) => {
    setEditableProductId(productId);
    setEditedProductData(productData); 
  };

  const handleSave = async (productId) => {
    try {
      const updatedProduct = { ...products.find(product => product.id === productId), ...editedProductData };
      await axios.put(`https://fakestoreapi.com/products/${productId}`, updatedProduct);

  
      const updatedProducts = products.map(product => {
        if (product.id === productId) {
          return { ...product, ...editedProductData };
        }
        return product;
      });
      setProducts(updatedProducts);

      setEditableProductId(null); 
      alert('Product updated successfully');
    } catch (error) {
      console.error('Error updating product:', error.message);
      alert(`Error updating product: ${error.message}`);
    }
  };

  const handleCancelEdit = () => {
    setEditableProductId(null); 
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`https://fakestoreapi.com/products/${productId}`);
      setProducts(products.filter(product => product.id !== productId));
      alert('Product deleted successfully');
    } catch (error) {
      alert(`Error deleting product: ${error.message}`);
    }
  };

  const handleFieldChange = (field, value) => {
    setEditedProductData(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('https://fakestoreapi.com/products', newProduct);
      const addedProduct = response.data;
      setProducts([...products, addedProduct]);
      setNewProduct({
        title: '',
        price: '',
        category: '',
        description: ''
      });
      setShowAddProductForm(false); 
      alert('Product added successfully');
    } catch (error) {
      console.error('Error adding product:', error.message);
      alert(`Error adding product: ${error.message}`);
    }
  };

  const handleChangeNewProduct = (field, value) => {
    setNewProduct(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <AdminNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-4">Product Management</h1>
        <div className="mb-4 flex justify-between items-center">
          {!showAddProductForm && (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
              onClick={() => setShowAddProductForm(true)}
            >
              Want to Add a Product?
            </button>
          )}
          {showAddProductForm && (
            <div>
              <input
                type="text"
                placeholder="Product Name"
                value={newProduct.title}
                onChange={(e) => handleChangeNewProduct('title', e.target.value)}
                className="border border-gray-300 px-2 py-1 rounded mr-2"
              />
              <input
                type="number"
                placeholder="Price"
                value={newProduct.price}
                onChange={(e) => handleChangeNewProduct('price', e.target.value)}
                className="border border-gray-300 px-2 py-1 rounded mr-2"
              />
              <input
                type="text"
                placeholder="Category"
                value={newProduct.category}
                onChange={(e) => handleChangeNewProduct('category', e.target.value)}
                className="border border-gray-300 px-2 py-1 rounded mr-2"
              />
              <textarea
                placeholder="Description"
                value={newProduct.description}
                onChange={(e) => handleChangeNewProduct('description', e.target.value)}
                className="border border-gray-300 px-2 py-1 rounded mr-2"
              />
              <button
                className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded ml-2"
                onClick={handleAddProduct}
              >
                Add Product
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded ml-2"
                onClick={() => setShowAddProductForm(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
        <table className="min-w-full bg-white border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Category</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="text-gray-700">
                <td className="py-2 px-4 border">{product.id}</td>
                <td className="py-2 px-4 border">
                  {editableProductId === product.id ? (
                    <input
                      type="text"
                      value={editedProductData.title || product.title}
                      onChange={(e) => handleFieldChange('title', e.target.value)}
                      className="border border-gray-300 px-2 py-1 rounded"
                    />
                  ) : (
                    product.title
                  )}
                </td>
                <td className="py-2 px-4 border">
                  {editableProductId === product.id ? (
                    <input
                      type="number"
                      value={editedProductData.price || product.price}
                      onChange={(e) => handleFieldChange('price', e.target.value)}
                      className="border border-gray-300 px-2 py-1 rounded"
                    />
                  ) : (
                    `$${product.price}`
                  )}
                </td>
                <td className="py-2 px-4 border">
                  {editableProductId === product.id ? (
                    <input
                      type="text"
                      value={editedProductData.category || product.category}
                      onChange={(e) => handleFieldChange('category', e.target.value)}
                      className="border border-gray-300 px-2 py-1 rounded"
                    />
                  ) : (
                    product.category
                  )}
                </td>
                <td className="py-2 px-4 border">
                  {editableProductId === product.id ? (
                    <textarea
                      value={editedProductData.description || product.description}
                      onChange={(e) => handleFieldChange('description', e.target.value)}
                      className="border border-gray-300 px-2 py-1 rounded"
                    />
                  ) : (
                    product.description
                  )}
                </td>
                <td className="py-2 px-4 border">
                  {editableProductId === product.id ? (
                    <>
                      <button
                        className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded mr-2"
                        onClick={() => handleSave(product.id)}
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
                        onClick={() => handleEdit(product.id, { title: product.title, price: product.price, category: product.category, description: product.description })}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
                        onClick={() => handleDelete(product.id)}
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

export default ProductManagement;
