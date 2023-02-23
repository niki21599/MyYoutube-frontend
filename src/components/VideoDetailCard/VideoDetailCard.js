import React from "react";
import "./VideoDetailCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function VideoDetailCard(props) {
  return (
    <div className="card">
      <Link
        to={"/videoflix_frontend/video/" + props.video.id.videoId}
        className="noDecoration"
      >
        <Card
          sx={{
            minWidth: "300px",
            borderRadius: 0,
            boxShadow: "0",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              minHeight={195}
              image={props.video.snippet.thumbnails.medium.url}
              alt=""
            />
            <CardContent sx={{ padding: "4px 4px 4px 8px" }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ marginBottom: 0 }}
              >
                {props.video.snippet.title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {props.video.snippet.channelTitle}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
}
