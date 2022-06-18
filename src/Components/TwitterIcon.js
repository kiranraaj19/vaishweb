import React from 'react';
import { Box, Flex, Slide, useDisclosure, Button } from '@chakra-ui/react'
import { FiTwitter } from "react-icons/fi";


function TwitterIcon() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <>
            <FiTwitter onClick={onToggle} className="footer_icons" size="2em" />
            <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    p='50px'
                    color='white'
                    mt='4'
                    bg='blue.300'
                    rounded='md'
                    shadow='md'
                >
                    <Flex justify="space-between">
                        <p>Follow me on Twitter</p>
                        <Button bg="blue.200" onClick={onToggle}>Close</Button>
                    </Flex>
                </Box>
            </Slide>
        </>
    );
}

export default TwitterIcon;