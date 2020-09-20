import React, { useState } from 'react'
import {  Redirect, Link } from 'react-router-dom'
import Layout from '../core/Layout'
import axios from 'axios'
import { isAuth } from './helpers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        buttonText: 'Submit'
    })

    const { name, email, password, buttonText } = values

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, buttonText: 'Submitting' })
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signup`,
            data: { name, email, password }
        })
            .then(response => {
                console.log('Signup sucess', response)
                setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' })
                toast.success(response.data.message)
            })
            .catch(error => {
                console.log('signup error', error.response.data)
                setValues({ ...values, buttonText: 'Submit' })
                toast.error(error.response.data.error)
            })
    }

    const signupForm = () => (
        <form>
            <div>
                <label>Name</label>
                <input onChange={handleChange('name')} type="text" value={name} />
            </div>
            <div>
                <label>Email</label>
                <input onChange={handleChange('email')} type="email" value={email} />
            </div>
            <div>
                <label>Password</label>
                <input onChange={handleChange('password')} type="password" value={password} />
            </div>

            <div>
                <button onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    )

    return (

        <Layout>
            <ToastContainer />
            {isAuth() ? <Redirect to="/" /> : null}
            <h1>Signup</h1>
            {signupForm()}
            <br/>
            <Link to="/signin">already a member? </Link>
        </Layout>
    )
}

export default Signup