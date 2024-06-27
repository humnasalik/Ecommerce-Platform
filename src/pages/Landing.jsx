import React from 'react'
import {NavLink} from 'react-router-dom'
import Navbar from '../components/Navbar'

const Landing = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white">
      <header className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-3xl font-bold">Welcome to Ghazi Trends</h1>
          <p className="mt-2 text-gray-300">Explore Endless Possibilities: Your One-Stop Destination for Fashion, Electronics, and Jewelry.</p>
        </div>
      </header>
      <br />
      <main>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="w-1/4">
          <img style={{ height: '385px', width: '500px', marginLeft:'-5px'}} className='rounded-lg ' src="/images/product-1.webp" alt="Product Image" />
          </div>

          {/* Main Content */}
          <div className="relative rounded-lg overflow-hidden w-1/2">
            <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/images/product-5.jpeg")' }}>
              <div className="absolute inset-0 bg-gray-800 bg-opacity-75"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-semibold text-white">New Collection</p>
                  <p className="mt-2 text-lg text-white">From casual chic to elegance, find outfits that reflect your personality and enhance your wardrobe</p>
                 
                  <br />
                  <NavLink to='/products' className="mt-4 bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-lg font-semibold uppercase">Shop Now</NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Right Product Image */}
          <div className="w-1/4">
            <img style={{ height: '385px', width: '500px', marginLeft:'5px'}} className='rounded-lg' src="/images/product-2.jpeg" alt="Product 2" />
          </div>
        </div>

        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold">Technowares</h2>
                <p className="mt-4 text-lg text-gray-600">Stay connected with our state-of-the-art electronics range, featuring the latest gadgets and tech essentials.</p>
              </div>
              <div className="flex justify-center">
                <img style={{ height: '250px', width: '400px', marginLeft:'5px'}} src="/images/product-3.jpeg" alt="Feature" className="max-h-96 rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
                <img style={{ height: '250px', width: '450px', marginLeft:'5px'}} src="/images/product-4.png" alt="Feature" className="max-h-96 rounded-lg shadow-lg" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">GleamCraft</h2>
                <p className="mt-4 text-lg text-gray-600">From timeless classics to modern designs, each piece tells a story of beauty and craftsmanship.</p>
              </div>
              
            </div>
          </div>
        </section>
        
      </main>
    </div>
    </>
  )
}

export default Landing