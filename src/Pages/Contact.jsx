import React from 'react'
import {GrFacebookOption, GrInstagram, GrPinterest, GrTwitter, GrVimeo, GrYoutube} from 'react-icons/gr'

const Contact = () => {

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  
  return (
   <section className=''>
    
    
    <div className="grid lg:grid-cols-2 ">


    <div className="flex flex-[3] p-24 ">
        <div className="flex-[3] gap-6 flex flex-col">
            <div className="w-24  h-[2.5px] bg-[#f9b707]"></div>
            <h1 className='text-4xl uppercase font-Montserrat-500'>contacts</h1>
            <div className="mt-8 flex flex-col gap-6">
                <h1 className='text-lg text-[#8f8484ce] capitalize font-Montserrat'><span className='text-black text-xl uppercase font-Montserrat-500'>ADDRESS:</span> 4578 Marmora Road, Glasgow, D04 89GR</h1>
                <h1><span className='text-xl font-Montserrat-500 transition ease-in-out delay-75 duration-200'>PHONES:</span> <span className='text-lg text-[#f9b707] hover:text-[#8f8484ce]'>(800) 123-0045;</span> <span className='text-lg text-[#f9b707] hover:text-[#8f8484ce]'>(800) 123-0046</span></h1>
                <h1 className='text-lg text-[#8f8484ce] capitalize font-Montserrat'>
                    <span className='text-black text-xl uppercase font-Montserrat-500' >
                    WE ARE OPEN:
                    </span>
                     Mn-Fr: 10 am-8 pm
                </h1>
                <div className="flex gap-8 items-center justify-evenly w-fit px-4 py-3 text-xl text-[#f9b707] ">
                    <GrFacebookOption className='hover:text-[#181414] '/>
                    <GrTwitter className='hover:text-[#181414] '/>
                    <GrInstagram className='hover:text-[#181414] '/>
                    <GrVimeo className='hover:text-[#181414] '/>
                    <GrYoutube className='hover:text-[#181414] '/>
                    <GrPinterest className='hover:text-[#181414] '/>
                </div>
            </div>
        </div>
    </div>



    <div className="p-24 pr-24 gap-6 flex flex-col">
        <div className="w-24  h-[2.5px] bg-[#f9b707]"></div>
        <h1 className='text-4xl uppercase font-Montserrat-500'>LET’S GET IN TOUCH</h1>
        <form className="mt-8 flex flex-col gap-6 w-[70%] sm:w-full ">
            <input type="text" placeholder='Your name' required className='bg-gray-200 h-16 text-2xl a hover:ring-[#f9b707] hover:ring-2 font-Rubik px-6 focus:bg-white text-gray-600' aria-label='Your Name'/>
            <input type="email" reauired placeholder='E-mail' className='bg-gray-200 h-16 text-2xl a hover:ring-[#f9b707] hover:ring-2 font-Rubik px-6 focus:bg-white text-gray-600' aria-label='Your Name'/>
            <textarea type="email" reauired placeholder='Your Message' className='bg-gray-200 h-44 text-2xl a hover:ring-[#f9b707] hover:ring-2 font-Rubik px-6 focus:bg-white text-gray-600' aria-label='Your Name'/>
            <button className='text-xl font-Montserrat bg-[#f9b707] w-fit px-10 py-4 rounded-md hover:bg-slate-900  text-white uppercase transition ease-in-out duration-200 delay-75'>send</button>
        </form>

    </div>


    </div>


   </section>
  )
}

export default Contact