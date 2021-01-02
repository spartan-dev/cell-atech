import React from "react";
import people from "../images/assets/people.png";
const PersonCard = ({ className }) => {
  return (
    <div
      className={`people-card-container  flex justify-center items-center flex-row flex-wrap ${className} xl:mx-16 `}
    >
      <div className="dialog rounded-lg px-2 pt-3 py-5 mb-4">
        <p className="text-black-4  text-small font-normal">
          Since we began using lorem ipsum a quote can go here to illustrate how
          the product is helpful to their company, preferably no more than 4
          lines of text.
        </p>
      </div>
      <div className=" w-full flex flex-row justify-between items-center">
        <div className="w-4/12 rounded-full">
          <img className="w-20 h-20" src={people} alt="persona ceo" />
        </div>
        <div className="w-8/12 text-center pr-8 sm:pr-12 md:pr-4 xl:pr-0">
          <h2 className="text-name mb-1">Janice Hernandez, CEO</h2>
          <h2 className="text-company">Brighton Manufacturing</h2>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
