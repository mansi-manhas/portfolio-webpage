import React from "react";
import IconLink from "./IconLink";

import { Box } from "@mui/material";

const liveTitles = [
  "SQL Query Editor View",
  "Results Summary Component using HTML, CSS and Flexbox",
  "E-Commerce application using Next.js, Prisma, and Stripe payments"
];

function PortfolioBlock(props) {
  const { image, live, source, title } = props;
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        component={"img"}
        src={image}
        alt={"mockup"}
        sx={{ width: 500, height: 400, padding: "40px" }}
      />
      <h1 style={{ fontSize: "2rem", textAlign: "center", maxWidth: "600px" }}>{title}</h1>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        {liveTitles.includes(title) && (
          <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
            <IconLink link={live} title={"Live Demo"} icon={"fa fa-safari"} />
          </Box>
        )}
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
