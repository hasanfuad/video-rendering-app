import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Pagination from "../components/ui/Pagination";
import VideoGrids from "../components/videoGrids/VideoGrids";

const Home = () => {
  return (
    <div>
      <Navbar />
      <VideoGrids />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Home;
