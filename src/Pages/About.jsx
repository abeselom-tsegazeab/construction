import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa';
import Projects from '../Components/Projects';
import { StoreConsumer } from '../Context/Context';
const About = () => {
    const valueDisplays = document.querySelectorAll('.num')
    let interval  = 1

    valueDisplays.forEach((value)=>{
        let startValue = 0 
        let endValue = parseInt(value.getAttribute('data-val'))
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function(){
            startValue +=1;
            value.textContent = startValue;
            if(startValue == endValue){
                clearInterval(counter);
            }
        },duration)
    })
  return (
   <section>
    <div className="relative ">
        <div className="">
        <img src="images/about-1.webp" alt="about1"  className='w-full h-[80vh] object-cover'/>
        </div>
        <div className="absolute  w-full  top-[30%] transform-y-[50%] text-center flex flex-col items-center gap-12">
        <div className="w-20  h-[2.5px] bg-[#f9b707]"></div>
        <h1 className='uppercase text-5xl text-white font-bold'>about</h1>
        <h1 className='md:text-xl text-[14px] text-white w-[65%] font-Montserrat'>DURING ALL THIS TIME WE STAYED TRUE TO ONE AND THE SAME PRINCIPLES OF BUSINESS OPERATIONS.</h1>

        </div>
    </div>
    <div className="grid md:grid-cols-2 gap-16 md:px-24 py-24">
    <StoreConsumer>
        {value=>{
            const {about} = value;
            return(
                about.map((item)=>{
                    return(
                            <div className='transition-all ease-linear duration-1000 flex lg:flex-row flex-col justify-center lg:items-start items-center text-center  md:px-4 gap-6'>
                               
                                <div className="transition-all ease-linear duration-1000 w-fit h-fit p-7  flex items-center justify-center rounded-full  bg-[#f9b707] hover:bg-[#333333] ">
                                    {item.image}
                                </div>
                                <div className=" flex flex-col gap-6 text-left transition-all ease-linear duration-1000" >
                                <h1 className='text-2xl uppercase font-Rubik lg:text-left text-center transition-all ease-linear duration-1000'>{item.title}</h1>
                                <p className='first-letter:capitalize text-lg text-gray-400 text-center transition-all ease-linear duration-1000 '>{item.description}</p>
                                </div>
                            </div>
                    )
                })
                
            )
        }}
    </StoreConsumer>
    </div>
    <div className="bg-[url('images/home1.png')] bg-cover bg-fixed  p-24 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 px-24 transition-all ease-linear duration-1000">
        <div className="flex flex-col gap-6">
            <h1 className='text-6xl text-[#f9b707] text-center num' data-val="400">250</h1>
            <h1 className='text-xl text-white text-center uppercase font-Montserrat'>environment friendly</h1>
        </div>

        <div className="flex flex-col gap-6">
            <h1 className='text-6xl text-[#f9b707] text-center num' data-val="400">302</h1>
            <h1 className='text-xl text-white text-center uppercase font-Montserrat'>staff members</h1>
        </div>

        <div className="flex flex-col gap-6">
            <h1 className='text-6xl text-[#f9b707] text-center num' data-val="400">15</h1>
            <h1 className='text-xl text-white text-center uppercase font-Montserrat'>million man-hours</h1>
        </div>

        <div className="flex flex-col gap-6">
            <h1 className='text-6xl text-[#f9b707] text-center num' data-val="400">99</h1>
            <h1 className='text-xl text-white text-center uppercase font-Montserrat'>awards won</h1>
        </div>

        

        
    </div>


    {/* executive managers */}

    <div className="flex flex-col items-center justify-center my-20 gap-6 ">
        <div className="w-20  h-[2.5px] bg-[#f9b707]"></div>
        <h1 className='uppercase text-4xl  font-bold text-center'>executive managers</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 md:px-24  sm:-space-y-64 md:space-y-0 transition-all duration-1000">

            {/* josh */}
            <div className="flex flex-col  md:gap-4">
                <div className="w-full sm:h-[46%] overflow-hidden">
                    <img src="images/team-member-1.jpg" alt="member one" className='w-full h-full object-cover md:scale-100 scale-75'/>
                </div>
                <div className="flex flex-col items-center gap-3 ">
                    <h1 className='text-xl font-Montserrat uppercase'>CALVIN FITZGERALD</h1>
                    <h1 className='text-lg text-[#f9b707] capitalize font-Montserrat'>President</h1>
                    <h1 className='text-lg text-[#777575] first-letter:capitalize text-center line-clamp-5'>Calvin Fitzgerald is an established and well-respected expert in the construction industry. With more than 35 years of practical experience in the business, Calvin has built his career on bringing the most outlandish conceptual visions from blueprints to a street next to yours... His leadership skills cemented Construction's dominating positions</h1>
                </div>
            </div>



            {/* TAYLOR WILSON */}
            <div className="flex flex-col  md:gap-4">
                <div className="w-full sm:h-[46%] overflow-hidden">
                    <img src="images/team-member-2.jpg" alt="member two" className='w-full h-full object-cover md:scale-100 scale-75'/>
                </div>
                <div className="flex flex-col items-center gap-3 h-fit">
                    <h1 className='text-xl font-Montserrat uppercase'>TAYLOR WILSON</h1>
                    <h1 className='text-lg text-[#f9b707] capitalize font-Montserrat'>Chief Executive Officer</h1>
                    <h1 className='text-lg text-[#777575] first-letter:capitalize text-center line-clamp-5'>Taylor's been involved in the construction business since the 1970's... His profound experience in building miscellaneous types of projects and his innovative mindset makes him the leading force in our company. The BIM and Db methods that he implemented are now the lynchpins of our business operations with all of our team</h1>
                </div>
            </div>






            {/*  JOSH WAGNER */}
            <div className="flex flex-col  md:gap-4">
                <div className="w-full sm:h-[46%] overflow-hidden">
                    <img src="images/team-member-3.jpg" alt="member three" className='w-full h-full object-cover md:scale-100 scale-75'/>
                </div>
                <div className="flex flex-col items-center gap-3 ">
                    <h1 className='text-xl font-Montserrat uppercase'>JOSH WAGNER</h1>
                    <h1 className='text-lg text-[#f9b707] capitalize font-Montserrat'>Design Chief Officer
</h1>
                    <h1 className='text-lg text-[#777575] first-letter:capitalize text-center line-clamp-5'>Josh leads our creative team of designers and engineers...His proven ability to manage the most complex projects and bring the craziest concepts to life is what makes him as efficient as he is. Together, this creative team can be the launchpad of any project, giving it a head start at a new business idea and experience from expertise.
</h1>
                </div>
            </div>



            {/*  LUIS MAXWELL  */}
            <div className="flex flex-col  md:gap-4">
                <div className="w-full sm:h-[46%] overflow-hidden">
                    <img src="images/team-member-4.jpg" alt="member four" className='w-full h-full object-cover md:scale-100 scale-75'/>
                </div>
                <div className="flex flex-col items-center gap-3 h-fit">
                    <h1 className='text-xl font-Montserrat uppercase'>LUIS MAXWELL</h1>
                    <h1 className='text-lg text-[#f9b707] capitalize font-Montserrat'>Contractors Operations Head</h1>
                    <h1 className='text-lg text-[#777575] first-letter:capitalize text-center line-clamp-5'>While we do all the pre-construction planning and sketching, scheduling and managing on an in-house basis, we hire a lot of 3rd party contractors for the actual on-site work. Luis Maxwell is the person to manage all our contractors across all of our projects being currently in development.and a good team member.</h1>
                </div>
            </div>


            {/*  KEN FERGUSON  */}
            <div className="flex flex-col  md:gap-4">
                <div className="w-full sm:h-[46%] overflow-hidden">
                    <img src="images/team-member-5.jpg" alt="member five" className='w-full h-full object-cover md:scale-100 scale-75'/>
                </div>
                <div className="flex flex-col items-center gap-3 h-fit">
                    <h1 className='text-xl font-Montserrat uppercase'>KEN FERGUSON</h1>
                    <h1 className='text-lg text-[#f9b707] capitalize font-Montserrat'>Chief Financial Officer</h1>
                    <h1 className='text-lg text-[#777575] first-letter:capitalize text-center line-clamp-5'>Ken's been working as a chief financial analyst for Bechtel; Fluor Corp.; CB&I and Kiewit Corp. During those years he excelled in this field, efficiently cutting the side expenses that were bringing those top contractors down. Few years ago we managed to get him onboard, and not even a full.</h1>
                </div>
            </div>

            {/*  EDWARD ELLIOTT  */}
            <div className="flex flex-col  md:gap-4 ">
                <div className="w-full sm:h-[46%] overflow-hidden">
                    <img src="images/team-member-6.jpg" alt="member five" className='w-full h-full object-cover md:scale-100 scale-75'/>
                </div>
                <div className="flex flex-col items-center gap-3 h-fit">
                    <h1 className='text-xl font-Montserrat uppercase'>EDWARD ELLIOTT</h1>
                    <h1 className='text-lg text-[#f9b707] capitalize font-Montserrat'>Vice President of Operations</h1>
                    <h1 className='text-lg text-[#777575] first-letter:capitalize text-center line-clamp-5'>Previously Edward owned his own mid-sized contracting company. That kind of a first hand, entrepreneurial experience in managing all the processes and operations for a construction company got our attention. Last year we invited him to join our team, which he fortunately did...</h1>
                </div>
            </div>








        </div>
    </div>

    <section className='grid md:grid-cols-2 lg:grid-cols-4 grid-rows-2'>
        <Projects/>

    </section>

    <div className="grid sm:grid-cols-2 md:p-24 gap-4">
        <div className="space-y-5 ">
            <img src="images/about-9.jpg" alt="team meamber" className='mx-auto sm:mx-0' />
            <FaQuoteLeft className='text-xl text-[#f9b707]'/>
            <h1 className='text-[#989696] capitalize'>
            As an official fro North Dakota’s state government, I want to thank Our construction company. On behalf of the citizens of the state, we’re so grateful for this new, innovative building! This allows North Dakota to hold its legislative operations in a contemporary, progressive architectural environment!
            </h1>
            <h1 className='text-[#101010] capitalize'>deborah quagmire</h1>
        </div>
        <div className="space-y-5 ">
            <img src="images/about-10.jpg" alt="team meamber" className='mx-auto sm:mx-0' />
            <FaQuoteLeft className='text-xl text-[#f9b707]'/>
            <h1 className='text-[#989696] capitalize'>
            As an official fro North Dakota’s state government, I want to thank Our construction company. On behalf of the citizens of the state, we’re so grateful for this new, innovative building! This allows North Dakota to hold its legislative operations in a contemporary, progressive architectural environment!
            </h1>
            <h1 className='text-[#101010] capitalize'>deborah quagmire</h1>
        </div>
        
    </div>

   </section>
  )
}

export default About;
