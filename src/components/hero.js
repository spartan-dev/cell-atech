import React from 'react'

import LogoHero from '../images/svg/logo-hero.svg'
import Background from '../images/svg/background-hero.svg'

const Hero = () => (
	<section className='hero bg-gr-red'>
		<div className='container flex justify-between flex-col lg:flex-row'>
			<div className="pt-8 md:pt-24 w-full md:w-3/4 lg:w-1/2">
				<LogoHero className='logo-white' />
				<h1 className='header text-white'>Warehouse &amp; Inventory Solutions Transforming Material Handling</h1>
				<div className='my-4 md:my-5'>
					<p className='text-body text-white'>
						Providing true cloud WMS and WES. Cella Technologies <br className="hidden sm:block" />
					  supports Plex customers' warehouse and production <br className="hidden sm:block" />
					  facilities around the globe.
					</p>
				</div>
				<div className='pb-24'>
					<button className='btn btn-white'>Contact Us</button>
				</div>
			</div>
			<Background className='hero-image' />
		</div>
	</section >
);

export default Hero;