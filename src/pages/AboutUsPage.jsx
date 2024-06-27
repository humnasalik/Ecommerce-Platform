import React from 'react';
import Navbar from '../components/Navbar';
const AboutUsPage = () => {
  return (
    <><Navbar/>
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-center sm:text-4xl">
          About Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          
         
          <div className="lg:pl-12">
            <h3 className="text-2xl font-bold text-gray-900">
              Brand Story
            </h3>
            <p className="mt-3 text-lg text-gray-700">
            At our core, we aspire to redefine shopping experiences by offering a curated collection of clothing, jewelry, and electronics. Founded with a passion for quality and variety, we aim to cater to diverse tastes and lifestyles. From fashion-forward apparel to cutting-edge electronics and exquisite jewelry, our platform seamlessly integrates style with functionality. Embracing innovation and customer-centricity, we strive to provide a one-stop destination for all your lifestyle needs. Join us on a journey where every purchase tells a story of elegance, technology, and unparalleled convenience.
            </p>
          </div>

          
          <div className="lg:pr-12">
            <h3 className="text-2xl font-bold text-gray-900">
              Our Mission
            </h3>
            <p className="mt-3 text-lg text-gray-700">
            Our mission is to enrich lives by offering an exceptional shopping experience that blends convenience with uncompromising quality. We are committed to curating a diverse range of clothing, jewelry, and electronics, ensuring every product meets the highest standards of craftsmanship and design. With a focus on customer satisfaction and innovation, we aim to be the preferred choice for individuals seeking style, reliability, and seamless shopping solutions. By staying ahead of trends and embracing technology, we empower our customers to express their unique lifestyles effortlessly.            </p>
          </div>
          
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-3 text-lg text-gray-700">
            Have questions or want to learn more? Contact us at:
          </p>
          <div className="mt-4 flex justify-center items-center space-x-4">
            <p className="text-lg font-semibold text-gray-900">Phone:</p>
            <p className="text-lg text-gray-700">+1 (123) 456-7890</p>
          </div>
          <div className="mt-2 flex justify-center items-center space-x-4">
            <p className="text-lg font-semibold text-gray-900">Email:</p>
            <p className="text-lg text-gray-700">info@example.com</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUsPage;
