import React from 'react'
import Img from './553111871_1333700524790388_1763152271188372859_n.jpg'
import { FiGithub ,FiExternalLink, FiInstagram ,FiTwitter , FiLinkedin , FiCodepen } from 'react-icons/fi';
import { useState } from 'react';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';
import Content6 from './Content6';
import './style.css'
import Fourier from './Fourier.png'
import Hospital from './Hospital.png'
import weatherapp from './weatherapp.png'
import Pcard from './Pcard';
import Data from './Data.json'
import Resume from './Resume.pdf'
import { Sling as Hamburger } from 'hamburger-react'
import { BsFillPlayFill } from 'react-icons/bs';

const Container = () => {

  const [active , setactive] = useState("mxy");
  const [click,setclick] = useState(false);
  return (
    <div className='w-full h-auto bg-[#1D2F4F]'>
      {/*nav section */}


      <div className='w-full bg-[#1D2F4F] h-auto nv py-5 flex flex-row justify-between'>
        <div className='w-1/6 left-0 flex justify-center border-lime-500 items-center text-2xl font-mono font-bold text-lime-500'>
          <div className=' box flex justify-center items-center'>
            <div className='logo shadow-lg'>
              <a href="#home">YA</a>
            </div>
          </div>
        </div>
        <div className='lg:w-2/4 med cursor-pointer md:w-3/5 font-mono font-semibold text-sm text-white bg-transparent flex flex-row justify-around items-center'>
          <div className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-lime-500 duration-200'> <a href="#about"><span className=' text-lime-500'>01.</span>About</a></div>
          <div className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-lime-500 duration-200'> <a href="#experience"><span className=' text-lime-500'>02.</span>Experience</a></div>
          <div className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-lime-500 duration-200'> <a href="#work"><span className=' text-lime-500'>03.</span>Work</a></div>
          <div className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-lime-500 duration-200'> <a href="#contact"><span className=' text-lime-500'>04.</span>Contact</a></div>
          <div className='border-2 px-4 border-lime-500 text-lime-500 py-2'> <a href={Resume} download>Resume </a></div>
        </div>
        <div className='med2 text-lime-500 mr-8' onClick={()=>{setclick(!click)}}><Hamburger /></div>
      </div>



      <div className='w-full flex h-auto flex-row justify-center items-center'>


        {/* left nav section */}
        <div className='w-1/6 flex flex-col justify-end items-center h-[41.5rem] top-[5rem] bg-transparent fixed left-0'>
          <div className='cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white hover:text-lime-500 duration-300 my-3 text-xl'><a href="https://github.com/Yeakob"><FiGithub /></a></div>
          <div className='cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white hover:text-lime-500 duration-300 my-3 text-xl'><a href="https://www.instagram.com"><FiInstagram /></a></div>
          <div className='cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white hover:text-lime-500 duration-300 my-3 text-xl'><a href="https://twitter.com/AliYeakob"><FiTwitter /></a></div>
          <div className='cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white hover:text-lime-500 duration-300 my-3 text-xl'><a href="https://www.linkedin.com/in/yeakob-ali-489290206/"><FiLinkedin /></a></div>
          <div className='cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white hover:text-lime-500 duration-300 my-3 text-xl mb-3'><a href="/"><FiCodepen /></a></div>
          <div className='w-full flex justify-center items-center'><div className='h-[7rem] rounded-xl w-[.2rem] mt-5 bg-white'></div></div>
        </div>



        <div className='w-4/6 flex flex-col justify-center items-center h-auto bg-transparent'>

          {/* container 1 homepage  */}
          <div className='w-full h-auto py-[10rem] mt-[5rem]' id='home'>
            <div className='font-mono text-lg font-semibold text-lime-500'>Hi, my name is </div>
            <div className='my-3 font-mono text-5xl font-semibold tracking-wider text-slate-300'>Yeakob Ali Emon</div>
            <div className='my-3 font-mono text-4xl font-semibold tracking-wider text-slate-400'>Full Stack Web Developer (MERN) </div>
            <div className='font-mono font-semibold text-slate-400 lg:w-1/2 w-full sm:w-full'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, User comfortable modern website at <span className='text-lime-500'>MXY Studio</span>. </div>
            <div className='my-8 border-2 py-3 w-[15rem] hover:bg-slate-700 duration-500 cursor-pointer flex justify-center items-center text-lime-500 font-mono text-lg border-lime-500 rounded-sm'><a href="mailto:yeakob677@gmail.com">Get in touch </a></div>

          </div>



          {/* Container 2 about me */}

          <div className='w-full h-auto flex flex-row flex-wrap justify-center items-center py-[7rem]' id='about'>
            <div className='lg:w-3/5 sm:w-full flex justify-center items-center flex-col'>
              <div className=' py-10 w-full flex flex-row font-mono lg:text-4xl md:text-3xl justify-center items-end text-white font-semibold text-2xl'><span className='px-1 text-lg text-lime-400 '>01.</span><h1>About me</h1><div className='px-1 mb-2 ml-2 w-1/2 h-[.1rem] bg-lime-700'></div></div>
              <div className='w-full h-auto flex flex-col font-mono font-semibold px-5 text-slate-400 '>
                <div className='py-3'>
                  Hello! My name is <span className='text-lime-500'>Yeakob Ali</span> and I enjoy creating things that live on the internet.
                  My interest in web development started back in 2018 when I decided to try creating my own website
                  — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </div>
                <div className='py-3'>
                  Fast-forward to today, and I’ve had the privilege of working at an <span className='text-lime-500'> a start-up, a huge corporation, and a student-led design studio</span>.My main focus these days is building accessible, inclusive products and digital experiences at <span className='text-lime-500'>MXY Studio</span> for a variety of clients.
                </div>
                <div className='py-3'>
                  I also recently work at MXY Studio as a <span className='text-lime-500'>full stack developer  </span> .I have an excelent hand on experience at Node & React.
                </div>
                <div>Here are a few technologies I’ve been working with recently:</div>
                <div className='w-full h-auto flex flex-row flex-wrap justify-start items-center pt-5'>
                   <div className='lg:w-1/2 w-full flex flex-col flex-wrap justify-start items-center'>
                       <div className='flex flex-row justify-start items-center flex-wrap w-full text-sm font-semibold py-1'><span className='text-lime-500 mr-2'><BsFillPlayFill /></span>Javascript (ES6+)</div>
                       <div className='flex flex-row justify-start items-center flex-wrap w-full text-sm font-semibold py-1'><span className='text-lime-500 mr-2'><BsFillPlayFill /></span>React</div>
                       <div className='flex flex-row justify-start items-center flex-wrap w-full text-sm font-semibold py-1'><span className='text-lime-500 mr-2'><BsFillPlayFill /></span>Node.Js</div>
                   </div>
                   <div className='lg:w-1/2 w-full flex flex-col flex-wrap justify-start items-center'>
                   <div className='flex flex-row justify-start items-center flex-wrap w-full text-sm font-semibold py-1'><span className='text-lime-500 mr-2'><BsFillPlayFill /></span>Express.js</div>
                       <div className='flex flex-row justify-start items-center flex-wrap w-full text-sm font-semibold py-1'><span className='text-lime-500 mr-2'><BsFillPlayFill /></span>Tailwind css</div>
                       <div className='flex flex-row justify-start items-center flex-wrap w-full text-sm font-semibold py-1'><span className='text-lime-500 mr-2'><BsFillPlayFill /></span>Next.js</div>
                   </div>
                </div>
              </div>
            </div>
            <div className='lg:w-2/5 w-full anim flex justify-center items-center flex-col'>

              <div className='w-[20rem] child duration-500 rounded-md h-[20rem] border-2 absolute mt-20 ml-10 z-10 border-lime-500'></div>
              <div className='w-[20rem] child2 z-20 pt-10 duration-500  rounded-md'><img className='rounded-md' src={Img} alt="" /></div>
            </div>
          </div>



          {/* Container 3 experience */}

          <div className='w-full lg:w-3/4 flex flex-col justify-center items-center py-[10rem] ' id='experience'>
            <div className=' py-10 w-full flex flex-row font-mono text-xl lg:text-3xl justify-center items-end text-white font-semibold'><span className='px-1 text-lg text-lime-400 '>02.</span><h1>Where I've worked</h1><div className='px-1 mb-2 ml-2 w-1/3 h-[.1rem] bg-lime-700'></div></div>
            <div className='w-full lg:w-3/4 h-[20rem] flex flex-row flex-wrap justify-start text-start items-center '>
              <div className='lg:w-1/4 w-full flex flex-col justify-center items-center'>
                <div onClick={() => { setactive("mxy") }} className={active === "mxy" ? 'border-l-[.2rem] bg-slate-700 cursor-pointer text-lime-500 duration-1000 border-lime-500 text-sm ease-in-out font-mono font-bold w-full py-3 px-2' : ' cursor-pointer border-l-4 border-transparent  text-sm font-mono text-slate-400 font-bold w-full py-3 px-2'}>MXY Studio</div>
                <div onClick={() => { setactive("welldev") }} className={active === "welldev" ? 'border-l-[.2rem] bg-slate-700 cursor-pointer text-lime-500 duration-1000 border-lime-500 ease-in-out text-sm font-mono font-bold w-full py-3 px-2' : ' border-l-4 border-transparent  cursor-pointer  text-sm font-mono text-slate-400 font-bold w-full py-3 px-2'}>Welldev</div>
                <div onClick={() => { setactive("kpr") }} className={active === "kpr" ? 'border-l-[.2rem] bg-slate-700 cursor-pointer text-lime-500 duration-1000 border-lime-500 text-sm ease-in-out font-mono font-bold w-full py-3 px-2' : ' border-l-4 border-transparent cursor-pointer  text-sm font-mono text-slate-400 font-bold w-full py-3 px-2'}>Kprtech</div>
                <div onClick={() => { setactive("intern") }} className={active === "intern" ? 'border-l-[.2rem] bg-slate-700 cursor-pointer text-lime-500 duration-1000 border-lime-500 text-sm ease-in-out font-mono font-bold w-full py-3 px-2' : 'border-l-4 border-transparent cursor-pointer  text-sm font-mono text-slate-400 font-bold w-full py-3 px-2'}>Internship</div>
                <div onClick={() => { setactive("self") }} className={active === "self" ? 'border-l-[.2rem] bg-slate-700 cursor-pointer text-lime-500 duration-1000 border-lime-500 text-sm ease-in-out font-mono font-bold w-full py-3 px-2' : 'border-l-4 border-transparent cursor-pointer text-sm font-mono text-slate-400 font-bold w-full py-3 px-2'}>Self Learning</div>
                <div onClick={() => { setactive("start") }} className={active === "start" ? 'border-l-[.2rem] bg-slate-700 cursor-pointer text-lime-500 duration-1000 border-lime-500 text-sm ease-in-out font-mono font-bold w-full py-3 px-2' : 'border-l-4 border-transparent cursor-pointer text-sm font-mono text-slate-400 font-bold w-full py-3 px-2'}>Starting</div>
              </div>
              <div className='lg:w-3/4 w-full flex flex-col justify-center items-center'>
                {
                  active === "mxy" && <Content1 />
                }
                {
                  active === "welldev" && <Content2 />
                }
                {
                  active === "kpr" && <Content3 />
                }
                {
                  active === "intern" && <Content4 />
                }
                {
                  active === "self" && <Content5 />
                }
                {
                  active === "start" && <Content6 />
                }
              </div>
            </div>

          </div>

          {/* Container 4  work  */}

          <div id='work' className='w-full h-auto flex flex-col justify-center items-center py-[10rem]'>
            <div className=' py-10 w-full flex flex-row font-mono lg:text-3xl md:text-3xl justify-center items-end text-white font-semibold text-2xl'><span className='px-1 text-lg text-lime-400 '>03.</span><h1>Some Things I’ve Built</h1><div className='px-1 mb-2 ml-2 w-1/2 h-[.1rem] bg-lime-700'></div></div>
            <div className='w-full flex lg:flex-row flex-col lg:justify-center items-center py-5 my-10'>
              <div className='lg:w-3/5 w-full  flex justify-center items-center eff'><img className='rounded-lg' src={Fourier} alt="" /></div>
              <div className='lg:w-2/5 flex flex-col lg:justify-end sm:justify-center sm:items-center sm:w-full lg:items-end'>
                <div className='w-full text-end font-mono font-bold py-1 text-lime-500 text-lg'>Featured Project</div>
                <div className='w-full text-end font-mono font-bold py-1 text-slate-300 text-3xl'>Fourier Series</div>
                <div className='lg:w-[30rem] w-full py-5 px-3 bg-[#0c4a6e] shadow-lg rounded-md text-sm font-mono text-slate-300 font-bold z-10 text-end '>From fourier series we learn to know that every singnal consist of sign signal . To visualize it i used <span className='text-lime-500'>HTML , CSS, Javascript and bootstarp</span></div>
                <div className='w-full text-end font-bold font-mono text-slate-400 text-sm py-2 flex flex-row justify-around items-end '> <h1>HTML</h1> <h1>CSS</h1> <h1>Javascript</h1> <h1>Bootstrap</h1> <h1>Netlify</h1></div>
                <div className='w-full text-end flex flex-row justify-end items-end px-5 text-2xl py-3 text-slate-300'><FiGithub className='mx-5 hover:text-lime-500 duration-200 cursor-pointer' /> <FiExternalLink className=' hover:text-lime-500 duration-200 cursor-pointer' /></div>
              </div>
            </div>


            <div className='w-full flex lg:flex-row-reverse flex-col lg:justify-center items-center py-5 my-10'>
              <div className='lg:w-3/5 w-full  flex justify-center items-center eff'><img className='rounded-lg' src={Hospital} alt="" /></div>
              <div className='lg:w-2/5 flex flex-col lg:justify-end sm:justify-center sm:items-center sm:w-full lg:items-start'>
                <div className='w-full text-start font-mono font-bold py-1 text-lime-500 text-lg'>Featured Project</div>
                <div className='w-full text-start font-mono font-bold py-1 text-slate-300 text-3xl'>Hospital Management sys</div>
                <div className='lg:w-[30rem] w-full py-5 px-3 bg-[#0c4a6e] shadow-lg rounded-md text-sm font-mono text-slate-300 font-bold z-10 text-start '>Hospital Management system Consists of Doctors patients and administrator . Where easily interract with everyone easily<span className='text-lime-500'>React ,Tailwind CSS, Express js and Mongodb</span></div>
                <div className='w-full text-start font-bold font-mono text-slate-400 text-sm py-2 flex flex-row justify-around items-start '> <h1>React</h1> <h1>Tailwind css</h1> <h1>Express js</h1> <h1>Mongodb</h1> <h1>Node js</h1></div>
                <div className='w-full text-start flex flex-row justify-start items-start px-5 text-2xl py-3 text-slate-300'><FiGithub className=' hover:text-lime-500 duration-200 cursor-pointer' /> <FiExternalLink className='mx-5 hover:text-lime-500 duration-200 cursor-pointer' /></div>
              </div>
            </div>


            <div className='w-full flex lg:flex-row flex-col lg:justify-center items-center py-5 mt-10'>
              <div className='lg:w-3/5 w-full  flex justify-center items-center eff'><img className='rounded-lg' src={weatherapp} alt="" /></div>
              <div className='lg:w-2/5 flex flex-col lg:justify-end sm:justify-center sm:items-center sm:w-full lg:items-end'>
                <div className='w-full text-end font-mono font-bold py-1 text-lime-500 text-lg'>Featured Project</div>
                <div className='w-full text-end font-mono font-bold py-1 text-slate-300 text-3xl'>Weather Application</div>
                <div className='lg:w-[30rem] w-full py-5 px-3 bg-[#0c4a6e] shadow-lg rounded-md text-sm font-mono text-slate-300 font-bold z-10 text-end '>Real time weather information city wised provided by this app. Used external weather API for information <span className='text-lime-500'>HTML , CSS, Javascript and React Js</span></div>
                <div className='w-full text-end font-bold font-mono text-slate-400 text-sm py-2 flex flex-row justify-around items-end '> <h1>HTML</h1> <h1>CSS</h1> <h1>Javascript</h1> <h1>React Js</h1> <h1>Netlify</h1></div>
                <div className='w-full text-end flex flex-row justify-end items-end px-5 text-2xl py-3 text-slate-300'><FiGithub className='mx-5 hover:text-lime-500 duration-200 cursor-pointer' /> <FiExternalLink className=' hover:text-lime-500 duration-200 cursor-pointer' /></div>
              </div>
            </div>

           <div className='w-full flex justify-end items-center'><div className='cursor-pointer font-mono border-2 border-lime-500 py-2 px-5 mt-5 rounded-md hover:bg-slate-800 duration-500 text-lg text-lime-500'>Learn More</div></div>
          </div>

          {/* Container 5 projects */}

          <div className='w-full flex flex-row flex-wrap justify-center items-center py-[5rem]'>
            <div className='w-full text-center font-mono text-3xl font-bold text-slate-300'>Other Noteworthy Projects</div>
            <div className='w-full text-center font-mono text-md py-4 font-bold text-lime-500'>View the archive</div>
            <div className='w-full h-auto py-10 flex flex-row justify-center items-center flex-wrap'>

            { 
               Data.map((item)=>{
                return <Pcard title={item.title} text={item.text} tag={item.tag}/>
               })
              
              }
            </div>
            <div className='cursor-pointer font-mono border-2 border-lime-500 py-3 px-5 mt-5 rounded-md hover:bg-slate-800 duration-500 text-lg text-lime-500'>Show More</div>
          </div>

          {/* Container 6 contact */}

          <div className='w-full h-auto py-[10rem] flex flex-col justify-center items-center flex-wrap' id='contact'>
            <div className='font-mono font-semibold text-lg text-lime-500'>04. What’s Next?</div>
            <div className=' font-bold text-5xl py-3 text-slate-200'>Get In Touch</div>
            <div className='font-mono w-full lg:w-1/2 text-center text-slate-400 py-3 pb-5'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</div>
            <div className='cursor-pointer font-mono border-2 border-lime-500 py-3 px-5 mt-5 rounded-md hover:bg-slate-800 duration-500 text-lg text-lime-500'><a href="mailto:yeakob677@gmail.com">Say Hello</a></div>
          </div>
          <div className='text-center py-5 font-mono font-semibold text-slate-400 text-sm cursor-pointer hover:text-lime-500 duration-1000'>Designed & Build by Yeakob Ali <br />yeakob677@gmail.com</div>


        </div>



        {/* rightt nav section */}


        <div className='w-1/6 flex flex-col justify-end items-center h-[41.5rem] top-[5rem] bg-transparent fixed right-0'>
          <div className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none cursor-pointer text-sm hover:text-lime-500 rotate-90 h-[15rem] w-full flex justify-center items-center text-white font-mono tracking-widest'>yeakob677@gmail.com</div>
          <div className='w-full flex justify-center items-center'><div className='h-[7rem] rounded-xl w-[.2rem] bg-white'></div></div>
        </div>

       
      </div>

      {/* small screen nav section */}
      <div className={click ? 'py-10 font-mono font-semibold text-sm bg-[#1D2F4F] text-white top-0 right-0 block flex flex-col justify-center  items-center  ann fixed w-[7.5rem] z-100 h-screen ':' top-0 right-0 fixed w-[8rem] hh z-100 h-screen '}>
          <div className='py-10 text-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-lime-500 duration-200'> <a href="#about"><span className=' text-lime-500'>01. <br /> </span>About</a></div>
          <div className='py-10 text-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-lime-500 duration-200'> <a href="#experience"><span className=' text-lime-500'>02. <br /></span>Experience</a></div>
          <div className='py-10 text-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-lime-500 duration-200'> <a href="#work"><span className=' text-lime-500'>03. <br /></span>Work</a></div>
          <div className='py-10 text-center transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-lime-500 duration-200'> <a href="#contact"><span className=' text-lime-500'>04. <br /></span>Contact</a></div>
          <div className='border-2 px-4 border-lime-500 text-lime-500 py-2'> <a href={Resume} download>Resume </a></div>

      </div>

    </div>
  )
}

export default Container
