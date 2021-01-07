import React from "react";
import CloseImg from "../images/svg/close.svg";

const Modal = ({ children, show, onClick }) => {
  return (
    <div
      className={`overflow-scroll z-20 bg-white xl:bg-black-4 w-screen h-screen flex md:items-center fixed top-0 left-0 ${!show && "hidden"}`}
    >
      <div className='modal-close xl:bg-white'>
        <div className="flex justify-end">
          <button
            className="focus:outline-none"
            onClick={() => onClick()}>
            <CloseImg className=" w-6 h-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
