
import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuth, signout } from '../auth/helpers'


function Header({ children, match, history }) {

    const [navbar, setNavbar] = useState(false)

    const isActive = path => {
        if (match.path === path) {
            return true
        } else {
            return false
        }
    }

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)



    return (
        <header className={`header ${navbar ? 'header__active' : ''}`}>
            <img className='logo' src='https://cdn.mos.cms.futurecdn.net/gS5HJ7VtoHAmVhkXYbUZo4-1200-80.jpg'/>
            <nav className='nav'>
                <ul className="nav__links">
                    <li className="nav__item">
                        <Link to="/" className="text-lignt" className={`nav__link ${isActive('/') ? 'nav__link-active' : ''}`}>
                            home
                </Link>
                    </li>
                    {!isAuth() && (
                        <Fragment>

                            <li className="nav__item">
                                <Link to="/signin" className="text-lignt" className={`nav__link ${isActive('/signin') ? 'nav__link-active' : ''}`}>
                                    Signin
                        </Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/signup" className="text-lignt" className={`nav__link ${isActive('/signup') ? 'nav__link-active' : ''}`} >
                                    Signup
                        </Link>
                            </li>
                        </Fragment>
                    )}

                    {isAuth() && (
                        <li className="nav__item">
                            <span onClick={() => {
                                signout(() => {
                                    history.push('/')
                                })
                            }}>Signout {isAuth().name}</span>
                        </li>

                    )}
                </ul>
            </nav>
            {!isAuth() && (

                <Link>
                    <button className='nav__button'>Sign up</button>            
                </Link>
            )}
        </header>
    )
}

export default withRouter(Header)
