import React, { useState, useRef, useEffect } from 'react';
import { Flex } from '@chakra-ui/react'
import "./css/HomePage.css"
import { motion, AnimatePresence } from "framer-motion"
// importing all images for the marquee effect
import images from "./images"

function HomePage() {
    const [height, setHeight] = useState();
    const carousel = useRef();

    // state variables to see if read more is pressed or not
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setHeight(carousel.current.scrollHeight - carousel.current.offsetHeight);
    }, [])

    return (
        <Flex p="50px" gap="50px" h="100%">
            <motion.div ref={carousel} className="carousel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, type: "ease-in" }}>
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
            <Flex>
                <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }}>
                    <Flex h="100%" className="HomePageContent" align="center" direction="column">
                        <motion.div layout>
                            <motion.div layout>
                            Vaishnavi Padmanathan is an Indian writer for screen and television who has been asking the question 'Why not?' since she was a kid. As her parents did not have the answer to this, she started exploring this very question in her daydreams from an early age. Those daydreams have now taken the form of a lifelong quest after she majored in journalism and then found her passion for screenwriting through making no-budget student short films. {!selected && (<div onClick={() => setSelected(!selected)} className="OpenTags">Read More...</div>)}
                            </motion.div>
                            {selected && (
                                <motion.div>
                                    Although she holds an MFA degree in Dramatic Writing from New York University's Tisch School of the Arts, Vaishnavi holds her family more dearly as they are her biggest source of inspiration in life and her stories. She tends to write all of her stories as letters to her loved ones but wants these letters to be emotional roadmaps for the audience. She used to travel the world by reading and watching stories, and that's what she wishes for the folks who experience her work, too. She also likes to write every story with humor at its heart as an act of rebellion. She says she's rebelling for her teen self, who had to hold in her laughs to adhere to the all-girl Catholic school norms.

                                    Vaishnavi's viewing and reading list has been growing along with her. She hopes to build her own secret library one day so that she can daydream (and write) in peace. <div onClick={()=> setSelected(!selected)} className="OpenTags">Read Less...</div>
                                </motion.div>
                            )}
                        </motion.div>
                    </Flex>
                </motion.div>
            </Flex>
        </Flex>
    );
}

export default HomePage;
