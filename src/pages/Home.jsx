import React from "react";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";
import VideoGrids from "../components/videoGrids/VideoGrids";

const Home = () => {
  return (
    <div>
      <Tags/>
      <VideoGrids />
      <Pagination />
    </div>
  );
};

export default Home;
