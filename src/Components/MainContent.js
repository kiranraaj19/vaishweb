import React from 'react';
import { Flex } from '@chakra-ui/react'
import AnimatedRoutes from "./AnimatedRoutes"
import "./css/MainContent.css"
import { motion } from 'framer-motion';

function MainContent() {
    return (
        <motion.div className="container" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}}>
            <Flex bg="green.50" borderRadius="10" justify="center" align="center">
                <AnimatedRoutes />
            </Flex>
        </motion.div>
    );
}

export default MainContent;
