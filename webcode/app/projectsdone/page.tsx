'use client';

import { useEffect, useState } from "react";
import Header from "@/components/myComponents/header";
import {motion} from "framer-motion";
import { LampDemo } from "../lampdisplay";
import Image from "next/image";

import siemsic01 from "@/images/SeismicImage01.jpeg";
import aslimage from "@/images/asl-translator-image.png";
import travelagent from "@/images/travel-agent.png"

const MobileComponent = () => {
  return (
    <>

    <div className="sticky top-0 z-50">

      <Header />

    </div>

     <div className="h-[80vh]" style={{overflow:'hidden'}}>
            <LampDemo></LampDemo>
      </div>


      <section id="asltranslator" style={{scrollMarginTop:'100px'}}>
      <div className="">
        <div className="mt-10" style={{display:'flex', alignItems:"center", justifyContent:'center'}}>

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
          transition={{ duration: 0.5, delay: 0 }}>
            

            <div className="w-[80vw] grid grid-cols-5 rounded-xl bg-white p-5"  style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', overflow:'hidden'}}>

              
              <div className="col-span-5 md:col-span-2 sm:col-span-5 text-black">

              <div className="mt-4">Developed a web tool to translate real time camera inputs of ASL hand signals to the corresponding English letter.</div>
              <a href="https://github.com/MinhazCodes-R/SignDetector"><div className="my-2 text-blue-400">
                Visit The Github!
              </div></a>
              
              <div style={{paddingBottom:'15px'}} className="my-2 text-blue-600">Take a look at the video demonstration on my Linkedin Post (click here)</div>
              
              </div>
              
              
              <div className="col-span-5 md:col-span-3 sm:col-span-5 text-white flex justify-center"> <div className=" w-[100%]"><Image style={{borderRadius:'10px'}} alt="asl translator image" src={aslimage}></Image></div></div>
            </div>

          </motion.div>

        </div>



      </div>
      </section>
      
      <section id="travelassistant" style={{scrollMarginTop:'100px'}}>
      <div>


      <div className="mt-10 w-[100vw]" style={{display:'flex', justifyContent:'center', textAlign:'center'}}>
     

        <h1 className="text-4xl font-bold bg-clip-text text-transparent" style={{
        backgroundImage: "linear-gradient(to right, #000000 0px, #525252 100px, #b6b6b6 200px)",
      }}
      
      >Travel Planning Assistant</h1>

      </div>

        <div className="p-10 flex justify-center">

          <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
          transition={{ duration: 0.5, delay: 0 }}>
            

            <div className="w-[80vw] grid grid-cols-5 rounded-xl bg-white p-5"  style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', overflow:'hidden'}}>

              
              <div className="col-span-5 md:col-span-2 sm:col-span-5 text-black">

              <div className="mt-4">Constructed a AI assistant that helps users plan out their next vacation. Takes custom messages, prices, and locations to suggest the perfect tourist attractions.</div>
              <div className="mb-4">
                Visit The Github!
              </div>
              
              <div className="my-2">(Hackathon Project)</div>
              </div>
              
              
              <div className="col-span-5 md:col-span-3 sm:col-span-5 text-white flex justify-center"> <div className=" w-[100%]"> <Image src={travelagent} alt="travel agent image"></Image></div></div>
            </div>

          </motion.div>

        </div>



      </div>

      </section>

      <section id="siesmicdetector" style={{scrollMarginTop:'100px', display:'flex', justifyContent:'center'}}>
      <div>
      <div className="mt-10 w-[100vw]" style={{display:'flex', justifyContent:'center', textAlign:'center'}}>
        <h1
        className="text-4xl font-bold bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(to right, #000000 0px, #525252 100px, #b6b6b6 200px)",
        }}
        >
        Seismic Detector
        </h1>
      </div>

      <div className="p-10 flex justify-center">

        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
        transition={{ duration: 0.5, delay: 0 }}
        className="w-[80vw] grid grid-cols-5 rounded-xl bg-white p-5 text-lg"  style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', overflow:'hidden'}}
        >
          <div className="col-span-5 md:col-span-2 sm:col-span-5 text-neutral-700"> <div className="mt-4">Using large data analysis techniques contructed an algorithim to accurately detect seismic activity from more than 100gb of lunar data. </div>
            <div className="mb-4">
              Visit the website to read more about the tools me and Bacem used!
            </div>
            
          <div className="my-2">bitsnotbytesnasa2024.netlify.app/</div>
          
          </div>

        <div className="col-span-5 md:col-span-3 sm:col-span-5 text-white flex justify-center m-5"><Image alt="Siesmic Group Photo" style={{width:'300px',boxShadow: 'rgba(0, 0, 0, 0.75) 0px 5px 15px'}} src={siemsic01}></Image></div>


        </motion.div>

      </div>



    </div>
    </section>



    <section id="rubiksolver">
    <div>


      <div className="mt-10">

      <h1
      className="text-4xl font-bold bg-clip-text text-transparent"
      style={{
        backgroundImage: "linear-gradient(to right, #000000 0px, #525252 100px, #b6b6b6 200px)",
        overflow:'hidden',
        textAlign:'center',
        display:'flex',
        justifyContent:'center'
      }}
      >
      Rubik's Cube Solver
      </h1>



      </div>

      <div className="p-10 flex justify-center">

        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
        transition={{ duration: 0.5, delay: 0 }}
        
        className="w-[80vw] grid grid-cols-5 rounded-xl bg-white p-5"  style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', overflow:'hidden'}}>
          <div className="col-span-5 md:col-span-2 sm:col-span-5 text-black text-lg"> <div className="mt-4">
            Created a Rubik's cube solver. This project had a python based graphics user interface (GUI) created using python's Tkinter library.
            After the user enters the cube colors into the GUI and presses the start button, the combination of motors goees ahead and solves the cube!

          </div>
          <div className="my-5">Check out the video!</div>
          
          </div>

          <div className="col-span-5 md:col-span-3 sm:col-span-5"> 

                <iframe style={{position:'relative', width:'100%'}}src="https://www.youtube.com/embed/9DItpDXlWFA?si=cGKhmg9wRjLFhtvK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          </div>



        </motion.div>

      </div>




    </div>
    </section>
      
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



      <section id="asltranslator" style={{scrollMarginTop:'100px'}}>
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

            <div className="col-span-5 md:col-span-2 sm:col-span-5 text-black text-lg flex-col">
              <div className="mt-4">Developed a web tool to translate real time camera inputs of ASL hand signals to the corresponding English letter.</div>
              <a href="https://github.com/MinhazCodes-R/SignDetector"><div className="my-2 text-blue-400">
                Visit The Github!
              </div></a>
              
              <div className="my-2 text-blue-600">Take a look at the video demonstration on my Linkedin Post (click here)</div>
              

            </div>

            <div className="col-span-5 md:col-span-3 sm:col-span-5 text-red-700 flex">


              <div className="ml-36 w-[500px]" style={{boxShadow: 'rgba(0, 0, 0, 0.35) -20px 5px 15px'}} ><Image src={aslimage}  alt="ASL translator"></Image></div>



            </div>


          </motion.div>

        </div>



      </div>
      </section>
      
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

              <div className="col-span-5 md:col-span-3  text-white flex justify-center"> <div className="w-[500px]"><Image style={{}} src={travelagent} alt="travel agent"></Image></div></div>
              
              <div className="col-span-5 md:col-span-2  text-black">

              <div className="mt-4">Constructed a AI assistant that helps users plan out their next vacation. Takes custom messages, prices, and locations to suggest the perfect tourist attractions.</div>
              <div className="mb-4">
                Visit The Github!
              </div>
              
              <div className="my-2">(Hackathon Project)</div>
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
          <div className="col-span-5 md:col-span-2 sm:col-span-5 text-white text-lg">

          <div className="col-span-5 md:col-span-2 sm:col-span-5 text-neutral-700 p-5"> <div className="mt-4">Using large data analysis techniques contructed an algorithim to accurately detect seismic activity from more than 100gb of lunar data. </div>
            <div className="mb-4">
              Visit the website to read more about the tools me and Bacem used!
            </div>
            
          <div className="my-2">bitsnotbytesnasa2024.netlify.app/</div>
          </div></div>

        <div className="col-span-5 md:col-span-3 sm:col-span-5 text-white flex justify-center"><Image alt="Siesmic Group Photo" style={{width:'300px', boxShadow: 'rgba(0, 0, 0, 0.35) -20px 5px 15px'}} src={siemsic01}></Image></div>

        </motion.div>

      </div>



    </div>



      <div>


    <section id="rubiksolver">
      <div className="pl-36 mt-10">

      <h1
      className="text-4xl font-bold bg-clip-text text-transparent"
      style={{
        backgroundImage: "linear-gradient(to right, #000000 0px, #525252 100px, #b6b6b6 200px)",
      }}
      >
      Rubik's Cubes Solver
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
                <iframe style={{position:'relative',left:'0px',boxShadow: 'rgba(0, 0, 0, 0.35) 20px 5px 15px'}} width="400" height="255" src="https://www.youtube.com/embed/9DItpDXlWFA?si=cGKhmg9wRjLFhtvK" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
            <div className="col-span-5 md:col-span-2 sm:col-span-5 text-black text-lg"> <div className="mt-4">
            Created a Rubik's cube solver. This project had a python based graphics user interface (GUI) created using python's Tkinter library.
            After the user enters the cube colors into the GUI and presses the start button, the combination of motors goees ahead and solves the cube!

          </div>
          <div className="my-5">Check out the video!</div>
          
          </div>


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

  return isMobile ? <MobileComponent /> : <DesktopComponent />;
};

export default App;
