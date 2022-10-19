import React from "react";
import { BrowserRouter, Routes as RoutesDOM, Route } from 'react-router-dom'
import Accueil from "../Pages/Accueil";

const Routes = () => {

    return (
        <BrowserRouter>
            <RoutesDOM>
                <Route path="/" element={<Accueil />} />
            </RoutesDOM>
        </BrowserRouter>
    )
}

export default Routes
