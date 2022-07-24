import React from 'react';
import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import './css/Sidebar.css'
import { Link } from "react-router-dom"

function Sidebar(props) {


    return (

        <motion.div initial={{y:-500,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:1.2,duration:1.2,type:"tween"}}>
            <Flex h={["40px","40px","40px","100%"]} direction={["row","row","row","column"]} justify="space-around">
                {props.Tabs.map((prop) =>
                    <Link to={prop.link} key={prop.id}>
                        <motion.div
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
