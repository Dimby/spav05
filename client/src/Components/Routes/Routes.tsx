import Home from '../../Pages/Home'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import About from '../../Container/About'
// import Accueil from '../../Container/Accueil'
// import Contact from '../../Container/Contact'
// import Country from '../../Container/Country'
// import Gallery from '../../Container/Gallery'
// import Wrapper from '../Wrapper'

const Routes = () => {
  // const WrapperAccueil = Wrapper(Accueil)
  // const WrapperContact = Wrapper(Contact)
  // const WrapperAbout = Wrapper(About)
  // const WrapperCountry = Wrapper(Country)
  // const WrapperGallery = Wrapper(Gallery)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        {/* <Route path="/" exact={true} component={WrapperAccueil} />
        <Route path="/contact" exact={true} component={WrapperContact} />
        <Route path="/about" exact={true} component={WrapperAbout} />
        <Route path="/country" exact={true} component={WrapperCountry} />
        <Route path="/gallery" exact={true} component={WrapperGallery} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
