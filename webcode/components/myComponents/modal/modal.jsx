import {motion} from "framer-motion";
import BackDrop from "./backdrop";
import styles from "./backdrop.module.css";

const dropin = {
    hidden:{
        x:"-100vh",
        opacity: 0,

    },
    visable:{
        x: "0",
        opacity:1,
        transition:{
            duration:0.1,
            type:"spring",
            damping:25,
            stiffness:500,

        }
    },
    exit:{
        x:"100vh",
        opacity: 0,
    }
}

const Modal = ({handleClose,modalOpen, contentdiv}) =>{

    return (
        <BackDrop onClick={handleClose}>
            <motion.div 
                onClick={(e)=>e.stopPropagation()}
                className={styles.modal}
                variants={dropin}
                initial="hidden"
                animate="visable"
                exit="exit"
                style={{}}
                >
                   <div className="" style={{width:"100%"}}>
                   {contentdiv}
                   </div>
            </motion.div>
        </BackDrop>
    )

}

export default Modal;