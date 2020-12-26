import React from 'react'
import Logo from '../images/svg/logo-footer.svg'

const Footer = () => (
    <section className='container pt-12 pb-6 sm:flex sm:justify-between sm:text-right md:flex-col md:items-center lg:flex-row lg: justify-between'>
        <div className='mb-6 md:mb-9'>
            <Logo className='logo-color' />
        </div>
        <div className='text-black-4 text-footer flex flex-col md:flex-row md:justify-between md:w-full lg:w-2/3 lg:justify-around'>
            <a className='mb-3' href="tel:(248) 783-6065">(248) 783-6065</a>
            <a className='mb-3' href="mailto:info@cella-tech.com">info@cella-tech.com</a>
            <p className='mb-3'> 150 Elizabeth St., Rochester, MI 48307</p>
        </div>
    </section>
)

export default Footer