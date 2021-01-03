import React from 'react'

import CheckMark from '../images/svg/check-mark.svg'
import features_img from '../images/assets/features_img.png'

const list = [{
  bold: "Seamless Integration",
  normal: " to the Smart Manufacturing Platform"
}, {
  bold: "User-Configurable",
  normal: " to give everyone the right tool for the right job"
}, {
  bold: "Data and Analytics",
  normal: " for real-time insight into operations and data-driven decision making"
}, {
  bold: "Support for TLS 1.2",
  normal: " devices to get more out of your hardware investment."
}]

const Features = () => (
  <section className="container flex justify-between flex-col lg:flex-row">
    <div className="mb-2 md:mb-8 lg:mb-0 lg:w-2/5 xl:w-1/2 lg:mt-8 xl:my-16 2xl:mb-0 relative">
      <h2 className="subheader text-black-1 text-center lg:text-left mb-6 lg:mb-2">
        Product Features
      </h2>
      <ul>
        {list.map((item, i) => (
          <li className="flex my-4 sm:my-8">
            <span><CheckMark /></span>
            <p className="text-small text-black-2 ml-4">
              <span className="font-semibold">{item.bold}</span>{item.normal}
            </p>
          </li>
        ))}
      </ul>
    </div>
    <img src={features_img} className="image" />
  </section>
);

export default Features;