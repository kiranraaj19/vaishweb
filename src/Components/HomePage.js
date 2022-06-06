import React, {useState,useRef,useEffect} from 'react';
import { Flex } from '@chakra-ui/react'
import "./css/HomePage.css"
import { motion } from "framer-motion"
// importing all images for the marquee effect
import images from "./images"

function HomePage() {
    const [height,setHeight] = useState();
    const carousel = useRef();

    useEffect(()=>{
        setHeight(carousel.current.scrollHeight - carousel.current.offsetHeight);
    },[])

    return (
        <Flex p="50px" gap="50px" h="100%">
            <motion.div ref = {carousel} className="carousel">
                <motion.div drag="y" dragConstraints={{bottom:0,top: -height}} className="inner-carousel">
                    {images.map(image => {
                        return (
                            <motion.div className="item" key = {image} whileTap = {{scale:1.05}}>
                                <img src={image} alt="" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
            <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}><Flex h="100%" className="HomePageContent" align="center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Flex></motion.div>
        </Flex>
    );
}

export default HomePage;
