import React, { useState, useEffect } from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react'
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
		<Flex p={["0px 20px", "0 20px", "0 20px", "20px"]} h="auto" w="100%" direction={['column', 'column', 'column', 'row']} align="center" justify="center">
			<Flex align="center" w={["50%", "50%", "30%", "300px"]} py={["15px", "15px", "15px", "0px"]}>
				<img src={images[0]} alt="Vaishnavi"></img>
			</Flex>
			<Flex w={["100%", "100%", "70%", "70%"]} px={["0px", "0px", "0px", "15px"]}>
				<motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }}>
					<Flex h="100%" className="HomePageContent" align="center" direction="column" minH={["auto", "auto", "auto", "70vh"]}>
						<motion.div layout transition={{ duration: 0.6 }}>
							<motion.div layout>
								<Box fontSize={["15px", "20px", "24px", "24px"]}>
									<Heading as='h3' size='lg'> Me, Myself, and I (Named after the first essay I ever wrote as a kid) </Heading>
									I am an Indian writer for television and screen who has been asking the question 'Why not?' to everything since I was a kid. As my parents did not have the answers to my constant questioning of the world, I started investigating my queries in my daydreams. Those daydreams have now taken the form of a lifelong quest for storytelling. I settled on this as my life's purpose only after majoring in journalism where I learned the useful inverted pyramid and made a bunch of zero-budget student films.
		{!selected && (<div onClick={() => setSelected(!selected)} className="OpenTags">Read More...</div>)}
								</Box>
							</motion.div>
							{selected && (
								<motion.div>
									<Box fontSize={["15px", "20px", "24px", "24px"]}>
								<br/>
										Although I hold an MFA degree in Dramatic Writing from New York University's Tisch School of the Arts, I hold my (functionally dysfunctional) family more dear as they are my biggest source of inspiration in life and my writings. I tend to write all of my stories as letters to my loved ones. I also like to make sure that each story of mine has humor and specificity at its core. Once upon a time, I used to feel like I am traveling the world when I consumed a story a day, and that's what I wish and hope for the folks who experience my work. <br/><br/>
										And one last thing to know about me, I plan to build my own secret library one day so that I can daydream (and write) in peace.
								<div onClick={() => setSelected(!selected)} className="OpenTags">Read Less...</div>
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
