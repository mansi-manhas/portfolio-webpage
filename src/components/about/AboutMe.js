import React from "react";

import { Typography, Box, Grid } from "@mui/material";

export default function AboutMe() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      margin={"40px"}
    >
      <h1
        style={{
          fontSize: "2rem",
          textAlign: "center",
          color: "#ca6be6",
          marginBottom: "10px",
        }}
      >
        About Me
      </h1>
      <Box width={"900px"} textAlign={"justify"}>
        <Typography fontSize={"28px"}>
          I am frontend engineer over 5+ years of experience developing
          enterprise applications. I bring the ability to estimate the entire
          project requirements and deliver high-quality code. I collaborate with
          designers and product managers to interpret UI requirements and
          deliver industry-defining product.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={2} display={"flex"} justifyContent={"center"} width="1300px">
          <Grid item xs={4} border="solid 2px black">
            <h1
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                color: "#ca6be6",
                marginTop: "50px",
                marginBottom: "20px",
              }}
            >
              Skills Worthy of Mention
            </h1>
            <Typography fontSize={"20px"}>
              React.js, Redux, Styled-Components, CSS, TypeScript, JavaScript, HTML, PostgreSQL, MySQL, Node.js, Docker, MS Azure,
              Jest, QUnits, Git
            </Typography>
          </Grid>
          <Grid item xs={4} border="solid 2px black">
            <h1
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                color: "#ca6be6",
                marginTop: "50px",
                marginBottom: "20px",
              }}
            >
              Education
            </h1>
            <Typography fontSize={"20px"}>
              <ul>
                <li>👉 Masters in Technology (Software Engineering)</li>
                <li>👉 Bachelors in Computer Applications</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
