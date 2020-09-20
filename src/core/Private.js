import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Layout from '../core/Layout'
import axios from 'axios'
import { isAuth, getCookie, signout, updateUser } from '../auth/helpers'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const Private = ({ history }) => {
    const [values, setValues] = useState({
        role: '',
        name: '',
        email: '',
        password: '',
        buttonText: 'Submit'
    })

    const token = getCookie('token')
    

    useEffect(() => {
        loadProfile()
    }, [])

    const loadProfile = () => {
        
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API}/user/${isAuth()._id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                console.log('profile update', response)
                const { role, name, email } = response.data
                setValues({ ...values, role, name, email })
            })
            .catch(error => {
                console.log('profile update error', error.response.data.error)
                if (error.response.status === 401) {
                    signout(() => {
                        history.push('/')
                    })
                }
            })
    }

    const { role, name, email, password, buttonText } = values

    const handleChange = (name) => (event) => {
        setValues({ ...values, [name]: event.target.value })
    }

    const clickSubmit = event => {
        event.preventDefault()
        setValues({ ...values, buttonText: 'Submitting' })
        axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API}/user/update`,
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: { name, password }
        })
            .then(response => {
                console.log('Profile update success', response)
                updateUser(response, () => {
                    setValues({ ...values, name: '', email: '', password: '', buttonText: 'Submitted' })
                    toast.success('Profile updated seccessfully')
                })
            })
            .catch(error => {
                console.log('profile update error', error.response.data.error)
                setValues({ ...values, buttonText: 'Submit' })
                toast.error(error.response.data.error)
            })
    }

    const updateForm = () => (
        <form>
            <div>
                <label>Role</label>
                <input type="text" defaultValue={role} disabled/>
            </div>
            <div>
                <label>Name</label>
                <input onChange={handleChange('name')} type="text" defaultValue={name} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" defaultValue={email} disabled />
            </div>
            <div>
                <label>Password</label>
                <input onChange={handleChange('password')} type="password" defaultValue={password} />
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
            <h1>Private</h1>
            <p>profile update</p>
            {updateForm()}
        </Layout>
    )
}

export default Private