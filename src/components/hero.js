import React from 'react'

import Logo from '../assets/logo-hero.png'
import Background from '../assets/background-hero.png'

const Hero = () => (
    <section className='hero bg-gr-red w-full relative'>
        <div className='container absolute ml-5 mt-8 sm:ml-8 md:ml-12 xl:ml-14 md:mt-24'>
            <img className='logo-white'src={Logo} alt='Cell-atech'></img>
            <div className='w-full sm:w-3/4 lg:w-1/2 xl:w-5/12 mb-4 md:mb-5 '>
                <h1 className='header text-white'>Warehouse &amp; Inventory Solutions Transforming Material Handling</h1>
            </div>
            <div className='w-full sm:w-5/6 md:w-3/4 lg:w-1/2 xl:w-5/12 mb-4 md:mb-5'>
                <p className='text-title text-white'>Providing true cloud WMS and WES. Cella Technologies supports Plex customer's warehouse and production facilities around the globe.</p>
            </div>
            <div>
                <button className='btn btn-white'>Contact Us</button>
            </div>
        </div>
        <div className='hidden md:flex justify-end'>
            <img className='md:opacity-25 lg:opacity-100 md:max-w-heromd lg:max-w-herolg' src={Background} alt='background'></img>
        </div>
    </section>
);

export default Hero;