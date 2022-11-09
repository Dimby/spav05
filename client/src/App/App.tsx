import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Accueil from '../Pages/Accueil';
import './App.css';

const App = () => {
  return <BrowserRouter>
    <Accueil />
  </BrowserRouter>
}

export default App;
