'use client'
import React,{useRef} from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { div, section } from 'framer-motion/client';
import {motion, useTransform, useScroll} from 'framer-motion';


export default function App() {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target:targetRef,
    });

    const x1= useTransform(scrollYProgress, [0,.5], ["0%","-100%"]);
    const x2= useTransform(scrollYProgress, [0,.5], ["0%","100%"]);

  return (

    <section ref={targetRef} className='relative h-[300vh] bg-neutral-900' style={{overflow:"hidden"}}>

        <div className='sticky top-0 p-40 content-center h-screen flex gap-10 items-center overflow-hidden'>
            <motion.div style={{x:x1}} className="flex gap-4">
                <div style={{width:"100px",height:"100px", background:'black'}}></div>

            </motion.div>
            <motion.div style={{x:x2}} >
            <div style={{width:"100px",height:"100px", background:'black'}}></div>

            </motion.div>

        </div>
        <div className='bg-red-500 h-[200vh] w-[100vw]'></div>

    </section>



  );
}
