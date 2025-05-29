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
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f2f5',
          padding: '1rem',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '900px',
            height: '90vh',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
            borderRadius: '12px',
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
