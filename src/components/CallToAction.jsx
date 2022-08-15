import React from "react";
import ReactGA from "react-ga";

export const CallToAction = ({ refDownload }) => {
  function scrollToDownloadSection(params) {
    refDownload.current.scrollIntoView({ behavior: "smooth", block: "center" });

    ReactGA.event({
      category: "Download",
      action: "Scroll to Download",
      label: "CTA Download Button",
    });
  }

  return (
    <div className="p-10 max-w-[800px] mx-8 md:mx-20 lg:mx-auto space-y-5 card text-center">
      <h1 className="text-center text-3xl font-bold txt-gradient-2">
        Ready to secure your data?
      </h1>
      <h3 className="text-center text-xl text-gray-200">
        Experience the next generation Password Manager and start securing your
        data now
      </h3>
      <button
        className="btn-elevated md:w-[250px]"
        onClick={scrollToDownloadSection}
      >
        Free Download
      </button>
    </div>
  );
};
