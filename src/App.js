import React from "react"
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import Menu from "./compoent/Menu"
import Socials from "./compoent/Socials"
import Contact from "./compoent/Contact"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//npm install react-router-dom@5
/*
          <Route path='/socials' compoent={Socials} exact>
            <Socials />
          </Route>
*/

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/menu' compoent={Menu} exact>
            <Menu />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
