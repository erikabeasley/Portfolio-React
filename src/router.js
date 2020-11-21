import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Switch, Route } from "react-router-dom"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import LandingPage from "./pages/LandingPage"

function Routes () {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;