import React from "react";
import "./SearchDetailCard.css";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function SearchDetailCard(props) {
  return (
    <Link
      to={"/videoflix_frontend/video/" + props.video.id.videoId}
      className="noDecoration search-card"
    >
      <Card sx={{ display: "flex" }} className="search-card-detail">
        <CardMedia
          component="img"
          height="194"
          sx={{ width: "300px" }}
          image={props.video.snippet.thumbnails.medium.url}
          alt=""
          className="media-img"
        />
        <Box sx={{ margin: "8px 8px 8px 8px" }}>
          <Typography component="div" variant="h5" className="smallHeadline">
            {props.video.snippet.title}
          </Typography>
          <Typography
            component="div"
            variant="subtitle1"
            sx={{ color: "rgba(0,0,0,0.5)" }}
          >
            {props.video.snippet.channelTitle}
          </Typography>
          <Typography
            component="div"
            variant="subtitle2"
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {props.video.snippet.description}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
}
