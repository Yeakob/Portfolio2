import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';

const Content2 = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center ml-7 ease-in-out duration-500'>
      <div className='w-full text-xl font-bold text-slate-300'>Front end Developer <span className='text-lime-500'>@Welldev</span></div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2'>January 2021 - December 2021</div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2 flex flex-row'> <span className='text-lime-500 mt-1 mr-2'><BsFillPlayFill /></span> Interfaced with clients on a weekly basis, providing technological expertise</div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2 flex flex-row'><span className='text-lime-500 mt-1 mr-2'><BsFillPlayFill /></span>Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern</div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2 flex flex-row'><span className='text-lime-500 mt-1 mr-2'><BsFillPlayFill /></span>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</div>
    </div>
  )
}

export default Content2