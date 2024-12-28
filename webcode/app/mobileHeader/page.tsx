'use client';
import Header from "../../components/myComponents/header"
import {motion} from "framer-motion"
import {useState} from "react"
import BackDrop from "../../components/myComponents/modal/backdrop"
import Modal from "../../components/myComponents/modal/modal"


const App = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const contents = {
    contentdiv:(<ul>
      <li style={{padding:"10px", backgroundColor:"red", width:"100%"}}>Header 01</li>
      <li style={{padding:"10px", backgroundColor:"blue", width:"100%"}}>Header 02</li>
      <li style={{padding:"10px", backgroundColor:"green", width:"100%"}}>Header 02</li>
      <li style={{padding:"10px", backgroundColor:"red", width:"100%"}}>Header 02</li>
  </ul>),
  randomdiv:
  (<div className="bg-blue-400 h-[100px]">Hello there</div>)

  }


  return (
    <div>
      <Header></Header>

      <motion.button
      whileHover={{scale:1.2}}
      whileTap={{scale:.9}}
      style={{width:'400px'}}
      className="save-button bg-blue-200 rounded-lg m-10"

      onClick={()=>(modalOpen?close():open())}
      >
        saveButton

      </motion.button>
      {modalOpen && <Modal modalOpen={modalOpen} contentdiv={contents.randomdiv} handleClose={close} text="hello"/>}

      <canvas id="canvas1" className="margclose01"></canvas>

      
    </div>
  )
}

export default App;

