import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink } from "react-router-dom";


const CustomForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    checkInDate: Yup.date().required('Check-in date is required'),
    checkOutDate: Yup.date().required('Check-out date is required'),
    numberOfGuests: Yup.number().required('Number of guests is required'),
    roomType: Yup.string().required('Room type is required')
  });

  return (
    <div className="form">
      <h2>Hotel Booking Form</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          checkInDate: '',
          checkOutDate: '',
          numberOfGuests: '',
          roomType: ''
        }}
        validationSchema={validationSchema} 
        onSubmit={values => {
          console.log(values);
        }}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" style={{width: "calc(100% - 20px)"}} />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" style={{width: "calc(100% - 20px)"}} />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <Field type="text" id="phone" name="phone" style={{width: "calc(100% - 20px)"}} />
            <ErrorMessage name="phone" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="checkInDate">Check-in Date:</label>
            <Field type="date" id="checkInDate" name="checkInDate" style={{width: "calc(100% - 20px)"}} />
            <ErrorMessage name="checkInDate" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="checkOutDate">Check-out Date:</label>
            <Field type="date" id="checkOutDate" name="checkOutDate" style={{width: "calc(100% - 20px)"}} />
            <ErrorMessage name="checkOutDate" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfGuests">Number of Guests:</label>
            <Field type="number" id="numberOfGuests" name="numberOfGuests" style={{width: "calc(100% - 20px)"}} />
            <ErrorMessage name="numberOfGuests" component="div" className="error-message" />
          </div>
          <div className="form-group">
            <label htmlFor="roomType">Room Type:</label>
            <Field as="select" id="roomType" name="roomType" style={{width: "calc(100% - 20px)"}}>
              <option value="">Select Room Type</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </Field>
            <ErrorMessage name="roomType" component="div" className="error-message" />
          </div>
          <div className="form-group">
           {/* <button type="submit" style={{width: "120px", padding: "10px 0"}}>Submit</button>*/}
           <NavLink to="/rooms"> Submit</NavLink>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default CustomForm;
