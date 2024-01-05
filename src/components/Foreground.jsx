import React, { useRef } from 'react'
import Card from './Card';

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: 'Lorem lund ipsum dolor sit amet consectetur adipisicing elit.',
      tag: {
        isClosed: false,
        tagDetails: 'Downlaod Now',
        tagColor: 'blue'
      },
      isSaved: false,
    },
    {
      desc: 'Lorem lund ipsum dolor sit amet consectetur adipisicing elit.',
      tag: {
        isClosed: false,
        tagDetails: 'Downlaod Now',
        tagColor: 'blue'
      },
      isSaved: false,
    },
    {
      desc: 'Lorem lund ipsum dolor sit amet consectetur adipisicing elit.',
      tag: {
        isClosed: false,
        tagDetails: 'Downlaod Now',
        tagColor: 'blue'
      },
      isSaved: false,
    },
    {
      desc: 'Lorem lund ipsum dolor sit amet consectetur adipisicing elit.',
      tag: {
        isClosed: false,
        tagDetails: 'Downlaod Now',
        tagColor: 'blue'
      },
      isSaved: false,
    }
  ]
  return (
    <div ref={ref} className="flex gap-4 flex-wrap absolute z-[10] p-8 top-0 left-0 h-screen w-full bg-transparent">
      {data.map((item, index) => (
        <Card refrence={ref} data={item} />
      ))}
    </div>
  )
}

export default Foreground