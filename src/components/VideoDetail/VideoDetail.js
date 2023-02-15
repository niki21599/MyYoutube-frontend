import React, { useEffect } from "react";
import "./VideoDetail.css";
import VideoPlayCard from "../VideoPlayCard/VideoPlayCard";
import SearchDetailCard from "../SearchDetailCard/SearchDetailCard";
import { Navigate, useParams } from "react-router-dom";
import youtube from "../../api/youtube";
import { CircularProgress } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function VideoDetail(props) {
  let { videoId } = useParams();
  let [loadingVideo, setLoadingVideo] = React.useState(false);
  let [loadingVideos, setLoadingVideos] = React.useState(false);
  let [errorVideo, setErrorVideo] = React.useState("");
  let [errorVideos, setErrorVideos] = React.useState("");

  let [video, setVideo] = React.useState({
    id: { videoId: "fnTau3KBAXE" },
    snippet: {
      title: "",
      channelTitle: "fjdskl",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint in impedit reprehenderit ducimus illum earum laboriosam. Explicabo mollitia magni omnis. Mollitia, nesciunt aspernatur accusantium reprehenderit facere ex vero porro similique.",
      thumbnails: { medium: { url: "" } },
    },
  });

  let [videos, setVideos] = React.useState([
    {
      id: { videoId: "" },
      snippet: {
        title: "",
        description: " ",
        thumbnails: { medium: { url: "" } },
      },
    },
  ]);

  let searchVideo = () => {
    setLoadingVideo(true);
    youtube
      .get("/videos", { params: { id: videoId } })
      .then((result) => {
        console.log("");
        setVideo(result.data.items[0]);
        setLoadingVideo(false);
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
        setErrorVideo(message);
        setLoadingVideo(false);
      });
  };

  let getRelatedVideos = () => {
    setLoadingVideos(true);
    youtube
      .get("/search", { params: { relatedToVideoId: videoId, type: "video" } })
      .then((result) => {
        setVideos(result.data.items);
        setLoadingVideos(false);
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
        setErrorVideos(message);
        setLoadingVideos(false);
      });
  };

  useEffect(() => {
    searchVideo();
    getRelatedVideos();
    window.scrollTo(0, 0);
  }, [videoId]);

  return (
    <div className="videoDetail">
      {
        <div className="margin-top">
          <div className="margin-bottom">
            {!loadingVideo ? (
              errorVideo ? (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {errorVideo}
                </Alert>
              ) : (
                <VideoPlayCard videoId={videoId} video={video}></VideoPlayCard>
              )
            ) : (
              <div className="spinner-video">
                <CircularProgress color="success" className="" />
              </div>
            )}
          </div>
          <h2 className="heading-bottom-video">Das könnte dir auch gefallen</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {!loadingVideos ? (
              errorVideos ? (
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  {errorVideos}
                </Alert>
              ) : (
                videos.map((video) => {
                  return (
                    <SearchDetailCard key={video.snippet.title} video={video} />
                  );
                })
              )
            ) : (
              <CircularProgress className="spinner" color="success" />
            )}
          </div>
        </div>
      }
    </div>
  );
}
