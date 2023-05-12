import React from 'react'
import { Link } from 'react-router-dom';
import { StoreConsumer } from '../Context/Context';
const ProjectsPage = () => {
  return (
  <section>
    <div className="relative lg:h-fit h-[400px]">
      <div className="w-full h-full">
      <img src="images/projects-1.jpg" alt="project" className='w-full h-full object-cover'/>
      </div>
      <div className="absolute  w-full  top-[50%] transform-y-[50%] text-center flex flex-col items-center md:gap-12 gap-6 justify-center">
        <div className="w-20  h-[2.5px] bg-[#f9b707]"></div>
        <h1 className='uppercase md:text-6xl text-4xl text-white font-bolder'>projects</h1>
      </div>
    </div>

    <div className='lg:px-24 px-6 lg:py-32 py-12 '>
      <StoreConsumer className='border-4 border-red-400'>
        {value => {
          const projects = value.projects
          return (
            <div className="grid md:grid-cols-2 lg:gap-10 gap-8 w-full">
              {projects.map(project =>{
                return (
                  <div className="w-full space-y-10">
                    <div className="w-full">
                      <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
                    </div>
                    <div className="flex flex-col items-center text-xl uppercase font-Montserrat gap-8">
                      <h1>{project.title}</h1>
                      <p className='text-[16px] text-[#b3a8a8] text-center capitalize'>{project.description}</p>

                    </div>
                  </div>
                )
              })}
            </div>
          )
        }}
      </StoreConsumer>
    </div>

    <div className="w-fullj px-56 py-32 bg-[#f9b707]  grid gap-6 place-items-center justify-center">
      <div className="w-20  h-[2.5px] bg-white block"></div>
      <h1 className='text-4xl text-center text-white font-serif'>IF YOU CAN ENVISION IT, THAN WE CAN BUILD IT TELL US MORE ABOUT YOUR PROJECT</h1>
      <div className="w-full flex ">
            <button className='uppercase text-xl font-serif px-5 py-3 transition ease-in-out delay-75 duration-200 bg-white  mx-auto hover:bg-[#333333] hover:text-white text-black rounded-md'>contact us</button>
      </div>
    </div>
    
  </section>
  )
}

export default ProjectsPage;