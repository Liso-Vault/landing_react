import React from "react";

export const Footer = () => {
  return (
    <div className="text-gray-400 text-center p-10 text-sm">
      <div className="flex justify-center p-10 flex-wrap gap-5">
        <LinkNewTab
          data={{
            url: "https://github.com/Liso-Vault/app",
            label: "GitHub",
          }}
        />
        <LinkNewTab
          data={{
            url: "https://discord.com/invite/d4EehG5qr3",
            label: "Discord",
          }}
        />
        <LinkNewTab
          data={{
            url: "https://github.com/Liso-Vault/app/blob/master/CHANGELOG.md",
            label: "Changelog",
          }}
        />
        <LinkNewTab
          data={{
            url: "https://github.com/Liso-Vault/app/blob/master/ROADMAP.md",
            label: "Roadmap",
          }}
        />
        <LinkNewTab
          data={{
            url: "https://github.com/Liso-Vault/app/blob/master/SECURITY.md",
            label: "Security",
          }}
        />
        <a
          href="mailto:dev@liso.dev"
          className="text-white hover:text-green-200 hover:underline text-sm"
        >
          Contact
        </a>
        <LinkNewTab
          data={{
            url: "https://github.com/Liso-Vault/app/blob/master/TERMS.md",
            label: "Terms of Use",
          }}
        />
        <LinkNewTab
          data={{
            url: "https://github.com/Liso-Vault/app/blob/master/PRIVACY.md",
            label: "Privacy Policy",
          }}
        />
      </div>
      <p className="mx-auto">All rights reserved © 2022</p>
      <p className="mx-auto">
        Created by
        <LinkNewTab
          data={{
            url: "https://twitter.com/oliverbytes",
            label: " Oliver Martinez",
            color: "text-[#02f297]",
          }}
        />
      </p>
    </div>
  );
};

export const LinkNewTab = ({ data }) => {
  return (
    <a
      href={data.url}
      className={`${
        data.color || "text-white"
      } hover:underline hover:text-green-200 text-sm`}
      target="_blank"
      rel="noreferrer"
    >
      {data.label}
    </a>
  );
};
