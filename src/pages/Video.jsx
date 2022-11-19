import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Player from "../components/videos/Player";
import RelatedVideos from "../components/videos/relatedVideos/RelatedVideos";
import VideoDescription from "../components/videos/VideoDescription";
import { fetchVideo } from "../features/video/videoSlice";

const Video = () => {
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  const { title, link, description, tags } = video || {};
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  // decide what to render
  let content;

  if (isLoading) content = <div>Loading....</div>;

  if (!isLoading && isError) content = <div>{error}</div>;

  if (!isLoading && !isError && !video?.id) content = <div>No video found</div>;

  if (!isLoading && !isError && video?.id)
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player currentVideoLink={link} title={title} />
          <VideoDescription video={video} />
        </div>
        <RelatedVideos currentVideoId={videoId} tags={tags} />
      </div>
    );
  return (
    <>
        <section className="pt-6 pb-20">
          <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
            {content}
          </div>
        </section>
    </>
  );
};

export default Video;
