import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';


const ShippingAddressForm = ({ initialValues, handleSubmit }) => {
  const shippingAddressValidationSchema = Yup.object().shape({
    houseNumber: Yup.string().required('Required'),
    street: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    region: Yup.string().required('Required'),
    country: Yup.string().required('Required')
  });

  const regions = ["Punjab", "Sindh", "Balochistan", "Khyber Pakhtunkhwa", "Gilgit-Baltistan", "Azad Jammu and Kashmir"];

  return (
    <><Navbar/>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={shippingAddressValidationSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
        <Form className="max-w-lg mx-auto p-4 space-y-4 mt-8">
          <div className="mb-4">
            <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700 mb-1">House Number</label>
            <Field type="text" id="houseNumber" name="houseNumber" className="form-input block w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 mx-auto" />
            <ErrorMessage name="houseNumber" component="div" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">Street</label>
            <Field type="text" id="street" name="street" className="form-input block w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 mx-auto" />
            <ErrorMessage name="street" component="div" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <Field type="text" id="city" name="city" className="form-input block w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 mx-auto" />
            <ErrorMessage name="city" component="div" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">Region</label>
            <Field as="select" id="region" name="region" className="form-select block w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 mx-auto">
              <option value="">Select Region</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </Field>
            <ErrorMessage name="region" component="div" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <Field type="text" id="country" name="country" className="form-input block w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 mx-auto" />
            <ErrorMessage name="country" component="div" className="text-red-500 text-xs mt-1" />
          </div>

          <div className="text-center mt-8">
            <NavLink to='/paymentdetails' type="submit" disabled={isSubmitting} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
              Proceed to Payment
            </NavLink>
          </div>
        </Form>
      )}
    </Formik>
    </>
  );
};

export default ShippingAddressForm;
