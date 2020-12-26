import React from 'react'

import LogoHero from '../images/svg/logo-hero.svg'
import Background from '../images/svg/background-hero.svg'

const Hero = () => (
    <section className='hero bg-gr-red relative'>
        <div className='container relative pt-8 md:pt-24'>
            <LogoHero className='logo-white' />
            <div className='w-full sm:w-3/4 lg:w-1/2 xl:w-5/12 mb-4 md:mb-5 '>
                <h1 className='header text-white'>Warehouse &amp; Inventory Solutions Transforming Material Handling</h1>
            </div>
            <div className='w-full sm:w-5/6 md:w-3/4 lg:w-1/2 xl:w-5/12 mb-4 md:mb-5'>
                <p className='text-title text-white'>Providing true cloud WMS and WES. Cella Technologies supports Plex customer's warehouse and production facilities around the globe.</p>
            </div>
            <div className='pb-24'>
                <button className='btn btn-white'>Contact Us</button>
            </div>
            <div className='absolute herobg hidden md:flex justify-end'>
                <Background className='lg:opacity-100 md:max-w-heromd lg:max-w-herolg' />
            </div>
        </div>
    </section>
);

export default Hero;