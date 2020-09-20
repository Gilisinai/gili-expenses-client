import React, { useState } from 'react'
import Layout from '../core/Layout'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Forgot = ({ history }) => {
    const [values, setValues] = useState({
        email: '',
        buttonText: 'Request password reset link'
    })

    const { email, buttonText } = values

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, buttonText: 'Submitting' })
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/forgot-password`,
            data: { email }
        })
            .then(response => {
                console.log('Forgot password success', response)
                toast.success(response.data.message)
                setValues({...values, buttonText: 'Requested'})

            })
            .catch(error => {
                console.log('Forgot password error', error.response.data)
                toast.error(error.response.data.error)
                setValues({ ...values, buttonText: 'Request password reset link' })
            })
    }

    const passwordForgotForm = () => (
        <form>
            <div>
                <label>Email</label>
                <input onChange={handleChange('email')} type="email" value={email} />
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
            <h1>Forgot password</h1>
            {passwordForgotForm()}
        </Layout>
    )
}

export default Forgot