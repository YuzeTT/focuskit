'use client'
import React, { useEffect, useState } from 'react'
import { JetBrains_Mono } from 'next/font/google'
import dayjs from 'dayjs'

const jetBrains_mono = JetBrains_Mono({ subsets: ['latin'] })

export default function TimerKit() {
  Notification.requestPermission()
  const [countdown, setCountdown] = useState(10000)
  // const [isDone, setIsDone] = useState(false)
  useEffect(()=>{
    const timer = setInterval(() => {
      if(countdown < 1000){
        // setIsDone(true)
        if(countdown == 0){
          console.log('提醒');
          new Notification('Focus end~', {body: 'Now, Take a break!'});
          // setIsDone(false)
          
          setCountdown((v)=>v + 1);
        }
        return
      }
      setCountdown((v)=>v - 1000);
      console.log(countdown);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [countdown])

  return (
    <div className={`${jetBrains_mono.className} flex justify-center my-4`}>
      <div>
        <div className='flex items-center justify-between mb-2'>
          <div className='text-neutral-500'>Now: Focus</div>
          <div className='flex-1 border-t border-dashed mx-2 border-neutral-700'></div>
          <div className='text-neutral-700'>Next: Break</div>
        </div>
        <div className='font-bold text-8xl '>
          {dayjs(countdown).format('mm:ss')}
        </div>
        <div className='flex justify-center pt-8'>
          <button className='w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center'>
            <div className="icon-[ri--play-fill] text-xl" />
          </button>
        </div>
      </div>
    </div>
  )
}
