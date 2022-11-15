import React from "react";
import like from "../../assets/like.svg";
import unlike from "../../assets/unlike.svg";

const LikeUnlike = () => {
  return (
    <>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={like} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={unlike} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
    </>
  );
};

export default LikeUnlike;
