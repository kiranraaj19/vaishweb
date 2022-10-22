import React from 'react';
import { motion } from "framer-motion"
import './css/Name.css'
import { Flex } from '@chakra-ui/react'

function Name() {
		
		

    return (
        <>
            <motion.div className="Name" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ type: "tween", duration: 1.2, delay: 0.6 }}>
                <Flex align="center">
                    <p>VAISHNAVI PADMANATHAN</p>
                </Flex>
            </motion.div>
        </>
    );
}

export default Name;
