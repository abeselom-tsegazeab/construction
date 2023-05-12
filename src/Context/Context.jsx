import React, { Component } from 'react';
import { createContext } from 'react';
import { FaBuilding, FaHome, FaIgloo, FaPencilRuler, FaRulerCombined, FaUsers } from 'react-icons/fa';
import {BsFlag} from 'react-icons/bs';
import {BsSpeedometer2} from 'react-icons/bs';
import {SlTrophy} from 'react-icons/sl';
import {GiPalmTree} from 'react-icons/gi';
const Store = React.createContext();
const  ContextProvider = ({children})=>{
   const  state = {
        ourServices:[
            {icon:<FaHome   className="text-5xl text-white"/>,title:'BUILDING INFORMATION MODELING',description:'Oftentimes physical and functional essence of any construction project needs to be represented digitally, in a 3D model format. In...'},

            {icon:<FaIgloo   className="text-5xl text-white"/>,title:'CONSTRUCTION SERVICES',description:'Our customers love the pace/quality tempo that we show during each of the principal construction processes! We"re comfortable with any...'},

            {icon:<FaRulerCombined   className="text-5xl text-white"/>,title:'pre-construction services',description:'we take our time on initial planning before any construction begins, to balance all the financial benefits and efficiency of the issues beforehand.This...'},
            
            {icon:<FaPencilRuler   className="text-5xl text-white"/>,title:'DESIGN-BUILD',description:'If a project is not too complex, we may hire a designer-builder type of contractor, to make the longevity of..'},

            {icon:<FaBuilding   className="text-5xl text-white"/>,title:'CONSTRUCTION MANAGEMENT',description:'Construction project management is essential. We"re using the most time and iterations efficient life cycles for that.As you may know,...'},

            {icon:<FaUsers   className="text-5xl text-white"/>,title:'GENERAL CONTRACTING',description:'We have a long list of professional contractors, whom our engineers and architects enjoy to work with on a majority...'}
        ],
        projects:[
            {image:'images/commercial.jpg',title:'commercial',description:'It’s probably the most diverse category of construction to work in. But we’ve got experience…',introduction:'It’s probably the most diverse category of construction to work in. But we’ve got experience…'},
            {image:'images/cultural.jpg',title:'cultural / LIFESTYLE',description:'Working on a socially important building, such as a park involves additional landscape construction expertise.…',introduction:'Working on a socially important building, such as a park involves additional landscape construction expertise.'},
            {image:'images/data.jpg',title:'data / technology',description:'While building a head quarters building for an IT company is relatively easy, we’ve also…',introduction:'While building a head quarters building for an IT company is relatively easy, we’ve also…'},
            {image:'images/education.jpg',title:'education',description:'Educational institutions can be much more creative, than your regular school or a college campus!…',introduction:'Educational institutions can be much more creative, than your regular school or a college campus!…'},
            {image:'images/government.jpg',title:'government / military',description:'The US military and States governments used our expertise and manpower to build numerous military-grade,…',introduction:'The US military and States governments used our expertise and manpower to build numerous military-grade,…'},
            {image:'images/healthcare.jpg',title:'healthcare',description:'We can build any healthcare type of building. From a small private medical clinic to…',introduction:'We can build any healthcare type of building. From a small private medical clinic to…'},
            {image:'images/manufacturing.jpg',title:'manufacturing / industry',description:'Building a manufacturing facility or a factory house can be much more challenging, than building…',introduction:'Building a manufacturing facility or a factory house can be much more challenging, than building…'},
            {image:'images/logistics.jpg',title:'warehouse / logistics',description:'While building a warehouse for an e-store is no easy feat itself, think about building…',introduction:'While building a warehouse for an e-store is no easy feat itself, think about building…'}
        ],
        about:[    
            {image:<BsFlag className='text-5xl  text-white'/>,title:'core values',description:'Construction’s core values have been shaped over more than 10 years of delivering the finest construction services to our clients. They stood to the test of time and these principles remain our bedrock lynchpins. We never tried to cut on either quality, the pace of work or any other construction aspect. We stay true to our full promise of efficiency!'},

            {image:<BsSpeedometer2 className='text-5xl  text-white'/>,title:'PACE',description:'Our love for detailed, bullet-point preparations, as well as to open and clear project management and communication is what makes us faster than the competition. Recently we compared a technically similar 10-stories building that we built, and the other built by our main competitor. Their price and pace was 2 times lower than hours!'},

            {image:<SlTrophy className='text-5xl  text-white'/>,title:'QUALITY',description:'Quality is focal in every little aspect of the construction. The mindset of both our senior employees and all the way to our on-site contractors and construction workers centers on attention. It’s out attention to details that allows us to work on a multitude of projects simultaneously, while staying on schedule!'},

            {image:<GiPalmTree className='text-5xl  text-white'/>,title:'ENVIRONMENT FRIENDLINESS',description:'Besides valuing your time, your money and your vision for the project, we also value the Mother Nature as well…It cannot be denied anymore, that even the small construction implements the nature in a bad way… That’s why we’re leading the effort to use only eco-friendly materials and comply with keeping the environment unpollluted by the work we do!'}
        ]
        }

 
    return (
        <Store.Provider value={{
            ourServices:state.ourServices,
            projects:state.projects,
            about:state.about,
          
        }}>
            {children}
        </Store.Provider>
      )
}

const StoreConsumer = Store.Consumer;
export {StoreConsumer,ContextProvider};