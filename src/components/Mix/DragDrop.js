import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useDrop } from 'react-dnd'

import Picture from './Picture'

const PictureList = [
  {
    id: 1,
    url: 'https://yt3.ggpht.com/ytc/AAUvwnjOQiXUsXYMs8lwrd4litEEqXry1-atqJavJJ09=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 2,
    url: 'https://media-exp1.licdn.com/dms/image/C4D03AQExheo0sff_yQ/profile-displayphoto-shrink_200_200/0/1590072898568?e=1630540800&v=beta&t=_W-gWZewSBYQ-UAjpGvR8h_8Vvo202IHQQissbK2aKc',
  },
  {
    id: 3,
    url: 'https://yt3.ggpht.com/pe57RF1GZibOWeZ9GwRWbjnLDCK2EEAeQ3u4iMAFNeaz-PN9uSsg1p2p32TZUedNnrUhKfoOuMM=s900-c-k-c0x00ffffff-no-rj',
  },
]

const DragDrop = () => {
  const [board, setBoard] = useState([])
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'image',
    drop: (item) => addImgToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const addImgToBoard = (id) => {
    const pictureList = PictureList.filter((pic) => id === pic.id)

    setBoard((board) => [...board, pictureList[0]])
  }

  return (
    <div className='flex flex-col  items-center'>
      <div className='flex justify-center'>
        {PictureList.map((pic) => {
          return <Picture url={pic.url} id={pic.id} key={pic.id} />
        })}
      </div>
      <div
        ref={drop}
        className='flex flex-wrap mt-10 w-full min-h-[10rem] md:max-w-5xl border-2 border-gray-400'
      >
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} key={picture.id} />
        })}
      </div>
    </div>
  )
}

export default DragDrop
