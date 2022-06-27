import React from 'react';
import { Box, Flex, Slide, useDisclosure} from '@chakra-ui/react'
import { FiInstagram } from "react-icons/fi";
import {GrClose} from "react-icons/gr"

function TwitterIcon() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <>
            <FiInstagram onClick={onToggle} className="footer_icons" size="2em" />
            <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    p='50px'
                    color='white'
                    mt='4'
                    bg='pink.500'
                    rounded='md'
                    shadow='md'
                >
                    <Flex justify="space-between">
                        <p>Follow me on <a href="https://www.instagram.com/awkwagal"><u>Instagram</u></a></p>
                        <GrClose onClick = {onToggle} size="2em"/>
                    </Flex>
                </Box>
            </Slide>
        </>
    );
}

export default TwitterIcon;