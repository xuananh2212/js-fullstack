import { useState } from 'react'
import routes from './Routers/router.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <div className='App'>
      {/* <BrowserRouter>
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

      </BrowserRouter> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/products" />
          </Route>
          <Route path="/products" component={Products} />
          {/* Other routes */}
        </Switch>
      </Router>

    </div>
  )
}
export default App
