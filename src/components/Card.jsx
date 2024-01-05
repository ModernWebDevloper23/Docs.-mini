import React from 'react';
import { motion } from "framer-motion"
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function Card({refrence, data}) {
  return (
    <motion.div dragConstraints={refrence} drag className="relative h-72 rounded-[3vw] w-56 bg-zinc-900 overflow-hidden text-zinc-300 flex flex-col p-8 gap-7">
      <FaRegFileAlt />
      <p className='leading-[1.3] tracking-tight text-md'>{data.desc }</p>
      <div className="footer flex items-center   p-8 left-0  w-full  absolute flex-col bottom-0">
        <div className=' justify-between flex h-14 w-full'>
          <h5 className=''>0.6mb</h5>
          <div className='rounded-full h-7 w-7 bg-zinc-700 flex items-center justify-center'><FiDownload /></div>
        </div>
        <div className='h-11  w-full bg-blue-900 absolute bottom-0 flex items-center justify-center'><h4>Download Now</h4></div>
      </div>
    </motion.div>
  )
}

export default Card