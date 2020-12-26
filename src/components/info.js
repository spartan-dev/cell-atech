import React from 'react'

import Arrow from '../assets/arrow.png'
import Graphic from '../assets/graphic.png'
import Person from '../assets/person.png'
import Phone from '../assets/phone.png'

const InfoSection = () => (

    <section className='pt-8 container'>
        <div className='text-center my-8 sm:mt-12 sm:mb-11 md:mt-24 md:mb-16 lg:items-center lg:flex lg:flex-col'>
            <h2 className='subheader mb-5 text-black-1'>How can we Help</h2>
            <p className='text-body text-black-3 lg:w-3/5'>Whether your business has a complex network of distribution centers or just needs to get parts to the line fast, Cella Technologies has the 
        solution to empower your material handling team.</p>
        </div>
        <div className='flex flex-wrap items-center container justify-around'>
            <div className='card flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:justify-between sm:justify-between items-center lg:justify-center mb-6 md:mb-8'>
                <div className='mb-4 sm:mb-0 lg:mb-4 xl:mb-0'>
                    <img className='icon' src={Arrow} alt='arrow'/>
                </div>
                <div className='icon-text text-center sm:text-left lg:text-center xl:text-left'>
                    <h3 className='text-title text-black-2 mb-2'>Directed Put-Away</h3>
                    <p className='text-small text-black-4'>Maximize your space utilization, and 
                    drive inventory accuracy and efficiency throughout the material handling 
                    process other line.</p>
                </div>
            </div>
            <div className='card flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:justify-between sm:justify-between items-center lg:justify-center mb-6 md:mb-8'>
                <div className='mb-4 sm:mb-0 lg:mb-4 xl:mb-0'>
                    <img className='icon'  src={Graphic} alt='graphic'/>
                </div>
                <div className='icon-text text-center sm:text-left lg:text-center xl:text-left'>
                    <h3 className='text-title text-black-2 mb-2'>Directed Put-Away</h3>
                    <p className='text-small text-black-4'>Demand-driven picklists from production schedules, customer shipments, or min/max inventory levels. Equip your material handlers with this efficient tool.</p>
                </div>
            </div>
            <div className='card flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:justify-between items-center sm:justify-between lg:justify-center mb-6 md:mb-8 xl:mb-0'>
                <div className='mb-4 sm:mb-0 sm:w-20 flex justify-center lg:mb-4 xl:mb-0'>
                    <img className='icon' src={Phone} alt='phone'/>
                </div>
                <div className='icon-text text-center sm:text-left lg:text-center xl:text-left'>
                    <h3 className='text-title text-black-2 mb-2'>Mobile WMS Platform</h3>
                    <p className='text-small text-black-4'>The power of the cloud in the hands of 
                        your material handlers. Shop Mobile 
                        drives speed and accuracy for all of 
                        Cella’s WMS tools.</p>
                </div>
            </div>
            <div className='card flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:justify-between items-center sm:justify-between lg:justify-center mb-6 md:mb-8 xl:mb-0'>
                <div className='mb-4 sm:mb-0 lg:mb-4 xl:mb-0'>
                    <img className='icon' src={Person} alt='person'/>
                </div>
                <div className='icon-text text-center sm:text-left lg:text-center xl:text-left'>
                    <h3 className='text-title text-black-2 mb-2'>Associate Utilization</h3>
                    <p className='text-small text-black-4'>Your ability to get the most out of your team is more important than ever. Leverage tools to make their work easier while increasing their output.</p>
                </div>
            </div>
        </div>
    </section>
 
)

export default InfoSection;