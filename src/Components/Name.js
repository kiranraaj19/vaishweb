import React from 'react';
import { motion } from "framer-motion"
import './css/Name.css'

function Name() {
    return (
        <>
        <motion.div className="Name" whileHover={{scale:1.05}} initial = {{rotate:180,y:500,opacity:0}} animate = {{y:0,opacity:1}} transition={{type:"tween",duration:1.2,delay:2}}>
            VAISHNAVI PADMANATHAN
        </motion.div>
        <div className="spacer"></div>
        </>
    );
}

export default Name;
