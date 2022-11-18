import React from "react";

const Player = ({ currentVideoLink, title }) => {
 
  return (
    <>
      <iframe
        width="100%"
        className="aspect-video"
        src={currentVideoLink}
        title={title}
        frameBorder=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default Player;
