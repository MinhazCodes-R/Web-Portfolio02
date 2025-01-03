'use client';

import { div } from "framer-motion/client";
import { FlipWords } from "../ui/flip-words";

import React, { useEffect, useState } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { FloatingDock } from "@/components/ui/floating-dock";
import {motion, useTransform} from "framer-motion"



const BodyImport03 = ({scrollYProgress}) => {
      const y2= useTransform(scrollYProgress, [0,.5], ["300%","10%"]);

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

    if (!isMobile){
    return (
    <div className="" style={{transform:'translateY(0px)'}}>
        <div style={{width:'100vw',display:'flex',justifyContent:'center',zIndex:'-100',pointerEvents:'none'}} >

            <motion.div className="" style={{zIndex:'0',y:y2}}>


                <div className="text-3xl text-neutral-600 content-center" style={{maxWidth:'60vw'}}>
                    <p className="m-1 mb-10">Dont let the name fool you!</p>
                    <p className="my-10 text-">While I am studying <i style={{color:'black'}}><b>Computer Engineering</b></i> I have developed my Software Skills by doing lots of Software Work and Projects.</p>
                    <p className="my-10">Check Them Out 😄</p>
                    <p className="my-0">Projects</p>
                    <p className="my-0">Experience</p>
                </div>

            </motion.div>




        </div>
    </div>)
    }
    else{
        return (
        <div className="" style={{transform:'translateY(0px)'}}>
        <div style={{width:'100vw',display:'flex',justifyContent:'center',zIndex:'-100',pointerEvents:'none'}} >

            <motion.div className="" style={{zIndex:'0',y:y2}}>


                <div className="text-4xl text-neutral-600 content-center" style={{maxWidth:'60vw'}}>
                    <p className="m-1 mb-10">Dont let the name fool you!</p>
                    <p className="my-10 text-">While I am studying <i style={{color:'black'}}><b>Computer Engineering</b></i> I have developed my Software Skills by doing lots of Software Work and Projects.</p>
                    <p className="my-10">Check Them Out 😄</p>
                </div>

            </motion.div>




        </div>
        </div>
        )
    }

}

export default BodyImport03;



