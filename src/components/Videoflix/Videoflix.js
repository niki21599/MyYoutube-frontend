import React from "react";
import "./Videoflix.css";
import Navbar from "../Navbar/Navbar";
import Startpage from "../Startpage/Startpage";
import Searchpage from "../Searchpage/Searchpage";
import Settings from "../Settings/Settings";
import VideoDetail from "../VideoDetail/VideoDetail";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { Route, Routes, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Impressum from "../Impressum/Impressum";
import Datenschutz from "../Datenschutz/Datenschutz";

export default function Videoflix() {
  let [videos, setVideos] = React.useState([]);
  const navigate = useNavigate();

  let search = (term) => {
    //history.push("/search/d");
    // Route = /search/{term}
    navigate("/search/" + term);
  };

  return (
    <div>
      <Navbar search={search} />
      <Routes>
        <Route path="/login" element={<Login loggedIn={false} />}></Route>
        <Route path="/register" element={<Register loggedIn={false} />}></Route>
        <Route path="/" element={<Startpage loggedIn={true} />}></Route>
        <Route
          path="/search/:searchTerm"
          element={<Searchpage loggedIn={true} />}
        ></Route>
        <Route path="/settings" element={<Settings loggedIn={true} />}></Route>
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
