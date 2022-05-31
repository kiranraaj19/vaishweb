import React from 'react';
import { Flex } from '@chakra-ui/react'
import AnimatedRoutes from "./AnimatedRoutes"

function MainContent() {
    return (
        <Flex h="80vh" w="100vw" bg="green.50" borderRadius="10" justify="center" align="center">
            <AnimatedRoutes/>
        </Flex>
    );
}

export default MainContent;
