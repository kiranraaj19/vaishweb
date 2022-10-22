import React from 'react';
import { motion } from "framer-motion"
import './css/Name.css'
import { Box, Flex } from '@chakra-ui/react'

function Name() {
    return (
        <>
            <motion.div className="Name" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "tween", duration: 1.2, delay: 0.6 }}>
                <Flex align="center">
                    <Box h="1px" w="5vw" bg="green.200" ></Box>
                    <p>VAISHNAVI PADMANATHAN</p>
                    <Box h="1px" w="70vw" bg="green.200" ></Box>
                </Flex>
            </motion.div>
        </>
    );
}

export default Name;
