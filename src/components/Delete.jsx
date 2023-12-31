import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Client from "../services/api";

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const Delete = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate();

  const deletePost = async () => {
    await Client.delete(`posts/${props.postId}`);
  };

  const handleDelete = () => {
    deletePost();
    handleClose()
    navigate("/posts");
    window.location.reload(false);
  };

  return (
    <div className="centered">
      <button className="sub-btn delete" onClick={handleClickOpen}>
        Delete Post
      </button>
        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" style={{ background: "#0f252e", color: "#fff" }}>
          Confirmation
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
           Are you sure you want to delete this post? 
          </Typography>
        </DialogContent>
        <DialogActions>
           <Button className="hov" autoFocus onClick={handleClose} style={{ color: "#143d21", width: "100px" }}>
            Cancel
          </Button>
          <Button className="hov"  autoFocus onClick={handleDelete} style={{ color: "#143d21", width: "100px" }}>
            Delete
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default Delete;
