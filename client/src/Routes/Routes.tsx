import React from "react";
import { Route, Routes as RoutesDOM } from 'react-router-dom';
import AboutUs from "../Pages/AboutUs";
import Albums from "../Pages/Albums";
import Areas from "../Pages/Areas";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

const Routes = () => {

    return (
        <RoutesDOM>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/contactUs" element={<Contact />} />
        </RoutesDOM>
    )
}

export default Routes
