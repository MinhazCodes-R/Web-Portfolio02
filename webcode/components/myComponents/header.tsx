'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Home  } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {motion} from "framer-motion";

import React from "react";
import Modal from './modal/modal'

import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

  // const links = [

  //   {
  //     title: "Twitter",
  //     icon: (
  //       <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  //   {
  //     title: "GitHub",
  //     icon: (
  //       <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //     ),
  //     href: "#",
  //   },
  // ];



  const Header = () => {


    const [modalOpen, setModalOpen] = useState(false);
    
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);



  const content_display ={
    menueitem:(
      <>


      <nav className="flex-grow">
        <ul className="space-y-2 w-[80vw]">
          <li>
            <Link onClick={close} href="./" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200">
              <Home size={24} className="text-black" />
              <span className="font-medium">Home</span>
            </Link>
          </li>
          <li>
            <Link onClick={close} href="./experience" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
              <span className="font-medium">
                Experience</span>
            </Link>
          </li>
          <li>
            <Link onClick={close} href="./projectsdone" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-git-2"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/><circle cx="13" cy="12" r="2"/><path d="M18 19c-2.8 0-5-2.2-5-5v8"/><circle cx="20" cy="19" r="2"/></svg>
              <span className="font-medium">Projects</span>
            </Link>
          </li>
          <li>
            <Link onClick={close} href="./" className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-user"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 18a3 3 0 1 0-6 0"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><circle cx="12" cy="13" r="2"/></svg>
              <span className="font-medium">Resume</span>
            </Link>
          </li>
        </ul>
      </nav>
    
      </>
    )
  };
  

  return (
    <header className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="h-10 flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Your Company</span>
              <span>
                {/* <div className="flex items-center justify-center h-[35rem] w-full">
                <FloatingDock
                  mobileClassName="translate-y-20" 
                  items={links}
                />
              </div> */}
            </span>
              {/* Replace with your logo */}

              <span className="ml-2 text-xl font-bold text-primary">MinhazCodes</span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              onClick={open}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                >
              <Menu className="h-6 w-6"/>
            </Button>
          </div>
          <nav className="hidden md:flex space-x-8">

            <Link href="/" className="text-base font-medium text-foreground hover:text-primary">
              <motion.button whileHover={{scale:1.}}>
                <div className='flex'>
                <Home size={24} className="text-black" />
                Home


                </div>
                
                
                </motion.button>
            </Link>
            <Link href="/experience" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.2}}>
              <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-business"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
              Experience
              </div>
            </motion.button>
              
            </Link>
            <Link href="/projectsdone" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.2}}>

              <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-git-2"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/><circle cx="13" cy="12" r="2"/><path d="M18 19c-2.8 0-5-2.2-5-5v8"/><circle cx="20" cy="19" r="2"/></svg>
              Projects
              </div>
              
              
              </motion.button>
            </Link>
            <Link href="/contact" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.2}}>

              <div className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-user"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 18a3 3 0 1 0-6 0"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><circle cx="12" cy="13" r="2"/></svg>
              Resume

              </div>
              </motion.button>
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {/* <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="ml-8">
              <Link href="/signup">Sign up</Link>
            </Button> */}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {modalOpen && <Modal modalOpen={modalOpen} contentdiv={content_display.menueitem} handleClose={close}/>}
      
    </header>
  )
}

export default Header

