import React from 'react'

const Ourteam = () => {
  return (
    <section>
        <div className="relative bg-[url('images/ourteam.jpg')] bg-cover bg-fixed h-[570px]">
        <div className="absolute  w-full  top-[30%] transform-y-[50%] text-center flex flex-col items-center gap-12">
            <div className="w-20  h-[2.5px] bg-[#f9b707]"></div>
            <h1 className='uppercase text-7xl text-white font-bold'>MEET THE TEAM. WHO WE ARE?</h1>
        </div>
        </div>




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

    </section>
  )
}

export default Ourteam