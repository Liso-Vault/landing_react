import React from "react";

export const FeatureGrid = ({ data, refFeatures }) => {
  return (
    <div className="max-w-[1300px] lg:mx-auto pt-20" ref={refFeatures}>
      <h1 className="text-center text-4xl md:text-5xl font-bold txt-gradient-3 mb-10 md:mb-20">
        More Features
      </h1>

      <div className="flex flex-wrap gap-5 gap-y-10 justify-center">
        {data.map((e, i) => (
          <div className="text-white w-[300px] space-y-3" key={i}>
            {
              <e.image
                size={100}
                color="#02f297"
                className="mx-auto"
                variant="TwoTone"
              />
            }
            <h3 className="text-2xl font-medium text-center">{e.title}</h3>
            <p className="text-center text-gray-400">{e.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
