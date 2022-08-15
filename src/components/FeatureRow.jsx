import React from "react";
import { BsCheck2 } from "react-icons/bs";

export const FeatureRow = ({ data }) => {
  return (
    <div className="w-full text-white">
      {/* <div className="grid md:grid-cols-2 mx-auto max-w-[1300px] items-center"> */}
      <div className="flex flex-wrap mx-auto max-w-[1000px] items-center p-10 gap-y-10">
        <data.image
          size={200}
          color="#02f297"
          variant="Bulk"
          className={`mx-auto ${data.reversed || false ? "lg:order-last" : ""} md:h-[300px] md:w-[300px]`}
        />
        <div className="space-y-5 lg:text-left text-center w-[500px] mx-auto">
          <h2 className="text-3xl font-bold txt-gradient-2">{data.title}</h2>
          <p>{data.body}</p>
          {data.subFeatures.map((e, i) => (
            <SubFeatureRow data={e} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SubFeatureRow = ({ data }) => {
  return (
    <div className="flex gap-3 items-center text-left">
      <BsCheck2 color="#02f297" className="min-w-[30px] min-h-[30px]" />
      <div>
        <h3 className="text-[#02f297] text-lg">{data.title}</h3>
        <p className="text-gray-400 text-sm">{data.body}</p>
      </div>
    </div>
  );
};
