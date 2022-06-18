import React from 'react';
import { Box, Flex,} from '@chakra-ui/react'
import './css/Footer.css'
import TwitterIcon from "./TwitterIcon"
import LinkedinIcon from "./LinkedinIcon"

function Footer() {

    return (
            <Flex direction="row" mt="4vh" w="100vw" justify="center" align="center">
                <Box h="3px" w="85vw" bg="green.200" ></Box>
                <Flex gap="1em" ml="1em" mr="10px" className="Container">
                    <LinkedinIcon />
                    <TwitterIcon />
                </Flex>
            </Flex>

    );
}

export default Footer;