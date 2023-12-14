import React from "react";

const Date = () => {
  return (
    <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
      <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block"></div>
      <div
        className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left"
        role="tablist"
        aria-orientation="vertical"
      >
        <div className="relative lg:pl-8">
          <svg
            aria-hidden="true"
            viewBox="0 0 6 6"
            className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-blue-600 stroke-blue-600"
          >
            <path
              d="M3 0L6 3L3 6L0 3Z"
              stroke-width="2"
              stroke-linejoin="round"
            ></path>
          </svg>
          <div className="relative">
            <div className="font-mono text-sm font-bold text-blue-600">
              <button className="" type="button">
                <span className="absolute inset-0 "></span>
                Opening Day
              </button>
            </div>
            <time
              datetime="2022-04-04"
              className="mt-1.5 block text-2xl font-bold tracking-tight text-blue-900"
            >
              April 4
            </time>
          </div>
        </div>
        <div className="relative lg:pl-8">
          <svg
            aria-hidden="true"
            viewBox="0 0 6 6"
            className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-transparent stroke-slate-400"
          >
            <path
              d="M3 0L6 3L3 6L0 3Z"
              stroke-width="2"
              stroke-linejoin="round"
            ></path>
          </svg>
          <div className="relative">
            <div className=" font-sans text-sm font-bold text-slate-500">
              <button className="ui-not-focus-visible:outline-none">
                <span className="absolute inset-0 "></span>Speakers &amp;
                Workshops
              </button>
            </div>
            <time
              datetime="2022-04-05"
              className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
            >
              April 5
            </time>
          </div>
        </div>
        <div className="relative lg:pl-8">
          <svg
            aria-hidden="true"
            viewBox="0 0 6 6"
            className="absolute left-[-0.5px] top-[0.5625rem] hidden h-1.5 w-1.5 overflow-visible lg:block fill-transparent stroke-slate-400"
          >
            <path
              d="M3 0L6 3L3 6L0 3Z"
              stroke-width="2"
              stroke-linejoin="round"
            ></path>
          </svg>
          <div className="relative">
            <div className=" font-sans text-sm font-bold  text-slate-500">
              <button className="ui-not-focus-visible:outline-none">
                <span className="absolute inset-0 "></span>Interviews
              </button>
            </div>
            <time
              datetime="2022-04-06"
              className="mt-1.5 block text-2xl font-semibold tracking-tight text-blue-900"
            >
              April 6
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Date;
