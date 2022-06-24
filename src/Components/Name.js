import React from 'react';
import { motion } from "framer-motion"
import './css/Name.css'

function Name() {
    let width= window.innerWidth;

    return (
        <>
        <motion.div className="Name" whileHover={{scale:1.05}} initial = {{rotate:270,y:0,x:(width/2)-100, scale:2}} animate = {{rotate:180,y:0,x:0,scale:1}} transition={{type:"tween",duration:1.2,delay:0.6}}>
            VAISHNAVI PADMANATHAN
        </motion.div>
        <div className="spacer"></div>
        </>
    );
}

export default Name;
