import React from 'react';
import { Box, Flex, Slide, useDisclosure } from '@chakra-ui/react'
import { FiLinkedin} from "react-icons/fi";
import {GrClose} from "react-icons/gr"

function LinkedinIcon() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <>  
            <FiLinkedin onClick={onToggle} className="footer_icons" size="2em" />
            <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    p='50px'
                    color='white'
                    mt='4'
                    bg='blue.700'
                    rounded='md'
                    shadow='md'
                >
                    <Flex justify="space-between">
                        <p>Follow me on LinkedIn</p>
                        <GrClose color="white" onClick = {onToggle} size="2em"/>
                    </Flex>
                </Box>
            </Slide>
        </>
    );
}

export default LinkedinIcon