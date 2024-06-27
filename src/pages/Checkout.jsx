import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Checkout = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    mobileNumber: Yup.string().required('Required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {({ values, errors, touched, handleChange, handleBlur, isValid, isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block mb-1">
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1">
                  Last Name
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage name="email" component="div" className="text-red-500" />
              </div>
              <div>
                <label htmlFor="mobileNumber" className="block mb-1">
                  Mobile Number
                </label>
                <Field
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  className="w-full border px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
                />
                <ErrorMessage name="mobileNumber" component="div" className="text-red-500" />
              </div>
              <div className="text-center mt-8">
                <NavLink
                  to={'/address'}
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className={`bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 ${
                    !isValid || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  Proceed to Shipping Details
                </NavLink>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Checkout;
