import React from 'react';
import { Flex } from '@chakra-ui/react'
import AnimatedRoutes from "./AnimatedRoutes"
import "./css/MainContent.css"

function MainContent() {
    return (
        <Flex className="container" bg="green.50" borderRadius="10" justify="center" align="center">
            <AnimatedRoutes/>
        </Flex>
    );
}

export default MainContent;
