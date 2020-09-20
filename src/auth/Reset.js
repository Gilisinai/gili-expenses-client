import React, { useState, useEffect } from 'react'
import jwt from 'jsonwebtoken'
import Layout from '../core/Layout'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Reset = ({ match }) => {
    const [values, setValues] = useState({
        name: '',
        token:'',
        newPassword: '',
        buttonText: 'Reset password'
    })

    useEffect(() => {
        let token = match.params.token
        let {name} = jwt.decode(token)
        if(token) {
            setValues({...values, name, token})
        }
    }, [])

    const { name,token,newPassword, buttonText } = values

    const handleChange =  event => {
        setValues({ ...values, newPassword: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, buttonText: 'Submitting' })
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/reset-password`,
            data: { newPassword, resetPasswordLink: token }
        })
            .then(response => {
                console.log('Reset password success', response)
                toast.success(response.data.message)
                setValues({...values, buttonText: 'Done'})

            })
            .catch(error => {
                console.log('Reset password error', error.response.data)
                toast.error(error.response.data.error)
                setValues({ ...values, buttonText: 'Reset password' })
            })
    }

    const resetPasswordForm = () => (
        <form>
            <div>
                <label>New Password</label>
                <input onChange={handleChange} type="password" value={newPassword} required/>
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
            <h1>Hey {name}, Type your new password</h1>
            {resetPasswordForm()}
        </Layout>
    )
}

export default Reset