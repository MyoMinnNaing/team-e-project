import React from "react";
import Header from "./Header";
import Main from "./Main";

const SpeakerSection = () => {
  return (
    <section className=" py-20 sm:py-32">
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
        <Main />
      </div>
    </section>
  );
};

export default SpeakerSection;
