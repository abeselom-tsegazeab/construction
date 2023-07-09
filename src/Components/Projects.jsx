import React from 'react'
import { StoreConsumer } from '../Context/Context'
import { NavLink } from 'react-router-dom'
const Projects = () => {
  return (
    <StoreConsumer>
        {value=>{
            const {projects} = value;
            return(
                projects.map((item)=>{
                    return(
                            <div className="flex h-[300px]  flex-col justify-center">
                              <div className="group h-96  [perspective:1000px]">
                                <div className=" relative h-full w-full [transform-style:preserve-3d] transition ease-in-out duration-1000 group-hover:[transform:rotateY(180deg)]">
                                  <div className="absolute inset-0">
                                    <img className='brightness-50 h-full w-full object-cover ' src={item.image} alt="project" />
                                    <p className='top-[50%] flex w-full justify-center absolute text-xl text-white uppercase font-Montserrat'>
                                    {item.title}
                                    </p>
                                  </div>
                                  <div className={`absolute inset-0 h-full w-full text-center [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
                                    <img className='brightness-50  h-full w-full object-cover ' src={item.image} alt="project" />
                                    <div className='top-[30%] flex gap-4 flex-col w-full justify-center absolute text-xl text-white uppercase font-Montserrat'>
                                     <h1> {item.title}</h1>
                                     <h1 className='text-[14px] px-4'> {item.introduction}</h1>
                                     <NavLink to='/projectspage'>
                                     <button className='text-[14px] underline uppercase'>view projects</button>

                                     </NavLink>
                                    </div>
                                  
                                  </div>
                                </div>
                              </div>
                            </div>
                    )
                })
                
            )
        }}
    </StoreConsumer>
  )
}

export default Projects
