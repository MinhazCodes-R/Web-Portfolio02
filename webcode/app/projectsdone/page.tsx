'use client';

import { useEffect, useState } from "react";
import Header from "@/components/myComponents/header";
import {motion} from "framer-motion";
import { LampDemo } from "../lampdisplay";
import Image from "next/image";

import siemsic01 from "@/images/SeismicImage01.jpeg";

const MobileComponent = () => {
  return (
    <>
      <Header />
      <div></div>

    </>
  );
};




const DesktopComponent = () => {
  return (
    <>

    <div className="sticky top-0 z-50">

      <Header />

    </div>

     <div className="h-[80vh]" style={{overflow:'hidden'}}>
            <LampDemo></LampDemo>
      </div>




      <div className="">
        <div className="pl-36 mt-10">

        <h1
        className="text-4xl font-bold bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(to right, #3b82f6 0px, #a855f7 100px, #ec4899 200px)",
        }}
      >
        ASL Translator
        </h1>


        </div>
        <div className="p-10 flex justify-center">

          <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
          transition={{ duration: 0.5, delay: 0 }}
          
          className="w-[80vw] grid grid-cols-5 rounded-xl bg-white p-5 pl-10" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>

            <div className="col-span-5 md:col-span-2 sm:col-span-5 text-white text-lg flex-col">
              <div className="mt-4">Developed a web tool to translate real time camera inputs of ASL hand signals to the corresponding English letter.</div>
              <div className="mb-4">
                Visit The Github!
              </div>
              
              <div>(Hackathon Project)</div>

            </div>

            <div className="col-span-5 md:col-span-3 sm:col-span-5 text-red-700 flex">


              <div className="bg-green-400 w-[500px] h-[300px]"></div>



            </div>


          </motion.div>

        </div>



      </div>
      
      <section id="travelassistant" style={{scrollMarginTop:'100px'}}>
      <div>


      <div className="pl-36 mt-10">

      <h1
      className="text-4xl font-bold bg-clip-text text-transparent"
      style={{
        backgroundImage: "linear-gradient(to right, #000000 0px, #525252 100px, #b6b6b6 200px)",
      }}
      >
      Travel Planning Assistant
     </h1>


      </div>

        <div className="p-10 flex justify-center">

          <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
          transition={{ duration: 0.5, delay: 0 }}>
            

            <div className="w-[80vw] grid grid-cols-5 rounded-xl bg-white p-5"  style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>

              <div className="col-span-5 md:col-span-3 sm:col-span-5 text-white flex justify-center"> <div className="bg-green-400 w-[500px] h-[300px]"></div></div>
              
              <div className="col-span-5 md:col-span-2 sm:col-span-5 text-white">

              <div className="mt-4">Developed a web tool to translate real time camera inputs of ASL hand signals to the corresponding English letter.</div>
              <div className="mb-4">
                Visit The Github!
              </div>
              
              <div>(Hackathon Project)</div>
              </div>
            </div>

          </motion.div>

        </div>



      </div>

      </section>

      <div>


      



      <section id="siesmicdetector" style={{scrollMarginTop:'100px'}}>
      <div className="pl-36 mt-10">
        <h1
        className="text-4xl font-bold bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(to right, #000000 0px, #525252 100px, #b6b6b6 200px)",
        }}
        >
        Seismic Detector
        </h1>
      </div>
      </section>

      <div className="p-10 flex justify-center">

        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
        transition={{ duration: 0.5, delay: 0 }}
        className="w-[80vw] grid grid-cols-5 rounded-xl bg-white p-5"  style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
        >
          <div className="col-span-5 md:col-span-2 sm:col-span-5 text-white"> <div className="mt-4">Developed a web tool to translate real time camera inputs of ASL hand signals to the corresponding English letter.</div>
            <div className="mb-4">
              Visit The Website for More Info!
            </div>
            
          <div>(Hackathon Project)</div></div>

        <div className="col-span-5 md:col-span-3 sm:col-span-5 text-white flex justify-center"><Image alt="Siesmic Group Photo" style={{width:'300px', border:'10px solid black'}} src={siemsic01}></Image></div>


        </motion.div>

      </div>



    </div>



      <div>


    <section id="rubicsolver">
      <div className="pl-36 mt-10">

      <h1
      className="text-4xl font-bold bg-clip-text text-transparent"
      style={{
        backgroundImage: "linear-gradient(to right, #000000 0px, #525252 100px, #b6b6b6 200px)",
      }}
      >
      Rubic Cubes Solver
      </h1>



      </div>

      <div className="p-10 flex justify-center">

        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
        transition={{ duration: 0.5, delay: 0 }}
        
        className="w-[80vw] grid grid-cols-5 rounded-xl bg-white p-5"  style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>

          <div className="col-span-5 md:col-span-3 sm:col-span-5"> 
            <div className="p-4" style={{}}>
                <iframe style={{position:'relative',left:'0px'}} width="400" height="255" src="https://www.youtube.com/embed/9DItpDXlWFA?si=cGKhmg9wRjLFhtvK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>

          <div className="col-span-5 md:col-span-2 sm:col-span-5 text-white">Hello this is a description</div>


        </motion.div>

      </div>

      </section>



    </div>
      
    </>

  );
};



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
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <DesktopComponent /> : <DesktopComponent />;
};

export default App;
