import React from 'react';
import { Flex } from '@chakra-ui/react'
import VaishImg from "./assets/vaish2.jpg"
import "./css/HomePage.css"
import { motion } from "framer-motion"

function HomePage() {

    return (
        <Flex p="50px" gap="50px">
            <motion.img alt="Vaishnavi" className = "Image" src={VaishImg} initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6}}></motion.img>
            <motion.div initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.6,delay:0.2}}><Flex h="100%" className="HomePageContent" align="center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Flex></motion.div>
        </Flex>
    );
}

export default HomePage;
