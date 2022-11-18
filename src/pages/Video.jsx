import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Player from "../components/videos/Player";
import RelatedVideos from "../components/videos/relatedVideos/RelatedVideos";
import VideoDescription from "../components/videos/VideoDescription";
import { fetchVideo } from "../features/video/videoSlice";

const Video = () => {
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  const { title, link, description } = video;
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);
  return (
    <>
      <Navbar />
      <div>
        {video?.id ? (
          <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
              <div className="grid grid-cols-3 gap-2 lg:gap-8">
                <div className="col-span-full w-full space-y-8 lg:col-span-2">
                  <Player currentVideoLink={link} title={title} />
                  <VideoDescription video={video} />
                </div>
                <RelatedVideos relatedVideo={video} />
              </div>
            </div>
          </section>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default Video;
