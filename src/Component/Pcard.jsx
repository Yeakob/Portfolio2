import React from 'react'
import { FiGithub ,FiExternalLink, FiFolder} from 'react-icons/fi';

const Pcard = ({title,text,tag}) => {
  return (
    <div className='m-2 lg:w-[20rem] h-[20rem] md:w-[25rem] hover:-translate-y-3 duration-300 ease-in-out sm:w-full bg-[#273245] flex flex-col cursor-pointer justify-center items-center rounded-md py-5 px-5 shadow-lg'>
      <div className='w-full flex justify-between flex-row py-3 '>
        <div className='hover:text-lime-500 duration-300 text-slate-300 text-3xl font-thin'><FiFolder /></div>  
        <div className=' text-slate-300 flex flex-row text-xl pt-3'><FiGithub className='mx-2 hover:text-lime-500 duration-300'/> <FiExternalLink className='hover:text-lime-500 duration-300' /></div>
      </div>
      <div className='w-full text-xl text-slate-300 hover:text-lime-500 duration-300  font-bold font-mono'>{title}</div>
      <div className='w-full text-sm text-slate-400 font-semibold font-mono py-5'>{text}</div>
      <div className='w-full text-sm text-slate-400 font-semibold font-mono py-5'>{tag} </div>
    </div>
  )
}

export default Pcard