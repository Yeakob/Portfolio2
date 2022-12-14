import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';

const Content1 = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center ml-7 ease-in-out duration-500'>
      <div className='w-full text-xl font-bold text-slate-300'>Full stack Developer <span className='text-lime-500'>@MXY Studio</span></div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2'>January 2022 - present</div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2 flex flex-row'> <span className='text-lime-500 mt-1 mr-2'><BsFillPlayFill /></span> Write modern, performant, maintainable code for a diverse array of client and internal projects</div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2 flex flex-row'><span className='text-lime-500 mt-1 mr-2'><BsFillPlayFill /></span>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Node js, React, Craft, WordPress, Mongodb, and Netlify</div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2 flex flex-row'><span className='text-lime-500 mt-1 mr-2'><BsFillPlayFill /></span>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</div>
    </div>
  )
}

export default Content1