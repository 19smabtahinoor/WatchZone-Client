import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './Admin/Dashboard'
import AuthProvider from './contexts/AuthProvider'
import Home from './pages/Home'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Products from './pages/Products'
import Register from './pages/Register'
import PrivateRoute from './Routes/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <PrivateRoute exact path="/placeOrder/:id">
            <PlaceOrder />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
