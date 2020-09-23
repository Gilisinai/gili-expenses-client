import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import Signup from './auth/Signup'
import Signin from './auth/Signin'
import Activate from './auth/Activate'
import Private from './core/Private'
import PrivateRoute from './auth/PrivateRoute'
import Admin from './core/Admin'
import AdminRoute from './auth/AdminRoute'
import Forgot from './auth/Forgot'
import Reset from './auth/Reset'
import Dashboard from './components/userComps/Dashboard'
import Settings from './components/userComps/Settings'
import Schedule from './components/userComps/Schedule'
import ExpensesTable from './components/userComps/ExpensesTable'




const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/auth/activate/:token" exact component={Activate} />
                <PrivateRoute path="/private" exact component={Private} />
                <PrivateRoute path="/dashboard" exact component={Dashboard} />
                <PrivateRoute path="/settings" exact component={Settings} />
                <PrivateRoute path="/schedule" exact component={Schedule} />
                <PrivateRoute path="/expenses" exact component={ExpensesTable} />
                <AdminRoute path="/admin" exact component={Admin} />
                <Route path="/auth/password/forgot" exact component={Forgot} />
                <Route path="/auth/password/reset/:token" exact component={Reset} />







            </Switch>
        </BrowserRouter>
    )
}

export default Routes