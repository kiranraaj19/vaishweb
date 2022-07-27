import React from 'react';
import { Flex, Box } from '@chakra-ui/react'
import AnimatedRoutes from "./AnimatedRoutes"
import "./css/MainContent.css"
import { motion } from 'framer-motion';

function MainContent() {
    return (
        <Box h="auto" w="100%">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
                <Flex bg="green.50" borderRadius="10" h="auto" justify="center" align="center">
                    <AnimatedRoutes />
                </Flex>
            </motion.div>
        </Box>
    );
}

export default MainContent;
