import React from "react";
import "./style.scss";
import { IoIosSend } from "react-icons/io";
const AnimatedButton = ({type,className,isLoading})=>{
   

    return (
     <button type className={`selectnone v_animated_btn ${className}  ${isLoading &&  "loadingState"}  `} >
      <span className="mt-[2px]">Send</span>
      <IoIosSend  size={24} className="svgone"/>
      <IoIosSend  size={24} className="svgtwo"/>
     
    </button>
    )
}

export default AnimatedButton