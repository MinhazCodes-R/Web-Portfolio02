'use client';


import { div } from "framer-motion/client";
import { FlipWords } from "../ui/flip-words";

import React, { useEffect, useState } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { FloatingDock } from "@/components/ui/floating-dock";
import {motion, useTransform} from "framer-motion"
import BodyImport03 from "./bodyimport03";

import {
    IconBrandGithub,
    IconBrandGmail,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandX,
    IconBrandYoutube,
    IconExchange,
    IconHome,
    IconMailAi,
    IconMailOpened,
    IconMailX,
    IconNewSection,
    IconPhone,
    IconTerminal2,
  } from "@tabler/icons-react";
import Image from "next/image";


const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/minhazur-rakin/",
    },
 
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "YouTube",
      icon: (
        <IconBrandYoutube className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Email",
      icon: (
        <IconMailOpened className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Phone",
      icon: (
        <IconPhone className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

    const words = ["JavaScript", "C/C++", "Python"];
const BodyImport01 = ( {scrollYProgress}) => {
  const x1= useTransform(scrollYProgress, [0,.5], ["0%","-200%"]);
  const y1= useTransform(scrollYProgress, [.3,.6], ["0%","-1000%"]);
  const y2= useTransform(scrollYProgress, [.6,.9], ["0%","0%"]);


  const phone_x1= useTransform(scrollYProgress, [.1,.8], ["0%","-200%"]);
  const phone_y1= useTransform(scrollYProgress, [.3,1], ["0%","0%"]);
  const phone_y2= useTransform(scrollYProgress, [.6,.9], ["0%","0%"]);

   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check the screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500); // Adjust the breakpoint as needed
    };

    // Check the screen size initially
    handleResize();

    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


    if(!isMobile){
      return (
        <div>
            <div className="px-4">
                <div className="text-4xl mx-auto mr-10  mb-10 font-normal text-neutral-600 dark:text-neutral-400">
                  <motion.div style={{x:x1,zIndex:'50'}}>
                    <div>
                        I have worked with <FlipWords words={words} /> <br />
                    </div>

                        <p>I am always looking to learn and do more!</p>
                        <p style={{marginTop:"5vh", fontSize:"40px"}}>Other Socials!</p>

                  </motion.div>

                

                        
                </div>
                <div style={{width:"auto", height:''}}>

                  <motion.div style={{y:y1,zIndex:'100', position:'relative'}} >
                    <FloatingDock
                    items={links}/>

                    
                  </motion.div>
                    


                </div>
            </div>
                {/* <div  style={{width:"auto"}}>
                  <motion.div style={{y:y2}}>

                      <BodyImport03></BodyImport03>
                  </motion.div>

                </div> */}


        </div>
    )

    }
    else{
      return (
        <div>
            <div className="px-4">
                <div className="text-3xl mx-auto mr-10  mb-10 font-normal text-neutral-600 dark:text-neutral-400">
                  <motion.div style={{x:phone_x1,zIndex:'50'}}>
                    <div>
                        I have worked with <FlipWords words={words} /> <br />
                    </div>

                        <p>I am always looking to learn and do more!</p>
                        <p style={{marginTop:"5vh"}}>Check Out My Socials!</p>

                  </motion.div>

                

                        
                </div>
                <div style={{width:"auto", height:''}}>
                    


                </div>
            </div>
                {/* <div  style={{width:"auto"}}>
                  <motion.div style={{y:y2}}>

                      <BodyImport03></BodyImport03>
                  </motion.div>

                </div> */}


        </div>
    )
    }



}

export default BodyImport01;



