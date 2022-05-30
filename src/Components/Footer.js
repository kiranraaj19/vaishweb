import React from 'react';
import { Box,Flex,Spacer } from '@chakra-ui/react'
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import './Footer.css'

function Footer() {
    return (
        <Flex direction="row" pl="5.5vw" mt = "4vh" w="80vw" justify="center" align="center">
            <Box h="3px" w="69vw" bg="green.200" ></Box>
            <Flex gap="10px" ml="10px" mr = "10px">
                <FiLinkedin size="1.5em" className="icons" />
                <FiTwitter size="1.5em" className="icons"/>
            </Flex>
        </Flex>
    );
}

export default Footer;