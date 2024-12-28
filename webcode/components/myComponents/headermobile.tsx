'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {motion} from "framer-motion";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

  const links = [

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
              <svg className="h-8 w-auto sm:h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="ml-2 text-xl font-bold text-primary">MinhazsLOGO</span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Button
              variant="ghost"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/about" className="text-base font-medium text-foreground hover:text-primary">
              <motion.button whileHover={{scale:1.5}}>Home</motion.button>
            </Link>
            <Link href="/services" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.5}}>Experience</motion.button>
            </Link>
            <Link href="/contact" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.5}}>Projects</motion.button>
            </Link>
            <Link href="/contact" className="text-base font-medium text-foreground hover:text-primary">
            <motion.button whileHover={{scale:1.5}}>Resume</motion.button>
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Button variant="ghost" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="ml-8">
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
            About
          </Link>
          <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
            Services
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
            Contact
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-accent">
          <div className="px-2 space-y-1">
            <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
              Log in
            </Link>
            <Link href="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

