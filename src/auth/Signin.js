import React, { useState } from 'react'
import {  Redirect , Link} from 'react-router-dom'
import Layout from '../core/Layout'
import axios from 'axios'
import { authenticate, isAuth } from './helpers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Signin = ({ history }) => {
    const [values, setValues] = useState({
        email: 'gilisinai2016@gmail.com',
        password: 'Gilisinai1',
        buttonText: 'Submit'
    })

    const { email, password, buttonText } = values

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, buttonText: 'Submitting' })
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signin`,
            data: { email, password }
        })
            .then(response => {
                console.log('Signin sucess', response)


                // save the response (user, token) to localstorage/cookie
                authenticate(response, () => {
                    setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' })
                    // toast.success(`Hey ${response.data.user.name}, Welcome back!`)
                    isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/private')
                })


            })
            .catch(error => {
                console.log('signin error', error.response.data)
                setValues({ ...values, buttonText: 'Submit' })
                toast.error(error.response.data.error)
            })
    }

    const signinForm = () => (
        <form>
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
            <h1>Signin</h1>
            {signinForm()}
            <br/>
            <Link to="/auth/password/forgot">Forgot Password? </Link>
        </Layout>
    )
}

export default Signin