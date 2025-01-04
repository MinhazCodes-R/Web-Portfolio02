'use client';
import {motion, useScroll} from "framer-motion"

import Header from "../myComponents/header"

import {HeroHighlight, Highlight} from "../ui/hero-highlight"

import React, {useRef} from "react";

import BodyImport01 from "./bodyimport01";

import Image from 'next/image'
import ProfilePic from '../../app/IMG_5635.jpg'
import BodyImport03 from './bodyimport03';

import { FloatingDock } from "@/components/ui/floating-dock";

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


const links = [
  {
    title: "LinkedIn",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Link",
    icon: (
      <IconBrandGithub className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <IconBrandYoutube className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Changelog",
    icon: (
      <IconBrandInstagram className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Twitter",
    icon: (
      <IconMailOpened className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconPhone className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
  },
];






const MobilTopPage = () => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
      return (
        <>


        <section ref={targetRef} className='relative h-[200vh]' style={{}}>
  
            <div className="sticky top-0 z-50" >
              <Header ></Header>
            </div>

            <div style={{height:"auto"}}>
              <div className="text-neutral-400 ml-3 mt-1"  style={{overflow:'hidden'}}>Click for Socials</div>
              <div className="bg-neutral-200 w-[100vw]" style={{display:'flex', alignItems:"center",height:"64px", width:"200vw", zIndex:"100", backgroundColor:"",overflow:'hidden'}}>
                <div className='ml-5'>
                  <FloatingDock 
                  items={links}/>
                  
                </div>
                                  
                                  
              </div>
    
              <div className="" style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                <HeroHighlight
                containerClassName="h-40"
                className="text-3xl leading-relaxed"
                >
      
                <h1>I am a</h1> <Highlight><b>Computer Engineering</b></Highlight><h1> student at McMaster</h1>
                </HeroHighlight>
              </div>

            </div>
  

  
  
  
  
            <div className=" content-center z-20" style={{overflow:"hidden", marginLeft:"auto", marginRight:"auto"}}>

              <div className="place-content-center mt-10" style={{display:"flex", flexDirection:"column"}}>

              <div className="pl-8">
                <BodyImport01 scrollYProgress={scrollYProgress}>
                    
                </BodyImport01>


              </div>




              <motion.div className='' style={{paddingLeft:'50px'}}>

              <Image className="w-60 rounded-bl-xl rounded-tr-3xl" src={ProfilePic} alt="somethingelse"></Image>


              </motion.div>

              </div>
  
            </div>


            <div>
            <BodyImport03 scrollYProgress={scrollYProgress}></BodyImport03>
            </div>
  
            
  
  
  
  
  
    
    
    
        </section>

      </>
      )
}

export default MobilTopPage;

