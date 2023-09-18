import React from 'react'
import Timer from './timer'

export default function Navbar() {
  return (
    <div className='flex p-6'>
      <div className='flex-1 font-bold text-2xl text-neutral-700'>Focus Kit</div>
      <div>
        <Timer initTime={new Date().getTime()}></Timer>
      </div>
    </div>
  )
}
