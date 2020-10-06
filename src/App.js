import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/login'
import Test from './component/test'
import { Admin } from './pages/Admin'
import NotFoundPage from './pages/NotFoundPage'
const App = (props) => {
  return (
    <>
    <Switch>
      <Route
        exact
        path="/error"
        render={() => <Test />}
      />
      <Route
        exact
        path="/login"
        render={() => <Login {...props} />}
      />
      <Route
        exact
        path="/admin"
        render={() => <Admin {...props} />}
        />
      <Route
        path="*"
        component={NotFoundPage} />
     
      </Switch>
      </>
  )
}

export default withRouter(App);