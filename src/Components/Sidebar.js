import React from 'react';
import { Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import './Sidebar.css'


function Sidebar(props) {


    return (

        <Flex direction="column" justify="space-around">
            {props.Tabs.map((prop) =>
                <motion.div
                    initial={{ rotate: 90 }}
                    whileHover={{ scale: 1.3 }}
                    key={prop.id}
                    className="Tabs"
                >
                    {prop.title}
                </motion.div>
            )
            }
        </Flex>

    );
}

export default Sidebar;
