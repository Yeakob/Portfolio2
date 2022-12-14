import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs';

const Content5 = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center ml-7 ease-in-out duration-500'>
      <div className='w-full text-xl font-bold text-slate-300'>Self learning <span className='text-lime-500'>@My effort</span></div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2'>2018 - present</div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2 flex flex-row'> <span className='text-lime-500 mt-1 mr-2'><BsFillPlayFill /></span> Started learning web developement from my own effort and I thik freestyle learning is the best way to learn web developement </div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2 flex flex-row'><span className='text-lime-500 mt-1 mr-2'><BsFillPlayFill /></span>First started to learn HTML and CSS . though my interest in esthetic user interface creating and I am expert at css styling.</div>
      <div className='w-full text-sm font-semibold text-slate-400 py-2 flex flex-row'><span className='text-lime-500 mt-1 mr-2'><BsFillPlayFill /></span>I also started to learn Javascript and React Js .</div>
    </div>
  )
}

export default Content5