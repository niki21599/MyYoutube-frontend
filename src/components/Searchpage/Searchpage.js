import React from "react";
import "./Searchpage.css";
import SearchDetailCard from "../SearchDetailCard/SearchDetailCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import youtube from "../../api/youtube";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function Searchpage(props) {
  let { searchTerm } = useParams();
  let [loading, setLoading] = React.useState(false);
  let [error, setError] = React.useState("");

  let [videos, setVideos] = React.useState([]);

  let searchVideos = () => {
    setLoading(true);
    youtube
      .get("/search", {
        params: {
          q: searchTerm,
        },
      })
      .then((results) => {
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
    searchVideos();
  }, [searchTerm]);

  return (
    <div className="display-center">
      <h2 className="heading-top-search">
        {" "}
        {`Deine Suchergebnisse zu "${searchTerm}"`}
      </h2>
      {!loading ? (
        error ? (
          <div className="margin-top-search">
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          </div>
        ) : (
          <div className="margin-top-search display-center">
            {videos.map((video) => {
              return (
                <SearchDetailCard key={video.snippet.title} video={video} />
              );
            })}
          </div>
        )
      ) : (
        <div className="spinner">
          <CircularProgress color="success" />
        </div>
      )}
    </div>
  );
}
