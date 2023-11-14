import { useState } from 'react'
import routes from './Routers/router.js'
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Redirect to="/products" />
          </Route>
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
