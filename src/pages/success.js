import React from "react";

import Sent from "../images/svg/sent.svg"

export default function Success() {
  return (
    <div
      className="h-screen w-screen flex flex-col items-center justify-center">
      <Sent />
      <p className="mt-6 subheader">
        Message sent.
        </p>
    </div>
  );
}
