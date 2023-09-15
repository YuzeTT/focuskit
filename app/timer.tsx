'use client'
import { Rubik } from 'next/font/google'
const rubik = Rubik({ subsets: ['latin'] })
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { motion } from 'framer-motion'

export default function Timer({
  initTime
}: {
  initTime: number
}) {
  const [nowTime, setNowTime] = useState(new Date(initTime))
  useEffect(() => {
    const timer = setInterval(() => {
      setNowTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={`${rubik.className} text-center border-2 border-neutral-800 rounded-md flex`}>
      <motion.div initial={{
          width: 0,
          opacity: 0,
        }}
        animate={{
          width: "auto",
          opacity: 1,
        }}
        className='flex items-center justify-center text-sm bg-neutral-800/50'
      >
        <div className='px-3'>Ready</div>
      </motion.div>
      <div className='text-xl px-2 py-1 text-neutral-400'>{dayjs(nowTime).format('HH:mm')}</div>
    </div>
    // <div className={`${rubik.className} text-right`}>
    //   <div>{dayjs(nowTime).format('HH:mm')}</div>
    // </div>
  )
}