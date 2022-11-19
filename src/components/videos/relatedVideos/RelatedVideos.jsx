import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../../features/relatedVideos/relatedVideosSlice";
import SingleVideo from "./SingleVideo";

const RelatedVideos = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
  }, [dispatch, currentVideoId, tags]);

  // decide what to render
  let content;

  if (isLoading) content = <div>Loading..</div>;

  if (!isLoading && isError) content = <div>{error}</div>;

  if (!isLoading && !isError && relatedVideos?.length === 0)
    content = <div>No related videos available</div>;

  if (!isLoading && !isError && relatedVideos?.length > 0)
    content = relatedVideos.map((relatedVideoItem) => (
      <SingleVideo relatedVideoItem={relatedVideoItem} />
    ));

  return (
    <>
      <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
        {/* <!-- single related video --> */}
        {content}
      </div>
    </>
  );
};

export default RelatedVideos;
