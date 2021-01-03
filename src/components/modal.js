import React from "react";
import CloseImg from "../images/svg/close.svg";

const Modal = ({ children, show, onClick }) => {
  return (
    <div
      className={`z-20 bg-white w-screen h-screen sm:h-auto md:h-screen flex sm:items-center fixed top-0 left-0 ${!show && "hidden"}`}
    >
      <div
        className='modal-close overflow-y-scroll'
      >
        <div className="flex justify-end">
          <button onClick={() => onClick()}>
            <CloseImg className=" w-6 h-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
