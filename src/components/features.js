import React from "react";
import Image from "./Image";
import CheckMark from "../images/svg/check-mark.svg";
const list = [
  {
    bold: "Seamless Integration",
    normal: " to the Smart Manufacturing Platform",
  },
  {
    bold: "User-Configurable",
    normal: " to give everyone the right tool for the right job",
  },
  {
    bold: "Data and Analytics",
    normal: (
      <>
        for real-time insight into operations and data-driven{" "}
        <br className="hidden sm:block lg:hidden" /> decision making
      </>
    ),
  },
  {
    bold: "Support for TLS 1.2",
    normal: " devices to get more out of your hardware investment",
  },
];

const Features = () => (
  <section className=" bg-white relative z-50 container flex justify-between flex-col lg:flex-row mt-16">
    <div className="mb-2 md:mb-8 lg:mb-0 lg:w-2/5 xl:w-1/2 lg:mt-8 xl:pr-4 xl:my-16 2xl:mb-0 relative">
      <p className="subheader text-black-1 text-center lg:text-left mb-6 lg:mb-2">
        Product Features
      </p>
      <ul>
        {list.map((item, i) => (
          <li className="flex my-4 sm:my-8">
            <span>
              <CheckMark />
            </span>
            <p className="text-small text-black-2 ml-4">
              <h2 className="font-semibold inline-block">{item.bold}</h2>
              {item.normal}
            </p>
          </li>
        ))}
      </ul>
    </div>
    <Image
      className="image shadow-img"
      filename="features_img.png"
      alt="Cella Technologies"
      title="Cella Technologies"
    />
  </section>
);

export default Features;
