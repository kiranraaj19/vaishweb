import React from 'react';
import { Box,Flex } from '@chakra-ui/react'
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import './css/Footer.css'


function Footer() {

    return (
        <Flex direction="row"  mt = "4vh" w="100vw" justify="center" align="center">
            <Box h="3px" w="85vw" bg="green.200" ></Box>
            <Flex gap="1em" ml="1em" mr = "10px" className = "Container">
                <FiLinkedin className="footer_icons"  size="2em"/>
                <FiTwitter className="footer_icons" size="2em" />
            </Flex>
        </Flex>
    );
}

export default Footer;