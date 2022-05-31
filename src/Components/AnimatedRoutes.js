import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import LinkPage from "./LinkPage"
import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/link" element={<LinkPage />} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
