import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuth, signout } from '../auth/helpers'

const Layout = ({ children, match, history }) => {

    const isActive = path => {
        if (match.path === path) {
            return { color: 'blue' }
        } else {
            return { color: 'black' }
        }
    }


    const nav = () => (
        <ul className="nav">
            <li className="nav-item">
                <Link to="/" className="text-lignt" style={isActive('/')}>
                    home
                </Link>
            </li>
            {!isAuth() && (
                <Fragment>

                    <li className="nav-item">
                        <Link to="/signin" className="text-lignt" style={isActive('/signin')}>
                            Signin
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="text-lignt" style={isActive('/signup')}>
                            Signup
                        </Link>
                    </li>
                </Fragment>
            )}

            {isAuth() && (
                    <li className="nav-item">
                       <span onClick={() => {
                           signout(() => {
                               history.push('/')
                           })
                        }}>Signout {isAuth().name}</span>
                    </li>             
                
            )}
        </ul>
    )

    return (
        <Fragment>
            {nav()}
            <div className="container">
                {children}
            </div>
        </Fragment>
    )
}

export default withRouter(Layout)