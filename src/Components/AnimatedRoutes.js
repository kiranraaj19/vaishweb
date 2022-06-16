import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./HomePage"
import ContactPage from "./ContactPage"
import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/contact" element={<ContactPage/>} />
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedRoutes;
