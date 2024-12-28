'use client';

import { useState, useEffect } from 'react';
import DeskTopPage from '../components/frontPageFunctionaility/desktopPage'
import MobilTopPage from '../components/frontPageFunctionaility/mobilePage'

import {TimelineDemo} from './timeline'; 



const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check the screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500); // Adjust the breakpoint as needed
    };

    // Check the screen size initially
    handleResize();

    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? <MobilTopPage /> : <DeskTopPage />;

}

export default App;

