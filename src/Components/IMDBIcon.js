import React from 'react';
import { Box, Flex, Slide, useDisclosure } from '@chakra-ui/react'
import { SiImdb } from "react-icons/si";
import {GrClose} from "react-icons/gr"

function IMDBIcon() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <>  
            <SiImdb onClick={onToggle} className="footer_icons" size="2em" />
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
                        <p>Follow me on <a href="https://www.imdb.com/name/nm14059750/"><u>IMDB</u></a></p>
                        <GrClose color="white" onClick = {onToggle} size="2em"/>
                    </Flex>
                </Box>
            </Slide>
        </>
    );
}

export default IMDBIcon
