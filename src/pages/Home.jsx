import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";
import VideoGrids from "../components/videoGrids/VideoGrids";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Tags/>
      <VideoGrids />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Home;
