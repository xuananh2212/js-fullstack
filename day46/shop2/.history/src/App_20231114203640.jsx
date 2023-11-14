import { useState } from 'react'
import routes from './Routers/router.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/products" />
              </Route>
            </Switch>
          </Router>
          {
            routes.map(({ path, Component }, index) => {
              return (
                <Route key={index}
                  path={path}
                  element={<Component />}
                ></Route>
              )
            })
          }
        </Routes>

      </BrowserRouter>

    </div>
  )
}
export default App
