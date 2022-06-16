import React from 'react';
import { Flex, Input, Textarea,Button } from '@chakra-ui/react'
import "./css/ContactPage.css"
import { motion } from "framer-motion"

function ContactPage() {

    return (
        <motion.div className="container" initial = {{opacity:0}} animate={{opacity:1}} transition={{duration:1.5}}>
            <Flex direction="column" gap="25px" w="60%" justify="center">
                <Input placeholder="Name" focusBorderColor="green.200" />
                <Input placeholder="Email" focusBorderColor="green.200" />
                <Textarea placeholder="Message" focusBorderColor="green.200" />
                <Button colorScheme='green'>Submit</Button>
            </Flex>
        </motion.div>
    );
}

export default ContactPage;