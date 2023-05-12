import React from 'react'
import { FaHome,FaIgloo, } from 'react-icons/fa'
import { StoreConsumer } from '../Context/Context'
const Services = () => {
  return (
    <StoreConsumer>
        {value=>{
            const {ourServices} = value;
            return(
                ourServices.map((item)=>{
                    return(
                            <div className='flex lg:flex-row flex-col justify-center lg:items-start items-center text-center  px-4 gap-6'>
                                <div className="w-fit h-fit p-7  flex items-center justify-center rounded-full  bg-[#f9b707] hover:bg-[#333333] transition ease-in-out delay-75 duration-200">
                                    {item.icon}
                                </div>
                                <div className=" flex flex-col gap-6 text-left" >
                                <h1 className='text-2xl uppercase font-Rubik lg:text-left text-center'>{item.title}</h1>
                                <p className='first-letter:capitalize text-lg text-gray-400 line-clamp-3'>{item.description}</p>
                                </div>
                            </div>
                    )
                })
                
            )
        }}
    </StoreConsumer>
  )
}

export default Services