import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Player from "../components/videos/Player";
import RelatedVideos from "../components/videos/relatedVideos/RelatedVideos";
import VideoDescription from "../components/videos/VideoDescription";

const Video = () => {
  return (
    <>
      <Navbar />
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              <Player />
              <VideoDescription />
            </div>
            <RelatedVideos />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Video;
