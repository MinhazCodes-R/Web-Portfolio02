'use client';

import { useEffect, useState } from "react";
import Header from "@/components/myComponents/header";
import {motion} from "framer-motion";
import { LampDemo } from "../lampdisplay";

const MobileComponent = ({ projects }: { projects: any[] }) => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="h-[80vh]" style={{overflow:'hidden'}}>
        <LampDemo></LampDemo>
      </div>

      {projects.map((proj, idx) => (
        <section key={proj.id || idx} id={`proj-${idx}`} style={{scrollMarginTop:'100px'}}>
          <div>
            <div className="mt-10 w-[100vw]" style={{display:'flex', justifyContent:'center', textAlign:'center'}}>
              <h1 className="text-4xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: proj.gradient || "linear-gradient(to right, #000000 0px, #525252 100px, #b6b6b6 200px)" }}>
                {proj.title}
              </h1>
            </div>

            <div className="p-10 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0 }}>
                
                <div className="w-[80vw] grid grid-cols-5 rounded-xl bg-white p-5 text-black" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', overflow:'hidden'}}>
                  <div className="col-span-5 md:col-span-2 sm:col-span-5 text-black">
                    <div className="mt-4 whitespace-pre-wrap">{proj.description}</div>
                    {proj.linkUrl && (
                      <a href={proj.linkUrl} target="_blank" rel="noreferrer">
                        <div className="my-2 text-blue-500 font-semibold">{proj.linkText}</div>
                      </a>
                    )}
                    {proj.extraText && <div className="my-2 text-sm text-gray-600">{proj.extraText}</div>}
                  </div>
                  
                  <div className="col-span-5 md:col-span-3 sm:col-span-5 flex justify-center mt-4 md:mt-0 p-4"> 
                    {proj.mediaType === 'video' ? (
                      <iframe style={{width:'100%', height:'250px'}} src={proj.mediaUrl} allowFullScreen></iframe>
                    ) : (
                      <img src={proj.mediaUrl} alt={proj.title} style={{borderRadius:'10px', maxWidth:'100%', objectFit: 'contain'}} />
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

const DesktopComponent = ({ projects }: { projects: any[] }) => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div className="h-[80vh]" style={{overflow:'hidden'}}>
        <LampDemo></LampDemo>
      </div>

      {projects.map((proj, idx) => (
        <section key={proj.id || idx} id={`proj-${idx}`} style={{scrollMarginTop:'100px'}}>
          <div className="">
            <div className="pl-36 mt-10">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: proj.gradient || "linear-gradient(to right, #000000 0px, #525252 100px, #b6b6b6 200px)" }}>
                {proj.title}
              </h1>
            </div>
            <div className="p-10 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0 }}
                className="w-[80vw] grid grid-cols-5 rounded-xl bg-white p-5 pl-10 text-black" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
                
                {/* Alternate Layouts by reversing order based on idx parity so it looks dynamic */}
                {idx % 2 === 0 ? (
                  <>
                    <div className="col-span-5 md:col-span-2 text-black text-lg flex-col pr-5 relative z-10">
                      <div className="mt-4 whitespace-pre-wrap">{proj.description}</div>
                      {proj.linkUrl && (
                        <a href={proj.linkUrl} target="_blank" rel="noreferrer">
                          <div className="my-4 text-blue-500 font-semibold">{proj.linkText}</div>
                        </a>
                      )}
                      {proj.extraText && <div className="my-2 text-base text-gray-600">{proj.extraText}</div>}
                    </div>
                    <div className="col-span-5 md:col-span-3 flex justify-center items-center">
                      {proj.mediaType === 'video' ? (
                        <iframe style={{width:'500px', height:'280px', boxShadow: 'rgba(0, 0, 0, 0.35) -20px 5px 15px'}} src={proj.mediaUrl} allowFullScreen></iframe>
                      ) : (
                        <div className="w-[500px]" style={{boxShadow: 'rgba(0, 0, 0, 0.35) -20px 5px 15px'}}>
                          <img src={proj.mediaUrl} alt={proj.title} style={{width:'100%', height:'auto'}} />
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-5 md:col-span-3 flex justify-center items-center h-full order-2 md:order-1 relative z-10">
                      {proj.mediaType === 'video' ? (
                        <iframe style={{width:'500px', height:'280px', boxShadow: 'rgba(0, 0, 0, 0.35) 20px 5px 15px'}} src={proj.mediaUrl} allowFullScreen></iframe>
                      ) : (
                        <div className="w-[500px]" style={{boxShadow: 'rgba(0, 0, 0, 0.35) 20px 5px 15px'}}>
                          <img src={proj.mediaUrl} alt={proj.title} style={{width:'100%', height:'auto'}} />
                        </div>
                      )}
                    </div>
                    <div className="col-span-5 md:col-span-2 text-black text-lg flex-col pl-5 order-1 md:order-2">
                      <div className="mt-4 whitespace-pre-wrap">{proj.description}</div>
                      {proj.linkUrl && (
                        <a href={proj.linkUrl} target="_blank" rel="noreferrer">
                          <div className="my-4 text-blue-500 font-semibold">{proj.linkText}</div>
                        </a>
                      )}
                      {proj.extraText && <div className="my-2 text-base text-gray-600">{proj.extraText}</div>}
                    </div>
                  </>
                )}

              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/portfolio')
      .then(res => res.json())
      .then(data => {
        setProjects(data.projects || []);
      })
      .catch(console.error);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileComponent projects={projects} /> : <DesktopComponent projects={projects} />;
}
