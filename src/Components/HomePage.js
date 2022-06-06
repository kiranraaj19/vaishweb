import React, { useState, useRef, useEffect } from 'react';
import { Flex } from '@chakra-ui/react'
import "./css/HomePage.css"
import { motion } from "framer-motion"
// importing all images for the marquee effect
import images from "./images"

function HomePage() {
    const [height, setHeight] = useState();
    const carousel = useRef();

    useEffect(() => {
        setHeight(carousel.current.scrollHeight - carousel.current.offsetHeight);
    }, [])

    return (
        <Flex p="50px" gap="50px" h="100%">
            <motion.div ref={carousel} className="carousel" initial = {{opacity:0}} animate={{opacity:1}} transition={{duration:1.2,type:"ease-in"}}>
                <motion.div drag="y" dragConstraints={{ bottom: 0, top: -height }} className="inner-carousel">
                    {images.map(image => {
                        return (
                            <motion.div className="item" key={image} whileHover={{ scale: 1.03 }}>
                                <img src={image} alt="" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
            <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 1 }}><Flex h="100%" className="HomePageContent" align="center">Vaishnavi Padmanathan is an Indian writer for screen and television who has been asking the question 'Why not?' since she was a kid. As her parents did not have the answer to this, she started exploring this very question in her daydreams from an early age. Those daydreams have now taken the form of a lifelong quest after she majored in journalism and then found her passion for screenwriting through making no-budget student short films.
            </Flex></motion.div>
        </Flex>
    );
}

export default HomePage;
