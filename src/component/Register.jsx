import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
const api = 'https://userbackend-37ha.onrender.com/api/users/register';
const api2 = 'http://localhost:8000/api/users/register';


import { useFormik } from 'formik';
import { singupSchema } from '../validation/schema';
import './regi.css';
const initial = {
    username: '',
    email: '',
    password: '',
}

const Register = () => {

    let navigate = useNavigate();

    const { values, touched, handleBlur, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initial,
        validationSchema: singupSchema,
        onSubmit: async (user, action) => {
            try {
                action.resetForm();
                delete user.confirmPassword;
                const response = await axios.post(api, user);
                toast(response.data.message);
                navigate('/login')
            } catch (err) {
                console.log(err);
                toast.error(err.message)
            }
        },
    })



    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={handleChange}
                    name='username'
                    value={values.username}
                    onBlur={handleBlur}
                />
                {errors.username && touched.username && <p  className='error'>{errors.username}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.email && touched.email && <p className='error'>{errors.email}</p>}

                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.password && touched.password && <p className='error'>{errors.password}</p>}
            
                <button style={{ marginBottom: '1rem' }} type="submit">Register</button>
                <NavLink to={'/login'}>if have already account!</NavLink>
            </form>
        </div>
    );
};

export default Register;
