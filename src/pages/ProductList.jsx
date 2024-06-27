import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addCart} from '../redux/action';
import Navbar from '../components/Navbar';


const ProductList = () => {
  const [data, setData] = useState([]); 
  const [filter, setFilter] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all'); 
  const dispatch=useDispatch();
  const addProduct=(product)=>{
    dispatch(addCart(product));
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        setData(products);
        setFilter(products); 
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts(); 
  }, []);

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category); 
    if (category === 'all') {
      setFilter(data);
    } else {
      const filteredProducts = data.filter(product => product.category.toLowerCase() === category.toLowerCase());
      setFilter(filteredProducts); 
    }
  };

  const Loading = () => {
    return <div className="text-center mt-8">Loading...</div>;
  };

  const ShowProducts = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filter.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg">
            <NavLink to={`/products/${product.id}`}>
              <img className="h-48 w-full object-cover object-center" src={product.image} alt={product.title} />
            </NavLink>
            <div className="p-4">
              <h5 className="text-lg font-semibold mb-2">{product.title}</h5>
              <p className="text-gray-700 mb-2">{product.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">${product.price}</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                 onClick={()=> addProduct(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
    <Navbar/>
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-bold text-gray-900 mb-8">Latest Products</h1>
        <div className="mb-8 flex justify-center space-x-4">
          <button onClick={() => handleCategoryFilter('all')} className={`btn px-4 py-2 border border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:text-white hover:shadow-lg focus:bg-gray-800 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:text-white active:shadow-lg transition duration-150 ease-in-out ${selectedCategory === 'all' ? 'bg-gray-800 text-white' : ''}`}>All</button>
          <button onClick={() => handleCategoryFilter("men's clothing")} className={`btn px-4 py-2 border border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:text-white hover:shadow-lg focus:bg-gray-800 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:text-white active:shadow-lg transition duration-150 ease-in-out ${selectedCategory === "men's clothing" ? 'bg-gray-800 text-white' : ''}`}>Men's Clothing</button>
          <button onClick={() => handleCategoryFilter("women's clothing")} className={`btn px-4 py-2 border border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:text-white hover:shadow-lg focus:bg-gray-800 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:text-white active:shadow-lg transition duration-150 ease-in-out ${selectedCategory === "women's clothing" ? 'bg-gray-800 text-white' : ''}`}>Women's Clothing</button>
          <button onClick={() => handleCategoryFilter('jewelery')} className={`btn px-4 py-2 border border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:text-white hover:shadow-lg focus:bg-gray-800 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:text-white active:shadow-lg transition duration-150 ease-in-out ${selectedCategory === 'jewelery' ? 'bg-gray-800 text-white' : ''}`}>Jewellery</button>
          <button onClick={() => handleCategoryFilter('electronics')} className={`btn px-4 py-2 border border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:text-white hover:shadow-lg focus:bg-gray-800 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:text-white active:shadow-lg transition duration-150 ease-in-out ${selectedCategory === 'electronics' ? 'bg-gray-800 text-white' : ''}`}>Electronics</button>
        </div>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
    </>
  );
};

export default ProductList;
