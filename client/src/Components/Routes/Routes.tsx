
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Accueil from '../../Container/Accueil';
import Wrapper from '../Wrapper';

const Routes = () => {

  
  const WrapperAccueil = Wrapper(Accueil);

  return (
    <BrowserRouter>
       <Switch>
       <Route path="/" component={WrapperAccueil} />
       </Switch>
    </BrowserRouter>
  );
};

export default Routes;
