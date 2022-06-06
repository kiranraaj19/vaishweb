import React from 'react';
import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import './css/Sidebar.css'
import {Link} from "react-router-dom"

function Sidebar(props) {


    return (

        <Flex direction="column" justify="space-around">
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

    );
}

export default Sidebar;
