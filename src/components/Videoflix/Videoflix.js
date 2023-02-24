import React from "react";
import "./Videoflix.css";
import Navbar from "../Navbar/Navbar";
import Startpage from "../Startpage/Startpage";
import Searchpage from "../Searchpage/Searchpage";
import VideoDetail from "../VideoDetail/VideoDetail";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Impressum from "../Impressum/Impressum";
import Datenschutz from "../Datenschutz/Datenschutz";

export default function Videoflix() {
  let [videos, setVideos] = React.useState([]);
  const navigate = useNavigate();

  let search = (term) => {
    navigate("/search/" + term);
  };

  return (
    <div>
      <Navbar search={search} />
      <Routes>
        <Route path="/" element={<Startpage loggedIn={true} />}></Route>
        <Route
          path="/search/:searchTerm"
          element={<Searchpage loggedIn={true} />}
        ></Route>
        <Route
          path="/video/:videoId"
          forceRefresh={true}
          element={<VideoDetail loggedIn={true} />}
        ></Route>
        <Route path="/impressum" element={<Impressum />}></Route>
        <Route path="/datenschutz" element={<Datenschutz />}></Route>
      </Routes>
    </div>
  );
}
