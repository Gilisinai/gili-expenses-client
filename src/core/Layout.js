import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'


const Layout = ({ children }) => {

    

    return (
        <Fragment>
           <Header/>
            <div >
                {children}
            </div>
            <Footer />
        </Fragment>
    )
}

export default withRouter(Layout)