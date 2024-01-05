import React from 'react'

function Background() {
  return (
      <div className='absolute h-screen w-full bg-transparent z-[2]'>
          <div className='flex justify-center py-10 absolute top-5 w-screen text-zinc-600 font-semibold text-lg '><h1>Documents.</h1></div>
          <h1 className=' text-[10vw] leading-none  text-zinc-950 absolute font-semibold top-[47%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>Docs.</h1>
    </div>
  )
}

export default Background