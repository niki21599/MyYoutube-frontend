import React from "react";
import "./Startpage.css";
import VideoDetailCard from "../VideoDetailCard/VideoDetailCard";
import Categorybar from "../Categorybar/Categorybar";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import youtube from "../../api/youtube";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function Startpage(props) {
  let [videos, setVideos] = React.useState([
    {
      id: { videoId: "fnTau3KBAXE" },
      snippet: {
        title: "",
        description: " ",
        thumbnails: { medium: { url: "" } },
      },
    },
  ]);

  let [loading, setLoading] = React.useState(false);
  let [error, setError] = React.useState("");

  let MUSIC_ID = 10;
  let GAMING_ID = 20;
  let COMEDY_ID = 23;
  let SPORTS_ID = 17;
  let FILM_ID = 1;
  let NEWS_ID = 25;
  let ENTERTAINMENT_ID = 24;

  let searchByCategory = (cat) => {
    setLoading(true);
    youtube
      .get("/search", {
        params: {
          videoCategoryId: cat,
          type: "video",
        },
      })
      .then((results) => {
        console.log(results.data.items[0]);
        setVideos(results.data.items);
        setLoading(false);
      })
      .catch((e) => {
        let message = "";
        if (e.code == "ERR_NETWORK") {
          message =
            "Network Error. Check your Internet Connection and try again.";
        } else if (e.code === "ERR_BAD_REQUEST") {
          message =
            "Oops. The maximum number of request to the youtube API has been exceeded. ";
        } else {
          message = e.message;
        }
        setError(message);
        setLoading(false);
      });
  };

  useEffect(() => {
    searchByCategory(ENTERTAINMENT_ID);
  }, []);

  return (
    <div>
      <div className="margin-top">
        <Categorybar searchByCategory={searchByCategory} />
        {!loading ? (
          <div>
            {error ? (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
              </Alert>
            ) : (
              <div className="grid">
                {videos.map((video) => (
                  <VideoDetailCard key={video.snippet.title} video={video} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="spinner">
            <CircularProgress color="success" />
          </div>
        )}
      </div>
    </div>
  );
}
