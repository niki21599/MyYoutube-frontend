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
    navigate("/videoflix_frontend/search/" + term);
  };

  return (
    <div>
      <Navbar search={search} />
      <Routes>
        <Route
          path="/videoflix_frontend"
          element={<Startpage loggedIn={true} />}
        ></Route>
        <Route
          path="/videoflix_frontend/search/:searchTerm"
          element={<Searchpage loggedIn={true} />}
        ></Route>
        <Route
          path="/videoflix_frontend/video/:videoId"
          forceRefresh={true}
          element={<VideoDetail loggedIn={true} />}
        ></Route>
        <Route
          path="/videoflix_frontend/impressum"
          element={<Impressum />}
        ></Route>
        <Route
          path="/videoflix_frontend/datenschutz"
          element={<Datenschutz />}
        ></Route>
      </Routes>
    </div>
  );
}
