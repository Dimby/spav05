
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Accueil from '../../Container/Accueil';
import Contact from '../../Container/Contact';
import Wrapper from '../Wrapper';

const Routes = () => {

  
  const WrapperAccueil = Wrapper(Accueil);
  const WrapperContact = Wrapper(Contact);

  return (
    <BrowserRouter>
       <Switch>
        <Route path="/" exact={true} component={WrapperAccueil} />
        <Route path="/contact" exact={true} component={WrapperContact} />
       </Switch>
    </BrowserRouter>
  );
};

export default Routes;
