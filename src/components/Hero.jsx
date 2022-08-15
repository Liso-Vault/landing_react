import React from "react";
import ReactGA from "react-ga";

export const Hero = ({ refDownload, refFeatures }) => {
  function scrollToDownloadSection(params) {
    refDownload.current.scrollIntoView({ behavior: "smooth", block: "center" });

    ReactGA.event({
      category: "Download",
      action: "Scroll to Download",
      label: "Get Started Button",
    });
  }

  function scrollToFeaturesSection(params) {
    refFeatures.current.scrollIntoView({ behavior: "smooth" });

    ReactGA.event({
      category: "Features",
      action: "Scroll to Features",
      label: "Features Button",
    });
  }

  return (
    <div className="text-white">
      <div className="max-w-[1000px] w-full md:mt-[100px] mt-[40px] mx-auto text-center flex flex-col px-10 space-y-5">
        <h1 className="txt-gradient md:text-7xl sm:text-5xl text-4xl font-bold ">
          The secure way to save your passwords and files
        </h1>
        <p className="text-gray-300 md:text-2xl">
          Liso is not just a Password Manager. But also lets you store and
          manage a wide array of digital records like Passports, Social Security
          Numbers, Bank Accounts, Credit Cards, Medical Records, Wi-Fi
          Passwords, and more.
        </p>
        <div className="flex gap-2 md:gap-5 flex-wrap mx-auto">
          <button className="btn-elevated" onClick={scrollToDownloadSection}>
            Get Started
          </button>
          <button className="btn-outlined" onClick={scrollToFeaturesSection}>
            Features
          </button>
        </div>
      </div>
    </div>
  );
};
