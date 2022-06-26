import React from 'react';
import { Flex, Input, Textarea, Button } from '@chakra-ui/react'
import "./css/ContactPage.css"
import { motion } from "framer-motion"

function ContactPage() {

    return (
        <motion.div className="container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
            <form action="https://formsubmit.co/kiranraajsekar@gmail.com" method="POST" class="form_container">
                <Flex direction="column" gap="25px" w="60%" justify="center">
                    <Input placeholder="Name" name="Name" focusBorderColor="green.200" />
                    <Input placeholder="Email" name="Email" focusBorderColor="green.200" required/>
                    <Textarea placeholder="Message" name="Textarea" focusBorderColor="green.200" />
                    <Button type="submit" colorScheme='green'>Submit</Button>
                </Flex>
            </form>
        </motion.div>
    );
}

export default ContactPage;