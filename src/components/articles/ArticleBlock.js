import React from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";

function ArticleBlock(props) {
  const { image, source, title } = props;
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
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Read this article"} icon={"fa  fa-newspaper-o"} />
        </Box>
      </Box>
    </Box>
  );
}

export default ArticleBlock;
