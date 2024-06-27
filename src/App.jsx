import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import ProductList from './pages/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import Checkout from './pages/Checkout';
import PaymentDetailsForm from './components/PaymentDetailsForm';
import ShippingAddressForm from './components/ShippingAddressForm';
import OrderConfirmationModal from './components/OrderConfirmationModal';
import Admin from './pages/Admin';
import User from './pages/User';
import ProductManagement from './pages/ProductManagement';
import Login from './pages/Login';
import AboutUsPage from './pages/AboutUsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/paymentdetails' element={<PaymentDetailsForm/>}/>
        <Route path='/address' element={<ShippingAddressForm/>}/>
        <Route path='/orderconfirm' element={<OrderConfirmationModal/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/user-management' element={<User/>}/>
        <Route path='/product-management' element={<ProductManagement/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/aboutus' element={<AboutUsPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
};

export default App;
