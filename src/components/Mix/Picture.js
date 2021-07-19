import React from 'react'
import { useDrag } from 'react-dnd'

const Picture = ({ id, url }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'image',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <img
      ref={drag}
      src={url}
      className='w-20 h-20 transition-all duration-75 ease-in-out'
      style={{ border: isDragging && '5px solid red' }}
    />
  )
}

export default Picture
