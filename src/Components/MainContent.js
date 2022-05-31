import React from 'react';
import { Flex } from '@chakra-ui/react'
import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage"
import AboutPage from "./AboutPage"
import LinkPage from "./LinkPage"

function MainContent() {
    return (
        <Flex h="80vh" w="100vw" bg="green.50" borderRadius="10">
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />}  />
                <Route path="/link" element={<LinkPage />}  />
            </Routes>
        </Flex>
    );
}

export default MainContent;
