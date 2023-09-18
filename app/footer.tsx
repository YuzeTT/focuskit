import React from 'react'

export default function Footer() {
  return (
    <div className='flex items-center justify-center space-x-3'>
      <a href='https://hsott.cn' target='_blank' className='text-neutral-500 hover:text-neutral-300 transition flex items-center'>
        {/* <div className="icon-[ri--copyright-line] mr-1" /> */}
        <span>© 2023 YuzeTT</span>
      </a>
      <a href='https://github.com/YuzeTT/focuskit' target='_blank' className='text-neutral-500 hover:text-neutral-300 transition flex items-center'>
        <div className="icon-[ri--github-fill] mr-1" />
        <span>Source Code</span>
      </a>
    </div>
  )
}
