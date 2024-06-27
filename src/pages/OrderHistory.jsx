import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/carts');
        const ordersData = response.data.map(async (order) => {
          const productsData = await Promise.all(
            order.products.map(async (product) => {
              const productDetails = await axios.get(
                `https://fakestoreapi.com/products/${product.productId}`
              );
              return {
                productId: product.productId,
                quantity: product.quantity,
                title: productDetails.data.title,
                price: productDetails.data.price,
              };
            })
          );

          return {
            id: order.id,
            userId: order.userId,
            date: order.date,
            products: productsData,
          };
        });

        setOrders(await Promise.all(ordersData));
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Order History</h1>
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-lg shadow-xl overflow-hidden mb-6 border border-gray-300"
          >
            <div className="p-6">
              <p className="text-lg font-bold">Order ID: {order.id}</p>
              <p className="text-sm text-gray-600">User ID: {order.userId}</p>
              <p className="text-sm text-gray-600">
                Date: {new Date(order.date).toLocaleDateString()}
              </p>
              <ul className="mt-4">
                {order.products.map((product) => (
                  <li
                    key={product.productId}
                    className="flex items-center justify-between py-2 border-b"
                  >
                    <div>
                      <p className="text-lg font-semibold">{product.title}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {product.quantity}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-lg font-semibold">${product.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrderHistory;
