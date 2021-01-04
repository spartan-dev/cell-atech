import React from "react";
import people from "../images/assets/people.png";
const PersonCard = ({ className }) => {
  return (
    <div
      className={`people-card-container flex flex-col ${className}`}
    >
      <div className="dialog rounded-lg px-2 pt-3 py-5 mb-8">
        <p className="text-black-4  text-small font-normal">
          Since we began using lorem ipsum a quote can go here to illustrate how
          the product is helpful to their company, preferably no more than 4
          lines of text.
        </p>
      </div>
      <div className="flex flex-row items-center">
        <img className="rounded-full w-20 h-20" src={people} alt="people" title="people" />
        <div className="pl-5">
          <p className="text-name mb-1">Janice Hernandez, CEO</p>
          <p className="text-company">Brighton Manufacturing</p>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
