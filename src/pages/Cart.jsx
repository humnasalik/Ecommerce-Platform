import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, deleteCart } from '../redux/action';
import Navbar from '../components/Navbar';

const Cart = () => {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };

  const handleRemove = (product) => {
    dispatch(deleteCart(product));
  };

  const renderCartItem = (item) => (
    <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-200">
      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-lg shadow-md" />
      <div className="flex-1 ml-4">
        <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => handleRemove(item)}
          >
            -
          </button>
          <span className="mx-3">{item.qty}</span>
          <button
            className="bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => handleAdd(item)}
          >
            +
          </button>
        </div>
      </div>
      <div className="text-lg font-semibold text-gray-800">
        ${item.price * item.qty.toFixed(2)}
      </div>
    </div>
  );

  const handleReturnToShop = () => {
    window.location.href = '/products';
  };

  const handleCheckout = () => {
    window.location.href = '/checkout';
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty</p>
          ) : (
            <div className="space-y-6">
              {cartItems.map(renderCartItem)}
              <div className="flex justify-between items-center mt-6">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={handleReturnToShop}
                >
                  Return to Shop
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
              <div className="text-right text-2xl font-bold mt-6 text-gray-800">
                Total: $
                {cartItems.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2)}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
