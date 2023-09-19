import React from 'react'
import TimerKit from './timer_kit'


export default function page() {
  return (
    <div>
      <div className='absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%]'>
        <TimerKit></TimerKit>
      </div>
    </div>
  )
}
