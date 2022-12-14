import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';

const Content4 = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center ml-7 ease-in-out duration-500'>
      <div className='w-full text-xl font-bold text-slate-300'>Full stack Developer <span className='text-lime-500'>@Internship</span></div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2'>March 2019 - december 2019</div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2 flex flex-row'> <span className='text-lime-500 mt-1 mr-2'><BsFillPlayFill /></span> Write modern, performant, maintainable code for a diverse array of client and internal projects</div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2 flex flex-row'><span className='text-lime-500 mt-1 mr-2'><BsFillPlayFill /></span>Learned web development lifecycle and overall web stack . Company based workflow and web development</div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2 flex flex-row'><span className='text-lime-500 mt-1 mr-2'><BsFillPlayFill /></span>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</div>
    </div>
  )
}

export default Content4