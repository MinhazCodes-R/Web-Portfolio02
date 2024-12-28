'use client'
import {motion} from "framer-motion";
import styles from "./backdrop.module.css";

const BackDrop = ({children,onClick})=>{
    return (
        <motion.div
        className={styles.backdrop}
        onClick={onClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        style={{position:'fixed',top:'0px',width:'100vw',height:'100vh', zIndex:'100'}}
        >
            {children}
        </motion.div>
    )

}


export default BackDrop;