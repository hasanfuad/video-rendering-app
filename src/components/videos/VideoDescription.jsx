import React from "react";
import LikeUnlike from "../LikeUnlike/LikeUnlike";

const VideoDescription = ({ video }) => {
  const { title, description, date, likes, unlikes, id } = video;
  console.log(video);
  return (
    <>
      <div>
        <h1 className="text-lg font-semibold tracking-tight text-slate-800">
          {title}
        </h1>
        <div className="pb-4 flex items-center space-between border-b">
          <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
            Uploaded on {date}
          </h2>

          {/* <!-- like/unlike --> */}

          <div className="flex gap-10 w-48">
            <LikeUnlike likes={likes} unlikes={unlikes} id={id} />
          </div>
        </div>

        <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
          {description}
        </div>
      </div>
    </>
  );
};

export default VideoDescription;
