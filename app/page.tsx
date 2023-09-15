'use client'
import { motion } from "framer-motion"
import { useRef, useState } from "react";
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {
  const [values, setValues] = useState({
    stay_focus: 25,
    short_break: 5,
    long_break: 15,
    session_rounds: 1
  })
  const stayFocus = [25,40,60]
  const shortBreak = [0,5,10]
  const longBreak = [5,15,30]
  
  return (
    <div className="">
      <div className="max-w-2xl mx-auto p-4">
        <div className={`backdrop-blur-xl p-4 z-50 space-y-8 ${rubik.className}`}>
          <div>
            <div className="text-lg text-neutral-300 mb-2">{'Stay Focus (Min)'}</div>
            <div className="grid grid-cols-4 text-center font-bold text-2xl lg:text-3xl rounded-lg border-2 border-neutral-800">
              {stayFocus.map((item,key)=>(
                <button key={key} className="h-[60px] flex items-center justify-center relative" onClick={()=>{setValues(v=>({...v, stay_focus: item}))}}>
                  {values.stay_focus === item &&
                    <motion.div layoutId="actice-bg-1" className="absolute inset-0 bg-neutral-700 -z-10 rounded-md" />
                  }
                  <span className="relative">{item}</span>
                </button>
              ))}
                <button className="h-[60px] flex items-center justify-center relative">
                  {stayFocus.indexOf(values.stay_focus) < 0 &&
                    <motion.div layoutId="actice-bg-1" className="absolute inset-0 bg-neutral-700 -z-10 rounded-md" />
                  }
                  <input className="rounded-xl h-[60px] w-full flex items-center justify-center bg-transparent text-center placeholder-neutral-600 outline-none" placeholder="Edit" type="number" onChange={(e)=>setValues(v=>({...v,stay_focus: parseInt(e.target.value)}))} />
                </button>
            </div>
          </div>

          <div>
            <div className="text-lg text-neutral-300 mb-2">{'Short Break (Min)'}</div>
            <div className="grid grid-cols-4 text-center font-bold text-2xl lg:text-3xl rounded-lg border-2 border-neutral-800">
              {shortBreak.map((item,key)=>(
                <button key={key} className="h-[60px] flex items-center justify-center relative" onClick={()=>{setValues(v=>({...v, short_break: item}))}}>
                  {values.short_break === item &&
                    <motion.div layoutId="actice-bg-2" className="absolute inset-0 bg-neutral-700 -z-10 rounded-md" />
                  }
                  <span className="relative">{item}</span>
                </button>
              ))}
                <button className="h-[60px] flex items-center justify-center relative">
                  {shortBreak.indexOf(values.short_break) < 0  &&
                    <motion.div layoutId="actice-bg-2" className="absolute inset-0 bg-neutral-700 -z-10 rounded-md" />
                  }
                  <input className="rounded-xl h-[60px] w-full flex items-center justify-center bg-transparent text-center placeholder-neutral-600 outline-none" placeholder="Edit"  type="number" onChange={(e)=>setValues(v=>({...v,short_break: parseInt(e.target.value)}))} />
                </button>
            </div>
          </div>

          <div>
            <div className="text-lg text-neutral-300 mb-2">{'Long Break (Min)'}</div>
            <div className="grid grid-cols-4 text-center font-bold text-2xl lg:text-3xl rounded-lg border-2 border-neutral-800">
              {longBreak.map((item,key)=>(
                <button key={key} className="h-[60px] flex items-center justify-center relative" onClick={()=>{setValues(v=>({...v, long_break: item}))}}>
                  {values.long_break === item &&
                    <motion.div layoutId="actice-bg-3" className="absolute inset-0 bg-neutral-700 -z-10 rounded-md" />
                  }
                  <span className="relative">{item}</span>
                </button>
              ))}
                <button className="h-[60px] flex items-center justify-center relative">
                  {longBreak.indexOf(values.long_break) < 0  &&
                    <motion.div layoutId="actice-bg-3" className="absolute inset-0 bg-neutral-700 -z-10 rounded-md" />
                  }
                  <input className="rounded-xl h-[60px] w-full flex items-center justify-center bg-transparent text-center placeholder-neutral-600 outline-none" placeholder="Edit"  type="number" onChange={(e)=>setValues(v=>({...v,long_break: parseInt(e.target.value)}))} />
                </button>
            </div>
          </div>

          <div>
            <div className="text-lg text-neutral-300 mb-2">{'Session Rounds'}</div>
            <div className="grid grid-cols-3 items-center text-center font-bold text-2xl lg:text-3xl rounded-lg border-2 border-neutral-800 h-[60px]">
              <button className="flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-neutral-300 rounded-l-md h-full disabled:hover:bg-transparent disabled:hover:text-neutral-700 disabled:text-neutral-700"  onClick={()=>{setValues(v=>({...v, session_rounds: v.session_rounds - 1}))}} disabled={values.session_rounds <= 1}>
                <div className="icon-[ri--subtract-line]" />
              </button>
              <div>{values.session_rounds}</div>
              <button className="flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-neutral-300 rounded-r-md h-full"  onClick={()=>{setValues(v=>({...v, session_rounds: v.session_rounds + 1}))}}>
                <div className="icon-[ri--add-line]" />
              </button>
            </div>
          </div>

          <div>
            <div className="text-lg text-neutral-300 mb-2">{'Preview'}</div>
            <div className="bg-neutral-800/50 backdrop-blur w-full h-[60px] relative rounded-lg overflow-hidden flex">
              <div className="flex flex-1">
                {
                  new Array(3).fill(null).map((item,key)=>(
                    <div key={key} className="flex flex-1 h-full">
                      <div className=" h-full bg-gradient-to-r from-blue-500/10 to-blue-500/50 border-r-2 border-blue-500" style={{width: (values.stay_focus/(values.short_break+values.stay_focus)*100)+'%'}}></div>
                      <div className=" h-full bg-gradient-to-r from-green-500/10 to-green-500/50 border-r-2 border-green-500" style={{width: (values.short_break/(values.short_break+values.stay_focus)*100)+'%'}}></div>
                    </div>
                  ))
                }
              </div>
              {/* Long */}
              <div className=" h-full bg-gradient-to-r from-orange-500/10 to-orange-500/50 border-r-2 border-orange-500" style={{width: values.long_break/((values.short_break+values.stay_focus)*3)*100+'%'}}></div>
              {/* <div className="flex-1 h-full bg-gradient-to-r from-orange-500/10 to-orange-500/50 border-r-2 border-orange-500" style={{width: (values.long_break/(values.long_break+values.short_break+values.stay_focus)*100*3)+'%'}}></div> */}
              {/* <div className=" h-full bg-gradient-to-r from-blue-500/10 to-blue-500/50 border-r-2 border-blue-500" style={{width: (values.stay_focus/(values.long_break+values.short_break+values.stay_focus)*100)+'%'}}></div>
              <div className=" h-full bg-gradient-to-r from-green-500/10 to-green-500/50 border-r-2 border-green-500" style={{width: (values.short_break/(values.long_break+values.short_break+values.stay_focus)*100)+'%'}}></div>
              <div className=" h-full bg-gradient-to-r from-orange-500/10 to-orange-500/50 border-r-2 border-orange-500" style={{width: (values.long_break/(values.long_break+values.short_break+values.stay_focus)*100)+'%'}}></div> */}

            </div>
          </div>
          <pre>
            {JSON.stringify(values, null, '  ')}
          </pre>
        </div>
      </div>
    </div>
  )
}
