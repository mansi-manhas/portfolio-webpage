import React from "react";

import { Box } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';

import resume from "../../img/resume.png";

import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Resume() {
  const [open, setOpen] = React.useState(false);

  const handleDownload = (e) => {
    setOpen(true);
    fetch('myresume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Mansi_Manhas_Resume.pdf';
            alink.click();
        })
    });
  };

  return (
    <Box>
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          color: "white",
          margin: "50px",
        }}
      >
        My Resume
      </h1>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          component={"img"}
          src={resume}
          alt={"mockup"}
          sx={{ width: 500, height: 600, padding: "40px" }}
          onClick={handleDownload}
        />
      </Box>
      <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Download Started
        </Alert>
      </Snackbar>
    </Box>
  );
}
