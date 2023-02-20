import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function ExperienceTimeline() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      style={{marginTop: '40px'}}
    >
      <Timeline style={{width: '1000px'}} position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="lightgray"
          >
            EPAM Systems <br />
            Feb 2022 - Till Now (1+ yr)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" color="#ca6be6">
              Software Engineer (A2) - Frontend
            </Typography>
            <Typography>
              Interpreted UI designs and led the development of enterprise apps
              like e-commerce retail platform, authentication and authorization
              tools. Managed the end-to-end release, and mentored junior
              colleagues.
              <br />
              <br />
              <b style={{ color: "lightgray" }}>Skills:</b> React.js,
              Redux-Saga, TypeScript, Styled-Components, JavaScript, HTML, CSS,
              Node.js, Docker, MS Azure
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="lightgray"
          >
            SAP Labs
            <br />
            Aug 2017 - Feb 2022 (4.5 yrs)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" color="#ca6be6">
              Software Developer
            </Typography>
            <Typography>
              <b>Roles: </b>UI Developer, Performance SPOC, UX Advocate
              <br />
              <br />
              Led the development of complex B2B enterprise apps like production
              planning, business configuration tools, UI libraries, and more.
              Improved performance of multiple high-impact areas. Led an
              initiative to adapt a common coding style to send high-quality
              code for production.
              <br />
              <br />
              <b style={{ color: "lightgray" }}>Skills: </b> TypeScript,
              React.js, JavaScript, HTML, PostgreSQL, CSS, Docker, Git, Node.js
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="lightgray"
          >
            SAP Labs
            <br />
            Apr 2016 - Jun 2016 (3 months)
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" color="#ca6be6">
              Software Developer Intern
            </Typography>
            <Typography>
              Contributed to Fiori app development using SAPUI5, JavaScript,
              OData
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
