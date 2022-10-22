import React, { useState, useEffect } from 'react';
import { Flex, Box } from '@chakra-ui/react'
import "./css/HomePage.css"
import { motion } from "framer-motion"
// importing all images for the marquee effect
import images from "./images"

function HomePage() {
    // state variables to see if read more is pressed or not
    const [selected, setSelected] = useState(null);

    useEffect(() => {

    }, [])

    return (
        <Flex p={["0px 20px","0 20px", "0 20px","20px"]} h="auto" w="100%" direction={['column', 'column', 'column', 'row']} align="center" justify="center">
            <Flex align="center" w={["50%","50%","30%","250px"]} py={["15px","15px","15px","0px"]}>
                <img src={images[0]} alt="Vaishnavi"></img>
            </Flex>
            <Flex w={["100%","100%","70%","70%"]} px={["0px","0px","0px","15px"]}>
                <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }}>
                    <Flex h="100%" className="HomePageContent" align="center" direction="column" minH={["auto","auto","auto","70vh"]}>
                        <motion.div layout transition={{ duration: 0.6 }}>
                            <motion.div layout>
                                <Box fontSize={["15px", "20px", "24px", "24px"]}>
                                    Vaishnavi Padmanathan is an Indian writer for screen and television who has been asking the question 'Why not?' since she was a kid. As her parents did not have the answer to this, she started exploring this very question in her daydreams from an early age. Those daydreams have now taken the form of a lifelong quest after she majored in journalism and then found her passion for screenwriting through making no-budget student short films. {!selected && (<div onClick={() => setSelected(!selected)} className="OpenTags">Read More...</div>)}
                                </Box>
                            </motion.div>
                            {selected && (
                                <motion.div>
                                    <Box fontSize={["15px", "20px", "24px", "24px"]}>
                                        Although she holds an MFA degree in Dramatic Writing from New York University's Tisch School of the Arts, Vaishnavi holds her family more dearly as they are her biggest source of inspiration in life and her stories. She tends to write all of her stories as letters to her loved ones but wants these letters to be emotional roadmaps for the audience. She used to travel the world by reading and watching stories, and that's what she wishes for the folks who experience her work, too. She also likes to write every story with humor at its heart as an act of rebellion. She says she's rebelling for her teen self, who had to hold in her laughs to adhere to the all-girl Catholic school norms.

                                        Vaishnavi's viewing and reading list has been growing along with her. She hopes to build her own secret library one day so that she can daydream (and write) in peace. <div onClick={() => setSelected(!selected)} className="OpenTags">Read Less...</div>
                                    </Box>
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
