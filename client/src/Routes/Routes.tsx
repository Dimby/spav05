import React, { FC } from "react";
import { Route, Routes as RoutesDOM } from 'react-router-dom';
import AboutUs from "../Pages/AboutUs";
import Albums from "../Pages/Albums";
import Areas from "../Pages/Areas";
import Contact from "../Pages/Contact";
import Files from "../Pages/Files";
import Home from "../Pages/Home";

interface RoutesProps {
    onClickHome: () => void
}

const Routes: FC<RoutesProps> = ({ onClickHome }) => {

    return (
        <RoutesDOM>
            <Route path="/" element={<Home onClickHome={onClickHome} />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/contactUs" element={<Contact />} />
            <Route path="/files" element={<Files />} />
        </RoutesDOM>
    )
}

export default Routes
