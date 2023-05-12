import React from 'react'
import { useState } from 'react'
import {BiMap, BiPhone} from 'react-icons/bi'
import {FaAngleDoubleDown,FaArrowDown,FaArrowRight,FaBars,FaHome} from 'react-icons/fa'
import {SlSocialFacebook, SlSocialInstagram, SlSocialPintarest, SlSocialTwitter, SlSocialYoutube} from 'react-icons/sl'
import {  NavLink } from 'react-router-dom'
import {motion } from 'framer-motion'
import {AiOutlineClose} from 'react-icons/ai'
const Header = () => {
    const [open,setOpen] = useState(false)
    const handleOpen =()=>{
        setOpen(!open)
    }
  return (
   <>
   <section className='w-full  text-white'>
     
    <div className="bg-[#272727]  px-2 lg:px-32 py-4 flex md:gap-12 gap-3 flex-wrap lg:justify-between justify-center ">
        <div className="flex gap-4  ">
            <BiMap className='text-2xl text-amber-400'/>
            <h1 className=' w-full'>Address: 4578 Marmora Road, Glasgow, D04 89GR</h1>
        </div>

        <div className="flex gap-4">
            <BiPhone className='text-2xl text-amber-400'/>
            <h1>Phones:(800) 123-0045; (800) 123-0046</h1>
        </div>
        
        <div className="gap-4 text-xl flex">
            <SlSocialFacebook/>
            <SlSocialTwitter/>
            <SlSocialInstagram/>
            <SlSocialYoutube/>
            <SlSocialInstagram/>
            <SlSocialPintarest/>
        </div>
    </div>
        <div className="w-full md:px-32 px-6  flex items-center justify-between bg-[#333333] flex-wrap">
        <div className="lg:w-[10%] w-[100px] h-[80px] pt-2 pb-4">
            <img src="images/atlantic.jpg" alt="Logo" className='w-full h-full object-cover' />
        </div>


        <div className='uppercase text-xl text-gray-400 font-light gap-6 lg:flex hidden'>
            <NavLink to='/'  className={({isActive})=>(isActive ? 'underline underline-offset-8 text-amber-300 hover:text-amber-300':'focus:text-amber-300 hover:text-amber-300')}>home</NavLink>
            <NavLink to='/about'  className={({isActive})=>(isActive ? 'underline underline-offset-8 text-amber-300 hover:text-amber-300':'focus:text-amber-300 hover:text-amber-300')}>about</NavLink>
            <NavLink to='/ourteam'  className={({isActive})=>(isActive ? 'underline underline-offset-8 text-amber-300 hover:text-amber-300':'focus:text-amber-300 hover:text-amber-300')}>our team</NavLink>
            <div   className='relative focus:text-amber-300 hover:text-amber-300 group'>
             <NavLink to='/projectspage' className={({isActive})=>(isActive ? 'flex gap-2 items-center underline underline-offset-8 text-amber-300 hover:text-amber-300':'focus:text-amber-300 hover:text-amber-300  flex gap-2 items-center ')}>
             projects 
             </NavLink>
              
            </div>
            
            <NavLink to='/news'  className={({isActive})=>(isActive ? 'underline underline-offset-8 text-amber-300 hover:text-amber-300':'focus:text-amber-300 hover:text-amber-300')}>news</NavLink>
            <NavLink to='/contact'  className={({isActive})=>(isActive ? 'underline underline-offset-8 text-amber-300 hover:text-amber-300':'focus:text-amber-300 hover:text-amber-300')}>contacts</NavLink>
        </div>
        
        <div className="flex gap-6">
            
            <div className="lg:hidden relative">
                <FaBars className='' onClick={handleOpen}/>
                
            {open ?<motion.div  
            initial={{x:100}}
            animate={{ x:-200}}
            className='fixed z-50 h-[1000px] top-0 py-24 pl-6 w-96 bg-gray-900 flex flex-col gap-4 text-xl uppercase items-start justify-start'
            >
              <div className="absolute top-12 left-6">
                <AiOutlineClose onClick={handleOpen} className='text-2xl font-bold text-amber-300'/>
              </div>
             
               <NavLink to='/'  className={({isActive})=>(isActive ? 'underline underline-offset-8 text-amber-300 hover:text-amber-300':'focus:text-amber-300 hover:text-amber-300')}>home</NavLink>
            <NavLink to='/about'  className={({isActive})=>(isActive ? 'underline underline-offset-8 text-amber-300 hover:text-amber-300':'focus:text-amber-300 hover:text-amber-300')}>about</NavLink>
            <NavLink to='/ourteam'  className={({isActive})=>(isActive ? 'underline underline-offset-8 text-amber-300 hover:text-amber-300':'focus:text-amber-300 hover:text-amber-300')}>our team</NavLink>
                <NavLink to='/news'  className={({isActive})=>(isActive ? 'underline underline-offset-8 text-amber-300 hover:text-amber-300':'focus:text-amber-300 hover:text-amber-300')}>news</NavLink>
                <NavLink to='/contact'  className={({isActive})=>(isActive ? 'underline underline-offset-8 text-amber-300 hover:text-amber-300':'focus:text-amber-300 hover:text-amber-300')}>contacts</NavLink>
            <div   className='relative focus:text-amber-300 hover:text-amber-300 group'>
             <NavLink to='/projectspage' className={({isActive})=>(isActive ? 'flex gap-2 items-center underline underline-offset-8 text-amber-300 hover:text-amber-300':'focus:text-amber-300 hover:text-amber-300  flex gap-2 items-center ')}>
             projects <FaAngleDoubleDown className='text-sm'/>
             </NavLink>
              <div className=" z-[100] absolute top-6 group-hover:flex flex-col hidden pt-6 w-72 justify-center ">
              <NavLink to='/project/warehouse or logistics' className={({isActive})=>(isActive ? 'underline underline-offset-2 text-[16px] hover:text-amber-300  bg-[#333333] z-20 font-light px-3 py-1 text-white' :'text-[16px] hover:text-amber-300   z-20 font-light px-3 py-1 text-white'
              )}>warehouse / logistics</NavLink>
              <NavLink to='/project/commercial' className={({isActive})=>(isActive ? 'underline underline-offset-2 text-[16px] hover:text-amber-300  bg-[#333333] z-20 font-light px-3 py-1 text-white' :'text-[16px] hover:text-amber-300   z-20 font-light px-3 py-1 text-white'
              )}>commercial</NavLink>
              <NavLink to='/project/educational' className={({isActive})=>(isActive ? 'underline underline-offset-2 text-[16px] hover:text-amber-300  bg-[#333333] z-20 font-light px-3 py-1 text-white' :'text-[16px] hover:text-amber-300   z-20 font-light px-3 py-1 text-white'
              )}>educational</NavLink>
              <NavLink to='/project/healthcare' className={({isActive})=>(isActive ? 'underline underline-offset-2 text-[16px] hover:text-amber-300  bg-[#333333] z-20 font-light px-3 py-1 text-white' :'text-[16px] hover:text-amber-300   z-20 font-light px-3 py-1 text-white'
              )}>healthcare</NavLink>
              <NavLink to='/project/government or military' className={({isActive})=>(isActive ? 'underline underline-offset-2 text-[16px] hover:text-amber-300   z-20 font-light px-3  py-1 text-white ' :'text-[16px] hover:text-amber-300   z-20 font-light px-3 py-1 text-white')}>government / military</NavLink>
              <NavLink to='/project/data or technology' className={({isActive})=>(isActive ? 'underline underline-offset-2 text-[16px] hover:text-amber-300  bg-[#333333] z-20 font-light px-3 py-1 text-white' :'text-[16px] hover:text-amber-300   z-20 font-light px-3 py-1 text-white'
              )}>data / technology</NavLink>
              <NavLink to='/project/cultural or lifestyle' className={({isActive})=>(isActive ? 'underline underline-offset-2 text-[16px] hover:text-amber-300 ] z-20 font-light px-3 py-1 text-white' :'text-[16px] hover:text-amber-300  z-20 font-light px-3 py-1 text-white'
              )}>cultural / lifestyle</NavLink>
              <NavLink to='/project/manufacturing or industrial' className={({isActive})=>(isActive ? 'underline underline-offset-2 text-[16px] hover:text-amber-300   z-20 font-light px-3 py-1 text-white' :'text-[16px] hover:text-amber-300   z-20 font-light px-3 py-1 text-white'
              )}>manufacturing / industrial</NavLink>
            </div>
            </div>
               
            </motion.div>
            :null}
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Header