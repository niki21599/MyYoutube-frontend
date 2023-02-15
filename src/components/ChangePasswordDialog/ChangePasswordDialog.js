import React from "react";
import "./ChangePasswordDialog.css";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function ChangePasswordDialog(props) {
  let [oldPassword, setOldPassword] = React.useState("");
  let [newPassword, setNewPassword] = React.useState("");
  let [newPasswordRepeat, setNewPasswordRepeat] = React.useState("");
  let [wrongPasswordError, setWrongPasswordError] = React.useState(false);
  let [passwordsDontMatchError, setPasswordDontMatchError] =
    React.useState(false);
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Change Password</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Type in your old Password and your new Password twice.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="oldPassword"
          label="Old Password"
          type="password"
          fullWidth
          variant="filled"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="newPassword"
          label="New Password"
          type="password"
          fullWidth
          variant="filled"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="newPasswordRepeat"
          label="Repeat new Password"
          type="password"
          fullWidth
          variant="filled"
          value={newPasswordRepeat}
          onChange={(e) => setNewPasswordRepeat(e.target.value)}
          sx={{ marginBottom: "16px" }}
        />
        {passwordsDontMatchError ? (
          <Typography variant="div" sx={{ color: "red" }}>
            The new Passwords don't match.
          </Typography>
        ) : (
          ""
        )}
        {wrongPasswordError ? (
          <Typography variant="div" sx={{ color: "red" }}>
            The old Password was wrong.
          </Typography>
        ) : (
          ""
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button onClick={props.handleClose}>Save</Button>
      </DialogActions>
    </Dialog>
  );
}
