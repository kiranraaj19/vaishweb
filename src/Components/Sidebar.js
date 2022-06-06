import React from 'react';
import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import './css/Sidebar.css'
import { Link } from "react-router-dom"

function Sidebar(props) {


    return (

        <motion.div initial={{y:-500,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1.2,duration:1.2,type:"tween"}}>
            <Flex h="100%" direction="column" justify="space-around">
                {props.Tabs.map((prop) =>
                    <Link to={prop.link} key={prop.id}>
                        <motion.div
                            initial={{ rotate: 90 }}
                            whileHover={{ scale: 1.3 }}
                            key={prop.id}
                            className="Tabs"

                        >
                            {prop.title}
                        </motion.div>
                    </Link>
                )
                }
            </Flex>
        </motion.div>
    );
}

export default Sidebar;
