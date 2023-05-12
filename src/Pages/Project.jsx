import React from 'react'
import Projects from '../Components/Projects'
import {StoreConsumer} from '../Context/Context'
import {useParams} from 'react-router-dom'
const Project = () => {
  const {name} = useParams()
  return (
    <section className=''>

      <div className="">
        <StoreConsumer>
            {value =>{
              const {projects} = value
              const pictr = projects.map(item => {return (item.image)})
              const project = projects.find(item => item.title === name)
              const {image,title,description} = project
              return (
                <section>
                  <img src={image} alt={title} />

                  <div className="relative lg:h-fit h-[400px]">
                      <div className="w-full h-full">
                          <img src="images/projects-1.jpg" alt="project" className='w-full h-full object-cover'/>
                      </div>

                      <div className="absolute  w-full  top-[50%] transform-y-[50%] text-center flex flex-col items-center md:gap-12 gap-6 justify-center">
                          <div className="w-20  h-[2.5px] bg-[#f9b707]"></div>
                          <h1 className='uppercase md:text-6xl text-4xl text-white font-bolder'>{projects[0].title}</h1>
                      </div>

                    
                  </div>

                  <div className="w-full h-full lg:p-24 p-10 flex flex-col gap-10">
                  <div className="w-20  h-[2.5px] bg-[#f9b707]"></div>
                      <p className="colum first-letter:capitalize">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deserunt et sapiente omnis magni quibusdam adipisci quisquam necessitatibus qui, reiciendis maxime quas recusandae obcaecati at. Numquam obcaecati eos ipsam vel! Blanditiis laboriosam, sit provident consequuntur in cupiditate expedita a excepturi et quaerat aperiam ullam numquam. Repellat molestiae inventore dolor. Tempora placeat in maxime, similique ipsa provident non aliquid quas. Sit minima provident aliquid hic nobis voluptate laboriosam explicabo, beatae eligendi cumque corrupti maxime dolore maiores nesciunt amet error voluptates suscipit officia debitis. Minima exercitationem quam est quia nihil vero amet consectetur laboriosam error vitae tempora officiis hic dolorem praesentium accusantium magnam nulla, placeat culpa, doloremque qui sequi sapiente. Molestias rerum error officiis eum nobis quibusdam vel nam, nulla, tenetur recusandae ipsum quis commodi consequatur distinctio doloremque neque harum magni! Error nihil id consectetur necessitatibus. Consequatur quisquam!
                      </p>
                    </div>

                </section>
              )
            }}
        </StoreConsumer>
      </div>
    
    <div className='grid xl:grid-cols-4 lg:grid-cols-2  lg:px-0 grid-rows-2'>
        <Projects/>
    </div>
 </section>
  )
}

export default Project