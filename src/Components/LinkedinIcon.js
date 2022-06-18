import React from 'react';
import { Box, Flex, Slide, useDisclosure, Button } from '@chakra-ui/react'
import { FiLinkedin} from "react-icons/fi";


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
                        <Button bg="blue.200" onClick={onToggle}>Close</Button>
                    </Flex>
                </Box>
            </Slide>
        </>
    );
}

export default LinkedinIcon