'use client';
import {motion, useScroll} from "framer-motion"
import {useState} from "react"

import Header from "../myComponents/header"

import {HeroHighlight, Highlight} from "../ui/hero-highlight"

import React, {useRef} from "react";
import { FlipWords } from "../ui/flip-words";

import BodyImport01 from "./bodyimport01";
import OddlyShapedProfilePhoto from "../myComponents/profileMinhaz"

import Image from 'next/image'
import ProfilePic from '../../app/IMG_5635.jpg'



import BodyImport02 from "./bodyimport02";
import BodyImport03 from './bodyimport03';





const DeskTopPage = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
      return (
        <section ref={targetRef} className='relative h-[300vh]' style={{}}>
    
            {/* <MinhazCanva></MinhazCanva> */}
  
            <div className="sticky top-0 z-50">
  
  
            <Header ></Header>
            <div style={{height:"auto"}}>
    
              <div className="" style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                <HeroHighlight
                containerClassName="h-40"
                className="text-4xl"
                >
      
                <h1>I am a <Highlight><b>Computer Engineering</b></Highlight> student at McMaster</h1>
      
      
                </HeroHighlight>
              </div>
            </div>
  
            </div>
  
            {/* <MinhazCanva></MinhazCanva> */}
  
  
  
  
            <div className="sticky content-center top-56 z-20" style={{overflow:"hidden", marginLeft:"auto", marginRight:"auto"}}>
  
                <BodyImport02 scrollYProgress={scrollYProgress}></BodyImport02>
  
            </div>
  
  
            <div className="content-center top-56 -z-20" style={{position:'fixed', marginLeft:"auto", marginRight:"auto"}}>
  
              <BodyImport03 scrollYProgress={scrollYProgress}></BodyImport03>
  
            </div>
  
  
  
  
  
    
    
    
        </section>
      )
}

export default DeskTopPage;

