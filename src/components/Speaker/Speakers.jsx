import React from "react";
import OpeningDay from "./OpeningDay";
import WorkShop from "./WorkShop";
import Interview from "./Interview";

const Speakers = () => {
  return (
    <div className=" lg:col-span-3">
      <OpeningDay />
      <WorkShop />
      <Interview />
    </div>
  );
};

export default Speakers;
