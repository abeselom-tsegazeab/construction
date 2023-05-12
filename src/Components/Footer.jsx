import React from 'react'
import {SlSocialFacebook, SlSocialInstagram, SlSocialPintarest, SlSocialTwitter, SlSocialYoutube} from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
   <section className='flex lg:flex-row flex-col bg-[#3d3c3c] px-[10%] py-[6%] gap-10 justify-between'>
        <div className="lg:w-1/4 w-full flex flex-col gap-3 text-gray-300 font-Rubik p-1">
            <div className=""><img src="images/atlantic.jpg" alt="logo" /></div>
            <div className="">
            Construction’s core values have been shaped over more than 10 years of delivering the finest construction services to our clients. They stood to the test of time and these principles remain our bedrock lynchpins. We never tried to cut on either quality, the pace of work or any other construction aspect. We stay true to our full promise of efficiency!
            </div>
        </div>


        <div className="flex flex-col lg:w-1/4 gap-4 ">
            <h1 className='text-3xl uppercase text-white font-Rubik'>navigation</h1>
            <div className="flex flex-col gap-2 text-gray-300 font-Rubik">
                <Link to='/news' className="text-lg capitalize hover:text-gray-300 text-amber-400 font-R">industry news</Link>
                <Link to='/underconstruction' className="text-lg capitalize hover:text-gray-300 text-amber-400 font-R">projects in development</Link>
                <Link to='/completedprojects' className="text-lg capitalize hover:text-gray-300 text-amber-400 font-R">completed projects</Link>

            </div>
        </div>


        <div className=" flex flex-col lg:w-1/4 gap-4">
            <h1 className='text-3xl  uppercase text-white font-Rubik '>recent posts</h1>
            <div className=" flex flex-col text-white font-Rubik capitalize gap-2">
                <Link to='/home' className='text-lg text-gray-300 font-Rubik hover:text-amber-400 transition-all'>future proofing hospitals</Link>
                <h1 className='text-italic italic text-gray-400'>posted by <span className='text-amber-300'>admin</span></h1>
                <Link to='/home' className='text-lg text-gray-300 font-Rubik hover:text-amber-400 transition-all'>future proofing hospitals</Link>
                <h1 className='text-italic italic text-gray-400'>posted by <span className='text-amber-300'>admin</span></h1>
                <Link to='/home' className='text-lg text-gray-300 font-Rubik hover:text-amber-400 transition-all'>future proofing hospitals</Link>
                <h1 className='text-italic italic text-gray-400'>posted by <span className='text-amber-300'>admin</span></h1>
            </div>

        </div>


        <div className="lg:w-1/4 flex flex-col gap-3">
            <h1  className='text-4xl font-Rubik capitalize text-white'>contacts</h1>
            <div className=" flex flex-col text-white font-Rubik capitalize gap-2">
               <h1 className='text-gray-400 font-Rubik text-lg'>Address: 4578 Marmora Road, Glasgow, D04 89GR</h1>
               <h1 className='text-gray-400 font-Rubik text-lg '>Phones: <span className='text-amber-300 font-Rubik text-lg hover:text-gray-300 transition-all'>(800) 123-0045; </span>: <span className='text-amber-300 font-Rubik text-lg hover:text-gray-300 transition-all'>(800) 123-0046</span> </h1>
               <h1 className='text-gray-400 font-Rubik text-lg '>E-mail: <span className='text-amber-300 font-Rubik text-lg hover:text-gray-300 transition-all'>info@demolink.org </span> </h1>
            </div>
        </div>
       
   </section>
   <div className="w-full bg-[#222222] px-[10%] py-[0.7%] flex justify-between items-center">
        <h1 className='text-gray-400 hover:text-amber-300 transition-colors w-fit'>
            &copy;.all rights reserved
        </h1>
        <div className="gap-4 text-xl flex">
            <SlSocialFacebook className='text-white hover:text-amber-300 transition-colors'/>
            <SlSocialTwitter className='text-white hover:text-amber-300 transition-colors'/>
            <SlSocialInstagram className='text-white hover:text-amber-300 transition-colors'/>
            <SlSocialYoutube className='text-white hover:text-amber-300 transition-colors'/>
            <SlSocialInstagram className='text-white hover:text-amber-300 transition-colors'/>
            <SlSocialPintarest className='text-white hover:text-amber-300 transition-colors'/>
        </div>
   </div>
   </>
  )
}

export default Footer