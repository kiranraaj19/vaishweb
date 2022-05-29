import React from 'react';
import { motion } from "framer-motion"
import './Name.css'

function Name() {
    return (
        <>
        <motion.div className="Name" initial = {{rotate:180}} whileHover={{scale:1.1}}>
            VAISHNAVI PADMANATHAN
        </motion.div>
        <div className="spacer"></div>
        </>
    );
}

export default Name;
