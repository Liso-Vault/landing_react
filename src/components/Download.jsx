import React from "react";

import { Apple, GooglePlay, Windows } from "iconsax-react";

export const Download = ({ refDownload }) => {
  return (
    <div
      className="p-10 max-w-[1000px] mx-8 md:mx-20 lg:mx-auto space-y-5 card"
      ref={refDownload}
    >
      <h1 className="text-center text-3xl font-bold txt-gradient-2">
        Download Now
      </h1>
      <h3 className="text-center text-xl text-gray-300">
        No credit card / sign up required to get started. Get it now for free.
      </h3>
      <div className="flex flex-wrap text-white gap-5 items-center">
        <a
          href="https://apps.apple.com/us/app/liso-password-manager/id1621225567"
          className="btn-elevated flex justify-center w-[250px]"
          target="_blank"
          rel="noreferrer"
        >
          <Apple variant="Bold" className="mr-2" /> iPhone / iPad / Mac
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.liso.app"
          className="btn-elevated flex justify-center w-[250px]"
          target="_blank"
          rel="noreferrer"
        >
          <GooglePlay variant="Bold" className="mr-2" /> Android
        </a>
        <a
          href="https://github.com/Liso-Vault/app/releases/download/0.6.0%2B33/Liso_v0.6.0+33-Windows.exe"
          className="btn-elevated flex justify-center w-[250px]"
          target="_blank"
          rel="noreferrer"
        >
          <Windows variant="Bold" className="mr-2" /> Windows
        </a>
      </div>
    </div>
  );
};
