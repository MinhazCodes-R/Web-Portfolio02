'use client';

import React,{useEffect, useRef, useState} from 'react';

import Header from "../myComponents/header"

import {HeroHighlight, Highlight} from "../ui/hero-highlight"


import { FlipWords } from "../ui/flip-words";

import BodyImport01 from "./bodyimport01";
import OddlyShapedProfilePhoto from "../myComponents/profileMinhaz"

import Image from 'next/image'
import ProfilePic from '../../app/IMG_5635.jpg'
import { div, section } from "framer-motion/client";


import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import {motion, useTransform, useScroll} from 'framer-motion';




const BodyImport02 = ( {scrollYProgress}) => {
    const targetRef = useRef(null);

    const x1= useTransform(scrollYProgress, [0,.5], ["0%","-200%"]);
    const x2= useTransform(scrollYProgress, [0,.5], ["0%","500%"]);


    const y= useTransform(scrollYProgress, [.3,.6], ["10%","10%"]);
    const phone_x =  useTransform(scrollYProgress, [.3,.6], ["0%","100%"]);
    
     const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };

    // Check the screen size initially
    handleResize();

    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    
    
    if (!isMobile){
      return (
        <div>
            <div className="place-content-center mt-10" style={{display:"flex", flexDirection:"row"}}>



                    <BodyImport01 scrollYProgress={scrollYProgress}>
                        
                    </BodyImport01>


                <motion.div className='' style={{x:x2}}>

                    <Image className="w-60 rounded-bl-xl rounded-tr-3xl" src={ProfilePic} alt="somethingelse"></Image>


                </motion.div>


                

                



            </div>

        </div>)
  
  
}
else{

  return (
    
    <div>

      <div className="place-content-center mt-10" style={{display:"flex", flexDirection:"column"}}>



      <BodyImport01 scrollYProgress={scrollYProgress}>
          
      </BodyImport01>


      <motion.div className='' style={{x:phone_x,y:y,display:'flex',justifyContent:'center',alignItems:'center'}}>

      <Image className="w-60 rounded-bl-xl rounded-tr-3xl" src={ProfilePic} alt="somethingelse"></Image>


      </motion.div>

      </div>

      </div>
      )
  }
}

export default BodyImport02;

