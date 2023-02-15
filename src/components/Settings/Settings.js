import React from "react";
import "./Settings.css";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { TextField } from "@mui/material";
import UploadVideoDialog from "../UploadVideoDialog/UploadVideoDialog";
import ChangePasswordDialog from "../ChangePasswordDialog/ChangePasswordDialog";
import { Navigate } from "react-router-dom";
import { PropaneSharp } from "@mui/icons-material";

export default function Settings(props) {
  let [firstName, setFirstName] = React.useState("");
  let [lastName, setLastName] = React.useState("");
  let [videoDialogOpen, setVideoDialogOpen] = React.useState(false);
  let [changePasswordOpen, setChangePasswordOpen] = React.useState(false);

  let handleVideoUploadClose = () => {
    setVideoDialogOpen(false);
  };
  let handleVideoUploadOpen = () => {
    setVideoDialogOpen(true);
  };
  let handleChangePasswordClose = () => {
    setChangePasswordOpen(false);
  };
  let handleChangePasswordOpen = () => {
    setChangePasswordOpen(true);
  };

  return (
    <div>
      {props.loggedIn ? (
        <div className="margin-top settings-page">
          <Card sx={{ width: "300px" }} className="settings-card">
            <CardMedia
              component="img"
              height="194"
              sx={{ width: "300px" }}
              image="/img/thumbnail.jpg"
              alt="Paella dish"
              className="media-img"
            />
            <Button
              sx={{
                margin: "8px 8px 8px 8px ",
              }}
              variant="contained"
              onClick={handleVideoUploadOpen}
            >
              Upload Video
            </Button>
          </Card>
          <hr class="solid" />
          <div
            style={{
              marginTop: "16px",
              width: "calc(100% - 40px)",
              paddingLeft: "16px",
              paddingRight: "16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" sx={{ alingSelf: "start" }}>
              Meine Daten
            </Typography>
            <TextField
              autoFocus
              margin="dense"
              id="last_name"
              label="Email"
              type="text"
              fullWidth
              variant="filled"
              value={"MeineMail@gmail.com"}
              disabled
            />
            <TextField
              autoFocus
              margin="dense"
              id="first_name"
              label="First Name"
              type="text"
              fullWidth
              variant="filled"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              autoFocus
              margin="dense"
              id="last_name"
              label="Last Name"
              type="text"
              fullWidth
              variant="filled"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Button
              sx={{
                margin: "8px 8px 8px 8px ",
                width: "150px",
                alignSelf: "center",
              }}
              variant="contained"
            >
              Save Changes
            </Button>
          </div>
          <hr class="solid" />
          <Button
            sx={{
              margin: "8px 8px 8px 8px ",

              alignSelf: "center",
            }}
            variant="contained"
            onClick={handleChangePasswordOpen}
          >
            Change Password
          </Button>
          <hr class="solid" />
          <a href=""> Impressum</a>
          <UploadVideoDialog
            open={videoDialogOpen}
            handleClose={handleVideoUploadClose}
          ></UploadVideoDialog>
          <ChangePasswordDialog
            open={changePasswordOpen}
            handleClose={handleChangePasswordClose}
          ></ChangePasswordDialog>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
