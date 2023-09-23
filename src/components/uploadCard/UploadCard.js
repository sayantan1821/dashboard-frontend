import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from '@mui/material/TextField';
import modalStyle from "./modalStyle";
import './style.css'

const UploadCard = ({ content }) => {
//   console.log(content);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card className="upload_card" onClick={handleOpen}>
        <CardContent className="upload_card_content">
          <img className="upload_logo" src={content.logo} />
          <div className="card_desc">
            <h3>{content.title}</h3>
          </div>
        </CardContent>
      </Card>{" "}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} className="upload_modal">
          <h1>Upload from Youtube</h1>
          <TextField className="upload_input" fullWidth label="Name" id="name" />
          <TextField className="upload_input" fullWidth label="Description" id="desc" />
          <Button className="upload_button" variant="contained">Upload</Button>
        </Box>
      </Modal>
    </>
  );
};

export default UploadCard;
