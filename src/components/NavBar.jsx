import React from "react";
import ReactGA from "react-ga";
import Logo from "../assets/logo.png";

export const NavBar = ({ refDownload }) => {
  function scrollToDownloadSection(params) {
    refDownload.current.scrollIntoView({ behavior: "smooth", block: "center" });

    ReactGA.event({
      category: "Download",
      action: "Scroll to Download",
      label: "Download Button",
    });
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1300px] mx-auto px-10">
      <img src={Logo} alt="Liso Password Manager" className="h-10 pr-3"></img>
      <h1 className="w-full text-2xl font-bold text-white">Liso</h1>
      <button
        className="btn-elevated w-[350px] md:w-[220px]"
        onClick={scrollToDownloadSection}
      >
        Free Download
      </button>
    </div>
  );
};
