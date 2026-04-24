'use client';

import { useState, useEffect } from 'react';
import DeskTopPage from '../components/frontPageFunctionaility/desktopPage'
import MobilTopPage from '../components/frontPageFunctionaility/mobilePage'

import {TimelineDemo} from './timeline'; 



const App = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(data => setProfile(data.profile))
      .catch(console.error);

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

  return isMobile ? (<><MobilTopPage profile={profile} /> <section id="emailandphone">
    <div className="text-xl text-neutral-600 content-center bg-black p-1" style={{ display:'flex',justifyContent:'center', maxWidth:'100vw', transform:'translateY(-60px)'}}>

    <div className='text-white text-center'>
    <p>Email: {profile?.email || 'Minhazur.rakin101@gmail.com'}</p>
    <p>Phone: {profile?.phone || '647 568 8365'}</p>
    </div>

    </div>
</section></>) : <><DeskTopPage profile={profile} /> <section id="emailandphone">

  <div className="text-3xl text-neutral-600 content-center bg-black p-10" style={{ display:'flex',justifyContent:'center', maxWidth:'100vw', transform:'translateY(-100px)'}}>

    <div className='text-white text-center flex gap-10'>
    <p>Email: {profile?.email || 'Minhazur.rakin101@gmail.com'}</p>
    <p>Phone: {profile?.phone || '647 568 8365'}</p>
    </div>

  </div>
</section></>;

}

export default App;

