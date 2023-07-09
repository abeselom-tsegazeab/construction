import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import {Navigation,Autoplay} from 'swiper'
import Services from '../Components/Services'
import Projects from '../Components/Projects'
import { Link, NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <Swiper  
    //  autoplay={{
    //       delay: 10000,
    //       disableOnInteraction: false,
    //     }}
    //     loop={true} 
        modules={[Autoplay]} 
        className="mySwiper " 
        >
        <SwiperSlide>
            <section className='bg-[url("images/slide-1.jpg")] h-fit  bg-no-repeat bg-cover bg-origin-content bg-fixed flex    w-full'>
                <div className="md:mb-20 mx-auto">
                    <h1 className='transition-all  duration-1000 delay-75 md:text-[60px] text-[35px] w-full lg:text-[110px]  mt-24 md:mt-36  uppercase text-white font-Montserrat-500'>construction</h1>
                    <h1 className='transition-all  duration-1000 delay-75  text-[17px] sm:text-[20px] md:text-[25px]  lg:text-[30px] xl:text-[40px] capitalize font-Montserrat text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, veritatis.</h1>
                    <NavLink to='/projectspage'><button className='md:text-xl text-lg mt-12   font-Rubik bg-amber-500 hover:bg-[#272727] uppercase transition ease-in-out duration-200 delay-25 px-6 py-4 rounded-md text-white mb-20'>see our recent projects</button></NavLink>
                </div>
            </section>
        </SwiperSlide>
        <SwiperSlide> 
            <section className='bg-[url("images/slide-2.jpg")]  bg-no-repeat bg-cover bg-origin-content bg-fixed w-full'>
            <div className="md:mb-20 mx-auto">
                    <h1 className='transition-all  duration-1000 delay-75 md:text-[60px] text-[35px] w-full lg:text-[110px]  mt-24 md:mt-36  uppercase text-white font-Montserrat-500'>construction</h1>
                    <h1 className='transition-all  duration-1000 delay-75  text-[17px] sm:text-[20px] md:text-[25px]  lg:text-[30px] xl:text-[40px] capitalize font-Montserrat text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, veritatis.</h1>
                    <NavLink to='/projectspage'><button className='md:text-xl text-lg mt-12   font-Rubik bg-amber-500 hover:bg-[#272727] uppercase transition ease-in-out duration-200 delay-25 px-6 py-4 rounded-md text-white mb-20'>see our recent projects</button></NavLink>
                </div>
            </section>
        </SwiperSlide>

        <SwiperSlide> 
            <section className='bg-[url("images/slide-3.jpg")]  bg-no-repeat bg-cover bg-origin-content bg-fixed  w-full'>
            <div className="md:mb-20 mx-auto">
                    <h1 className='transition-all  duration-1000 delay-75 md:text-[60px] text-[35px] w-full lg:text-[110px]  mt-24 md:mt-36  uppercase text-white font-Montserrat-500'>construction</h1>
                    <h1 className='transition-all  duration-1000 delay-75  text-[17px] sm:text-[20px] md:text-[25px]  lg:text-[30px] xl:text-[40px] capitalize font-Montserrat text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, veritatis.</h1>
                    <NavLink to='/projectspage'><button className='md:text-xl text-lg mt-12   font-Rubik bg-amber-500 hover:bg-[#272727] uppercase transition ease-in-out duration-200 delay-25 px-6 py-4 rounded-md text-white mb-20'>see our recent projects</button></NavLink>
                </div>
            </section>
        </SwiperSlide>
    </Swiper>
    <section className='w-full flex flex-col items-center justify-center lg:p-28 py-28 gap-6'>
        <div className="w-24  h-[2.5px] bg-[#f9b707]"></div>
        <h1 className='text-4xl uppercase font-Montserrat-500'>our services</h1>
        
        <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-rows-2 sm:grid-cols-1 grid-flow-row-dense lg:gap-12  mt-12">
            <Services/>
        </div>

    </section>

    <section className='bg-gray-100  md:px-24 px-4 py-10 md:py-36'>
        <div className="flex md:flex-row flex-col-reverse gap-6">
            <div className="md:w-1/2 flex flex-col gap-6 justify-start pr-4 ">
                <div className="w-20  h-[2.5px] bg-[#f9b707]"></div>
                <h1 className='text-4xl font-Montserrat-500'>OUR HISTORY</h1>
                <p className='text-2xl font-Rubik mt-10 ' >OUR CONSTRUCTION COMPANY HAS BEEN FOUNDED 10 YEARS AGO, AT THE VERY PEAK OF THE BUILDING FRENZY IN THE US…</p>
                <h1 className='text-gray-500 font-Rubik text-lg '>Since then we’ve built hundreds of commercial, government and private buildings and facilities. It may not sound like a lot, but if you estimate the manpower, working hours, materials, planning and correlating that were all involved in completing each separate project, then our productivity is immense!</h1>
                <NavLink to='/news'><button className='text-Rubik bg-[#f9b707] px-10 py-5 rounded-md uppercase text-white w-fit mt-12 hover:bg-[#333333] transition ease-in-out duration-200 delay-75'>read more</button>
</NavLink>
            </div>
            <div className="md:w-1/2 w-full flex  justify-center">
                <img src="images/index-2.jpg" alt="index-2" className='w-full h-full object-contain' />
            </div>
        </div>

    </section>

    <section className='grid xl:grid-cols-4 lg:grid-cols-2  lg:px-0 grid-rows-2'>
        <Projects/>
    </section>

    <section  className='w-full md:px-24 px-4  md:py-36 py-10 flex flex-col gap-12'>
        <div className="  mx-auto text-center flex flex-col gap-4">
            <div className="w-24  h-[2.5px] bg-[#f9b707] mx-auto"></div>
            <h1 className='capitalize text-4xl font-bold'>recent news</h1>
        </div>
        

        <div className='grid lg:grid-cols-3 gap-10'>
        {/* blog-1a */}

        <div className=' flex flex-col gap-6'>
            <div className="w-full h-/2">
                <img src="images/blog-1a.jpg" alt="blog1" />
            </div>
            <div className="flex flex-col gap-3">
                <h1 className='uppercase text-[25px]  font-Rubik hover:text-[#f9b707] transition-colors w-fit'>future proofing hospitals</h1>
                <h1 className='first-letter:capitalize text-[#888888] font-Montserrat text-sm'>posted by <span className=' text-[15px] text-[#f9b707] mr-2 hover:text-black transitionease-in-out delay-100 duration-200'>admin</span> <span className='text-[15px] text-[#f9b707] mr-2 hover:text-black capitalize transitionease-in-out delay-100 duration-200'>january 1,2023</span></h1>
                <h1 className='text-[20px] first-letter:capitalize text-[#888888] font-Rubik'>By improving the physical layout of hospitals and medical facilities, we can enhance and increase safety mechanisms, improve care, and…</h1>
            </div>
        </div>



        <div className=' flex flex-col gap-6'>
            <div className="w-full h-/2">
                <img src="images/blog-2a.jpg" alt="blog2" />
            </div>
            <div className="flex flex-col gap-3">
                <h1 className='uppercase text-[25px]  font-Rubik hover:text-[#f9b707] transition-colors w-fit'>future proofing hospitals</h1>
                <h1 className='first-letter:capitalize text-[#888888] font-Montserrat text-sm'>posted by <span className=' text-[15px] text-[#f9b707] mr-2 hover:text-black transitionease-in-out delay-100 duration-200'>admin</span> <span className='text-[15px] text-[#f9b707] mr-2 hover:text-black capitalize transitionease-in-out delay-100 duration-200'>january 1,2023</span></h1>
                <h1 className='text-[20px] first-letter:capitalize text-[#888888] font-Rubik'>By improving the physical layout of hospitals and medical facilities, we can enhance and increase safety mechanisms, improve care, and…</h1>
            </div>
        </div>




        <div className=' flex flex-col gap-6'>
            <div className="w-full h-/2">
                <img src="images/blog-3a.jpg" alt="blog3" />
            </div>
            <div className="flex flex-col gap-3">
                <h1 className='uppercase text-[25px]  font-Rubik hover:text-[#f9b707] transition-colors w-fit'>future proofing hospitals</h1>
                <h1 className='first-letter:capitalize text-[#888888] font-Montserrat text-sm'>posted by <span className=' text-[15px] text-[#f9b707] mr-2 hover:text-black transition ease-in-out delay-100 duration-200'>admin</span> <span className='text-[15px] text-[#f9b707] mr-2 hover:text-black capitalize transition ease-in-out delay-100 duration-200'>january 1,2023</span></h1>
                <h1 className='text-[20px] first-letter:capitalize text-[#888888] font-Rubik'>By improving the physical layout of hospitals and medical facilities, we can enhance and increase safety mechanisms, improve care, and…</h1>
            </div>
        </div>
        </div>
        <div className="w-full flex ">
            <Link to='/news' className='uppercase text-2xl font-Rubik px-5 py-3 transition ease-in-out delay-75 duration-200 bg-[#f9b707] text-white mx-auto hover:bg-gray-900 rounded-md'>see all news</Link>
        </div>
        

    </section>
   </>
    )
}

export default Home;
