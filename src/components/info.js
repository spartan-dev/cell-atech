import React from 'react'

import Arrow from '../images/svg/arrow.svg'
import Graphic from '../images/svg/graph.svg'
import Person from '../images/svg/people.svg'
import Phone from '../images/svg/phone.svg'

const Card = ({ className, Img, title, description }) => (
	<div className={`card flex flex-col sm:flex-row lg:flex-col xl:flex-row xl:justify-between sm:justify-between items-center lg:justify-center mb-6 md:mb-8 ${className}`}>
		<div className="mb-4 sm:mb-0 lg:mb-4 xl:mb-0">
			<Img className="icon" />
		</div>
		<div className='icon-text text-center sm:text-left lg:text-center xl:text-left'>
			<h2 className='text-title text-black-2 mb-2'>{title}</h2>
			<h3 className='text-small text-black-4'>{description}</h3>
		</div>
	</div>
)

const InfoSection = () => (
	<section className='bg-white relative z-50 container'>
		<div className='text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-12 lg:items-center lg:flex lg:flex-col'>
			<p className='subheader mb-5 xl:mb-2 text-black-1'>How We Can Help</p>
			<p className='text-body text-black-3 lg:w-3/4'>
				Whether your business has a complex network of distribution <br className="hidden lg:block xl:hidden"/> centers
				or just needs to get parts to the line fast, Cella Technologies <br className="hidden lg:block xl:hidden"/> has
				the solution to empower your material handling team.
				</p>
		</div>
		
		<div className='flex flex-wrap items-center container justify-center xl:justify-between'>
			<div data-aos="fade-up" className='flex flex-wrap items-center container justify-center xl:justify-between' >
				<Card Img={Arrow} title="Directed Put-Away"
					description="Maximize your space utilization, and drive inventory accuracy and efficiency throughout the material handling process." />
				<Card Img={Graphic} title="Directed Picking" className="lg:ml-8 xl:ml-0"
					description="Demand-driven picklists from production schedules, customer shipments, or min/max inventory levels. Equip your material handlers with this efficient tool." />
			</div>
			<div data-aos="fade-up" className='flex flex-wrap items-center container justify-center xl:justify-between'>
				<Card Img={Phone} title="Mobile WMS Platform" className="lg:mb-0"
					description={<>The power of the cloud in the hands of <br className="sm:hidden"/> your material handlers. Shop Mobile <br className="sm:hidden md:hidden lg:block xl:hidden"/> drives speed and accuracy for all of <br className="sm:hidden md:hidden lg:block xl:hidden"/> Cella's WMS tools.</>} />
				<Card Img={Person} title="Associate Utilization" className="lg:mb-0 lg:ml-8 xl:ml-0"
					description="Your ability to get the most out of your team is more important than ever. Leverage tools to make their work easier while increasing their output." />
			</div>
		</div>
	</section>
)

export default InfoSection;