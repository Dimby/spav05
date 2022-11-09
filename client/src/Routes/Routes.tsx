import React from "react";
import { Route, Routes as RoutesDOM } from 'react-router-dom';
import Accueil from "../Pages/Accueil";

const Routes = () => {

    return (
        <RoutesDOM>
            <Route path="/" element={<Accueil />} />
        </RoutesDOM>
    )
}

export default Routes
