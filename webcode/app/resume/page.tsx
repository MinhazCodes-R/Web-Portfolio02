'use client';

import Header from "../../components/myComponents/header";
import { motion } from "framer-motion";
import { useState } from "react";
import BackDrop from "../../components/myComponents/modal/backdrop";
import Modal from "../../components/myComponents/modal/modal";
import { X, Home, User, Settings, HelpCircle } from 'lucide-react';

import { BackgroundBeamsWithCollisionDemo } from "../backgroundwithcollision";
import { LampDemo } from "../lampdisplay";

const App = () => {
  return (
    <>
      <Header />

      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f2f5',
          padding: '2rem',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '90%',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)', // large bold drop shadow
            borderRadius: '16px',
            overflow: 'hidden',
            backgroundColor: '#fff',
          }}
        >
          <iframe
            src="/Minhazs_Resume.pdf#view=Fit"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </>
  );
};

export default App;
