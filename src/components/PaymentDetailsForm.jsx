import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';


const PaymentDetailsForm = ({ initialValues, handleSubmit }) => {
  const paymentDetailsValidationSchema = Yup.object().shape({
    billingAddress: Yup.string().required('Required'),
    cardNumber: Yup.string().required('Required'),
    expiryDate: Yup.string().required('Required'),
    cvv: Yup.string().required('Required'),
  });

  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      // Simulate order submission or API call to confirm order
      const response = await handleSubmit(values);
      setOrderId(response.orderId); // Replace with actual orderId from response
      setShowModal(true);
    } catch (error) {
      console.error('Error confirming order:', error);
    } finally {
      setSubmitting(false);
    }
  };



  return (
    <><Navbar/>
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={paymentDetailsValidationSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
        <Form className="max-w-lg mx-auto p-4 space-y-4 mt-8">
          <div className="mb-4">
            <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700 mb-1">Billing Address</label>
            <Field type="text" id="billingAddress" name="billingAddress" className="form-input block w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 mx-auto" />
            <ErrorMessage name="billingAddress" component="div" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
            <Field type="text" id="cardNumber" name="cardNumber" className="form-input block w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 mx-auto" />
            <ErrorMessage name="cardNumber" component="div" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
            <Field type="text" id="expiryDate" name="expiryDate" className="form-input block w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 mx-auto" />
            <ErrorMessage name="expiryDate" component="div" className="text-red-500 text-xs mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="cvv" className="block mb-1">CVV</label>
            <Field type="text" id="cvv" name="cvv" className="form-input block w-full md:w-96 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 mx-auto" />
            <ErrorMessage name="cvv" component="div" className="text-red-500 text-xs mt-1" />
          </div>

          <div className="text-center mt-8">
            <NavLink to={'/orderconfirm'}
              type="submit"
              disabled={isSubmitting}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Confirm Order
            </NavLink>
          </div>

        </Form>
      )}
    </Formik>
    </>
  );
};

export default PaymentDetailsForm;
