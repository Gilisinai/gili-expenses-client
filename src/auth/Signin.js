import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import Layout from '../core/Layout'
import axios from 'axios'
import { authenticate, isAuth } from './helpers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import login from '../resources/images/login.png'


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
                    isAuth() && isAuth().role === 'admin' ? history.push('/admin') : history.push('/dashboard')
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
            <div className='form__input-wrapper'>

                <input className='form__input' onChange={handleChange('email')} type="email" value={email} placeholder='Email' />
            </div>
            <div className='form__input-wrapper'>

                <input className='form__input' onChange={handleChange('password')} type="password" value={password} placeholder='Password' />
            </div>

            <div>
                <button className='button button__form' onClick={clickSubmit}>
                    {buttonText}
                </button>
            </div>
        </form>
    )

    return (

        <Layout>
            <div className='height__screen flex flex__center flex__col primary-auth'>
                <div className='container flex flex__center'>
                    <div className='form__wrapper flex  flex__row-reverse'>
                        <div>

                            <img className='form__img' src={login} />
                        </div>
                        <ToastContainer />
                        {isAuth() ? <Redirect to="/" /> : null}
                        <div>

                            <h1 className='form__heading'>Member Login</h1>
                            {signinForm()}
                            <br />
                            <Link className='form__link' to="/auth/password/forgot">Forgot Password? </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Signin