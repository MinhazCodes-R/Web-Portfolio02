'use client';
import Header from "../../components/myComponents/header"
import {motion} from "framer-motion"
import {useState} from "react"
import BackDrop from "../../components/myComponents/modal/backdrop"
import Modal from "../../components/myComponents/modal/modal"
import { div } from "framer-motion/client";

import { X, Home, User, Settings, HelpCircle } from 'lucide-react'


import {BackgroundBeamsWithCollisionDemo} from "../backgroundwithcollision";
import {LampDemo} from "../lampdisplay"


const App = () => {
  
  return (
    <>
    <Header></Header>
    </>
  )
}

export default App;



// <motion.div
// animate={{ x: position }} // Animate the x property
// transition={{ type: "spring", stiffness: 100 }} // Animation settings
// style={{
//   width: "50px",
//   height: "50px",
//   backgroundColor: "blue",
//   position: "absolute",
// }}