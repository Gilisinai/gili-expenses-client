import React from 'react';
import Layout from './core/Layout'
import { isAuth } from '../src/auth/helpers'
import { Redirect } from 'react-router-dom';
import HomePage from './components/HomePage'
import './App.scss';

const App = () => {
  return (
    <Layout>
      {isAuth() ? <Redirect to="/dashboard" /> : null}
      <HomePage />
    </Layout>
  )
}

export default App;
