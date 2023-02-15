import React from "react";
import "./UploadVideoDialog.css";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";

export default function UploadVideoDialog(props) {
  let [title, setTitle] = React.useState("");
  let [description, setDescription] = React.useState("");

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Upload Video</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DialogContentText>
          Please select the Video File and provide the Video Data.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="filled"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Description"
          type="text"
          multiline
          minRows={2}
          fullWidth
          variant="filled"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
        <Button
          variant="contained"
          sx={{ width: "150px", alignSelf: "center" }}
        >
          <FileUploadIcon sx={{ marginRight: "2px" }} />
          Video File
        </Button>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button onClick={props.handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
