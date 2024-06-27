import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addCart} from '../redux/action';
import Navbar from '../components/Navbar';


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch=useDispatch();
  const addProduct=(product)=>{
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    getProduct(); 
  }, [id]); 

  const Loading = () => {
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="bg-gray-100  flex items-center justify-center py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="max-w-md">
              <img src={product.image} alt={product.title} className="w-full rounded-lg shadow-md" style={{ maxWidth: '300px' }} />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
              <p className="text-gray-700 text-lg mb-4">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold">${product.price}</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                 onClick={()=> addProduct(product)}>
                  Add to Cart
                </button>
              </div>
              <p className="text-gray-700">Category: {product.category}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 flex items-center justify-center py-8">
      {loading ? <Loading /> : <ShowProduct />}
    </div>
    </>
  );
};

export default ProductDetail;
