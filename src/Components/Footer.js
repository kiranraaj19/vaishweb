import React from 'react';
import { Box, Flex, } from '@chakra-ui/react'
import './css/Footer.css'
import TwitterIcon from "./TwitterIcon"
import LinkedinIcon from "./LinkedinIcon"
import IMDBIcon from "./IMDBIcon"
import { motion } from 'framer-motion';

function Footer() {

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}}>
            <Flex direction="row" mt="4vh" w="100%" justify="center" align="center">
                <Box h="3px" w={["60%","70%","85%","85%"]} bg="green.200" ></Box>
                <Flex gap="1em" ml="1em" mr="10px" className="Container">
                    <LinkedinIcon />
                    <TwitterIcon />
										<IMDBIcon />
                </Flex>
            </Flex>
        </motion.div>
    );
}

export default Footer;
