'use client';
import Image from "next/image";
import React,{useState, useEffect} from "react"
import { Timeline } from "@/components/ui/timeline";


import ieeescreen01 from "../images/IEEEscreen01.png"
import ieeescreen02 from "../images/IEEEscreen02.png"

import bjic01 from "../images/BJIC_overview.png"
import bjic02 from "../images/BJIC_overview02.png"
import bjic03 from "../images/BJIC_overview03.png"
import bjic04 from "../images/BJIC_payment.png"

import {motion} from 'framer-motion'

import Modal from "../components/myComponents/modal/modal"

import { siNextdotjs } from "simple-icons";
import { Scale } from "lucide-react";


export function TimelineDemo() {
  
  const [modalOpen, setModalOpen] = useState(false);
  
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);


  const svgsUsed = {
    nextjs:(<svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      width="20" // Adjust as needed
      height="20" // Adjust as needed
      viewBox="0 0 24 24"
      fill="currentColor" // Optional: customize the fill color
      style={{pointerEvents:'none'}}
    >
      <title>{siNextdotjs.title}</title> {/* Accessible title */}
      <path d={siNextdotjs.path} />
    </svg>),

    tailwind:(
      <img
      src="/tailwindcss-mark.svg"
      alt="Tailwind CSS Logo"
      style={{pointerEvents:'none'}}>
      </img>
    ),

    linux:(<img
      src="/linux-mark.svg"
      alt="Linux CSS Logo"
      style={{pointerEvents:'none'}}>
      </img>),

    nginx:(
      <img src="./nginx-svgrepo-com.svg"alt="Linux CSS Logo"
      style={{pointerEvents:'none'}}></img>
    ),
    sqlsvg:(
      <img src="./postgresql-logo-svgrepo-com.svg"alt="Linux CSS Logo"
      style={{pointerEvents:'none'}}></img>
    )



  }
  
  const contents = {
    desktopdiv:
    (<div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll">
      <h1><b className="text-blue-400 text-3xl">WebMaster</b></h1>
      <p>For McMaster's IEEE Student Branch</p>

      <p>As the Webmaster for McMaster’s IEEE Student Chapter, I am responsible for designing, developing, and maintaining the chapter's online presence. My role requires me to build robust, dynamic, and user-friendly web applications that support the organization’s operations and enhance the experience for members and visitors.</p>
      
      <p className="my-3"><b>Key Responsibilities and Contributions</b></p>
      <ul>

        <li><b>Dynamic Frontend Development:</b>
        <p>Designed and implemented dynamic, responsive, and visually appealing user interfaces using Next.js, Tailwind CSS, and various modern UI libraries. These tools enable the chapter’s website to deliver a seamless user experience across devices, ensuring accessibility and usability for all members.</p>
        <div className="m-1" style={{display:'flex', gap:'15px'}}>
          <motion.div style={{width:'20px', display:'flex', justifyContent:'center', alignItems:'center'}} whileHover={{scale:1.8}}>
          {svgsUsed.nextjs}
          </motion.div>
          <motion.div style={{width:'20px', display:'flex', justifyContent:'center', alignItems:'center'}} whileHover={{scale:1.8}}>
          {svgsUsed.tailwind}
          </motion.div>


        </div>
        </li>

        <li>
          <p><b>Hosting and Deployment:</b></p>
          <p>Leveraged my expertise in Linux to set up personal servers for hosting and deploying our web applications. This approach provides flexibility and cost-effectiveness while allowing for greater control over server configurations, performance, and security. </p>
            <div style={{display:'flex'}}>

            <motion.div className="m-1" style={{width:'20px', display:'flex', justifyContent:'center', alignItems:'center'}} whileHover={{scale:1.8}} >
            {svgsUsed.linux}
            </motion.div>
            <motion.div className="m-1" style={{width:'25px', display:'flex', justifyContent:'center', alignItems:'center'}} whileHover={{scale:1.8}}>
            {svgsUsed.nginx}
            </motion.div>

            </div>
        
        </li>


        <li><p><b>Secure Login and Database Systems:</b></p>
        <p>Developed secure login and authentication mechanisms to ensure that sensitive member information is protected. Additionally, worked extensively with PostgreSQL to build and manage robust database systems that store critical data for the chapter’s operations.</p>
        <motion.div className="m-1" style={{width:'20px', display:'flex', justifyContent:'center', alignItems:'center'}} whileHover={{scale:1.8}}>
          {svgsUsed.sqlsvg}
        </motion.div>
        </li>

        <li>
          <p><b>Database of Shop Components (Ongoing):</b></p>
          <p>Currently, I am leading an initiative to develop a comprehensive database system to display and track the components available in the IEEE shop. This system will streamline inventory management and make it easier for members to search for and request components online. By integrating this system with the chapter’s website, we aim to improve the shop’s efficiency and usability.</p>

        </li>



      </ul>


      
    </div>)
  
    }


  const data = [
    {
      title: "Nov 2024 - Present",
      content: (
        <div>
            <div className="my-10">
              <div>
                <p className="text-neutral-500 hover:text-neutral-400 md:font-normal text-4xl mb-1 webmastertitle" onClick={()=>(modalOpen?close():open())}>
                    <b>WebMaster</b>
                </p>

                <p className="mb-8"><b>McMaster's IEEE Student Branch</b></p>


              </div>
                <p>As the webmaster for McMaster's IEEE, I specialized in building dynamic and responsive front-end user interfaces using Next.js, Tailwind, and modern UI libraries. I also leveraged Linux to create personal servers for hosting and deployment and developed secure login and database systems with PostgreSQL.</p>
            </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            <Image src={ieeescreen01} width={500} height={500} alt="other picture"></Image>
            <Image src={ieeescreen02} width={500} height={500} alt="other picture"></Image>
            
          </div>
        </div>
      ),
    },
    {
      title: "July - Aug 2024",
      content: (
        <div>
        <div className="my-10">
          <div>
            <p className="text-neutral-500 hover:text-neutral-400 md:font-normal text-4xl mb-1 webmastertitle">
                <b>FrontEnd Developer</b>
            </p>

            <p className=" hover:text-neutral-400 mb-4"><b>BJIC (Baitul Jannah Islamic Center)</b></p>



          </div>
            <p className="hover:text-neutral-400">As the webmaster for McMaster's IEEE, I specialized in building dynamic and responsive front-end user interfaces using Next.js, Tailwind, and modern UI libraries. I also leveraged Linux to create personal servers for hosting and deployment and developed secure login and database systems with PostgreSQL.</p>
        </div>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
        <Image src={bjic01} width={500} height={500} alt="other picture"></Image>
        <Image src={bjic02} width={500} height={500} alt="other picture"></Image>
        <Image src={bjic03} width={500} height={500} alt="other picture"></Image>
        <Image src={bjic04} width={500} height={500} alt="other picture"></Image>
        
      </div>
    </div>
      ),
    },
    {
      title: "Jan - Jun 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Card grid component
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Startup template Aceternity
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Random file upload lol
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
    
    <div className="w-full">
    {modalOpen && <Modal modalOpen={modalOpen} contentdiv={contents.desktopdiv} handleClose={close} text=""/>}
      <Timeline data={data}></Timeline>
    </div>
    </>
  );
}
