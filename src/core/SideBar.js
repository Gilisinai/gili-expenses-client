import React, {useState} from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { isAuth, signout } from '../auth/helpers'

function SideBar({ history, match }) {

    const [navbar, setNavbar] = useState(false)

    const isActive = path => {
        if (match.path === path) {
            return true
        } else {
            return false
        }
    }

    
    return (
        <div className='sidebar flex__space-between'>
            <div className='sidebar__item-logo'>
                <svg  width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='sidebar__icon' fill-rule="evenodd" clip-rule="evenodd" d="M36 18C36 27.9411 27.9411 36 18 36C8.05888 36 0 27.9411 0 18C0 8.05888 8.05888 0 18 0C27.9411 0 36 8.05888 36 18ZM18.0839 20.5583C21.4015 15.8667 21.5479 13.0233 18.0839 8C14.5537 13.1305 15.0088 15.8499 18.0839 20.5583ZM16.5085 26.6697C17.0358 20.9478 15.741 18.4122 10.2294 15.7939C9.73741 22.0021 11.4912 24.1297 16.5085 26.6697ZM19.6807 26.6697C19.1534 20.9478 20.4483 18.4122 25.9599 15.7939C26.4518 22.0021 24.6981 24.1297 19.6807 26.6697Z" fill="black" />
                </svg>
            </div>
            <div className='height__full'>

                <div className='sidebar__item'>

                    <Link to='/dashboard'>
                        <svg className={`${isActive('/dashboard') ? 'sidebar__icon' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M13 21V11h8v10h-8zM3 13V3h8v10H3zm6-2V5H5v6h4zM3 21v-6h8v6H3zm2-2h4v-2H5v2zm10 0h4v-6h-4v6zM13 3h8v6h-8V3zm2 2v2h4V5h-4z" /></svg>
                    </Link>
                </div>
                <div className='sidebar__item'>

                    <Link to='/expenses'>
                        <svg className={`${isActive('/expenses') ? 'sidebar__icon' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M8 4h13v2H8V4zM4.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 6.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" /></svg>
                    </Link>
                </div>
                <div className='sidebar__item'>

                    <Link to='/schedule'>
                        <svg className={`${isActive('/schedule') ? 'sidebar__icon' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8zM6 14h2v2H6v-2zm4 0h8v2h-8v-2z" /></svg>

                    </Link>
                </div>
                <div className='sidebar__item'>

                    <Link to='/settings'>
                        <svg className={`${isActive('/settings') ? 'sidebar__icon' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" /></svg>
                    </Link>
                </div>
            </div>
            <div>

                <div className='sidebar__item' onClick={() => {
                    signout(() => {
                        history.push('/')
                    })
                }}>


                    <svg className='sidebar__icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z" /></svg>


                </div>
            </div>


        </div>
    )
}

export default withRouter(SideBar)
