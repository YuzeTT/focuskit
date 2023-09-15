import React from 'react'
import Timer from './timer'

export default function Navbar() {
  return (
    <div className='flex p-3'>
      <div className='flex-1 font-bold text-2xl text-neutral-700'>Next Tomato</div>
      <div>
        <Timer initTime={new Date().getTime()}></Timer>
      </div>
    </div>
  )
}
