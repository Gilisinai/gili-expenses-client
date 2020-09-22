import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import Layout from '../core/Layout'
import axios from 'axios'
import { isAuth } from './helpers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import login from '../resources/images/login.png'

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
            <div className='form__input-wrapper'>

                <input className='form__input' onChange={handleChange('name')} type="text" value={name} placeholder='Name' />
            </div>
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

                    <div className='form__wrapper flex'>
                        <div>

                            <img className='form__img' src={login} />
                        </div>
                        <div>

                            <h1 className='form__heading'>Member Signup</h1>
                            {signupForm()}
                            <br />
                            <Link className='form__link' to="/signin">Already a member? </Link>
                        </div>
                    </div>
                </div>
                <ToastContainer />
                {isAuth() ? <Redirect to="/" /> : null}

            </div>
        </Layout>
    )
}

export default Signup