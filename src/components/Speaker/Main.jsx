import React from "react";
import Date from "./Date";
import Speakers from "./Speakers";

const Main = () => {
  return (
    <div className="mt-14 grid grid-cols-1 lg:grid-cols-4 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 ">
      <Date />
      <Speakers />
    </div>
  );
};

export default Main;
