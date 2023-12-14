import React from "react";

const Header = () => {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2
        id="speakers-title"
        className=" font-heading text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
      >
        Speakers
      </h2>
      <p className="mt-4 font-heading text-2xl tracking-tight text-blue-900">
        Learn from the experts on the cutting-edge of deception at the most
        sinister companies.
      </p>
    </div>
  );
};

export default Header;
