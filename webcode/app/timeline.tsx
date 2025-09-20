'use client';
import Image from "next/image";
import React,{useState} from "react"
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
  };

  const modalContents = {
    ericsson: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">Software Engineering Intern</h1>
        <p><b>Ericsson</b> – Ottawa, Ontario</p>
        <ul className="list-disc ml-5 mt-3">
          <li>Will be starting this fall</li>
        </ul>
      </div>
    ),
    heatherGlen: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">Embedded Systems Intern</h1>
        <p><b>Heather Glen Village</b> – Milton, Ontario</p>
        <ul className="list-disc ml-5 mt-3">
          <li>Engineered embedded software for 12+ industrial devices using Modbus RTU over RS-485</li>
          <li>Implemented I²C and UART drivers on ESP32/Arduino boards for real-time data collection from 20+ sensors</li>
          <li>Debugged HVAC control logic, improving system response time by 30%</li>
          <li>Developed internal tooling that automated 90% of firmware deployment</li>
        </ul>
      </div>
    ),
    aerialRobotics: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">Software Team Lead</h1>
        <p><b>McMaster Aerial Robotics Team</b> – Hamilton, Ontario</p>
        <ul className="list-disc ml-5 mt-3">
          <li>Interviewed over 100 candidates and onboarded 10 new team members</li>
          <li>Developing object detection algorithms using OpenCV and TensorFlow</li>
          <li>Led PCB design workshops using Altium Designer</li>
          <li>Built team website with Next.js and planned AWS EC2 deployment via Docker</li>
        </ul>
      </div>
    ),
    ieee: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">WebMaster</h1>
        <p><b>IEEE McMaster Student Branch</b> – Hamilton, Ontario</p>
        <ul className="list-disc ml-5 mt-3">
          <li>Built dynamic frontend UI using Next.js and Tailwind</li>
          <li>Used Docker and Kubernetes for local Raspberry Pi cluster deployment</li>
          <li>Developed authentication system with Prisma, PostgreSQL, OAuth, and Bcrypt</li>
        </ul>
      </div>
    ),
    bjic: (
      <div className="bg-white w-[70vw] rounded-lg px-10 py-5 overflow-y-scroll" style={{ maxHeight: '80vh' }}>
        <h1 className="text-blue-400 text-3xl font-bold">Frontend Developer</h1>
        <p><b>Baitul Jannah Islamic Center (BJIC)</b> – Scarborough, Ontario</p>
        <ul className="list-disc ml-5 mt-3">
          <li>Built and launched a responsive community website using vanilla JS and modular CSS</li>
          <li>Improved accessibility and boosted engagement by 40%</li>
        </ul>
      </div>
    )
  };

  const data: TimelineItem[] = [
     {
      title: "Sep 2025 - Aug 2026",
      content: (
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="my-10">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>Software Engineering Intern</b>
              <button onClick={() => open(modalContents.ericsson)} className="text-sm text-neutral-500 underline">click me</button>
            </div>
            <p className="mb-4"><b>Ericsson</b></p>
            <p>Will be starting this fall</p>
          </div>
        </motion.div>
      )
    },
    {
      title: "May 2025 - Aug 2025",
      content: (
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="my-10">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>Embedded Systems Intern</b>
              <button onClick={() => open(modalContents.heatherGlen)} className="text-sm text-neutral-500 underline">click me</button>
            </div>
            <p className="mb-4"><b>Heather Glen Village</b></p>
            <p>Engineered embedded software for industrial devices, implemented low-level drivers, and automated firmware deployment tasks.</p>
          </div>
        </motion.div>
      )
    },
    {
      title: "Jan 2025 - Present",
      content: (
        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <div className="my-10">
            <div className="text-neutral-500 text-4xl mb-1 flex gap-3 items-center">
              <b>Software Team Lead</b>
              <button onClick={() => open(modalContents.aerialRobotics)} className="text-sm text-neutral-500 underline">click me</button>
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
        <motion.div
        initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
          transition={{ duration: 0.5, delay: 0 }}>
        <div>
            <div className="my-10">
              <div>
                <div className="text-neutral-500 hover:text-neutral-400 md:font-normal text-4xl mb-1 webmastertitle flex gap-5" onClick={()=>(modalOpen?close():open())}>
                    <b>WebMaster</b> <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><p className="text-sm" style={{}}>click me</p></div>
                </div>

                <p className="mb-8"><b>McMaster's IEEE Student Branch</b></p>


              </div>
                <p>As the webmaster for McMaster's IEEE, I specialized in building dynamic and responsive front-end user interfaces using Next.js, Tailwind, and modern UI libraries. I also leveraged Linux to create personal servers for hosting and deployment and developed secure login and database systems with PostgreSQL.</p>
            </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            <Image src={ieeescreen01} width={500} height={500} alt="other picture"></Image>
            <Image src={ieeescreen02} width={500} height={500} alt="other picture"></Image>
            
          </div>
        </div>
        </motion.div>
      ),
    },
    {
      title: "July - Aug 2024",
      content: (
        <motion.div
        initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
          transition={{ duration: 0.5, delay: 0 }}>
        <div>
        <div className="my-20">
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
    </motion.div>
      ),
    },
    // {
    //   title: "Jan - Jun 2024",
    //   content: (
    //     <div className="my-10">
    //        <p className="text-neutral-500 hover:text-neutral-400 md:font-normal text-4xl mb-1 webmastertitle">
    //             <b>Math Tutor</b>
    //       </p>
    //       <div className="mb-8">
    //        MATH TUTOR
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
            
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <>
    
    <div className="w-full">
    {modalOpen && <Modal modalOpen={modalOpen} contentdiv={contents.desktopdiv} handleClose={close}/>}
      <Timeline data={data}></Timeline>
    </div>
    </>
  );
}
