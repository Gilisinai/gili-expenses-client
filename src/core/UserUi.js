import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import SideBar from './SideBar'

function UserUi({ children }) {
    return (
        <div className='user'>
            <SideBar />
            <div className='flex flex__col flex__center width__full'>

                {children}
            </div>
        </div>
    )
}

export default withRouter(UserUi)
