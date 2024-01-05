import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='h-screen overflow-hidden w-full relative bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
  )
}

export default App