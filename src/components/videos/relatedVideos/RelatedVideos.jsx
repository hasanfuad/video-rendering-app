import React from "react";
import SingleVideo from "./SingleVideo";

const RelatedVideos = () => {
  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {/* <!-- single related video --> */}
        <SingleVideo />
      </div>
    </>
  );
};

export default RelatedVideos;
