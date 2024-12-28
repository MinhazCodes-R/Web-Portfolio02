'use client';
import {motion, useScroll} from "framer-motion"
import {useState} from "react"
import Header from "@/components/myComponents/header"


import React, {useRef} from "react";

import Image from 'next/image'
import { section } from "framer-motion/client";
import {TimelineDemo} from "../timeline"
import Modal from "@/components/myComponents/modal/modal";
import BackDrop from "@/components/myComponents/modal/backdrop"




const App = () => {



  return (
    <section>
      <Header></Header>
      <TimelineDemo></TimelineDemo>
      
    </section>
    )

}

export default App;

