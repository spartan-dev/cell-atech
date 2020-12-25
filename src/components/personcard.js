import React from "react";
import people from "../assets/people.png";
const PersonCard = () => {
  return (
    <div className="container my-12">
      <div className="dialog rounded-lg px-2 pt-3 py-5 mb-8">
        <p className="text-black-4  text-small">
          Since we began using lorem ipsum a quote can go here to illustrate how
          the product is helpful to their company, preferably no more than 4
          lines of text.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className=" mr-8 rounded-full">
          <img className="" src={people} alt="persona ceo" />
        </div>
        <div className="w-9/12">
          <h2 className="text-body mb-1">Janice Hernandez, CEO</h2>
          <h2 className="text-company">Brighton Manufacturing</h2>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
