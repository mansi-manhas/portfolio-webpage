import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";

import { Box, List, ListItem, ListItemText } from "@mui/material";

import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";

export default function ExperienceTimeline() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      style={{ marginTop: "40px" }}
    >
      <Timeline style={{ maxWidth: "1000px" }} position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="lightgray"
          >
            EPAM Systems <br />
            Feb 2022 - Till Now (1.5+ years)
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
              Software Engineer
            </Typography>
            <Typography>
              Led the development of robust and scalable webpages & UI
              components using React.js, Redux, TypeScript, Styled-Components,
              and TailwindCSS. Interpreted UI designs, and translated them into
              pieces for complex enterprise applications. Demonstrated project
              management skills by accurately estimating workload, and defining
              executable tasks.
              <br />
              <br />
              <b style={{ color: "#ca6be6" }}>Apps:</b> Canadian Tire's
              E-Commerce Retail Platform, Mckesson's Access Management App,
              Vertex Tax Compliance App
              <br />
              <br />
              <b style={{ color: "#ca6be6" }}>Skills:</b> React.js, Redux-Saga,
              TypeScript, Styled-Components, TailwindCSS, JavaScript, HTML, CSS,
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
            Aug 2017 - Feb 2022 (5 years)
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
              Led the development of complex B2B enterprise apps like production
              planning, business configuration tools, UI libraries, and more.
              Improved performance of multiple high-impact areas. Led an
              initiative to adapt a common coding style to send high-quality
              code for production.
              <br />
              <br />
              <b style={{ color: "#ca6be6" }}>Apps:</b> Production Planning,
              Capacity Planning, Central Business Configuration Apps (ERP B2B
              Apps)
              <br />
              <br />
              <b style={{ color: "#ca6be6" }}>Skills: </b> TypeScript, React.js,
              JavaScript, HTML, PostgreSQL, CSS, Docker, Git, Node.js
              <br />
              <br />
              <b style={{ color: "#ca6be6" }}>Other Roles: </b>Performance SPOC,
              UX Advocate
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
      <br />
      <br />
      <Typography variant="h5" component="h5" style={{ color: "#ca6be6" }}>
        Skills Worthy Of Mention
      </Typography>
      <div>
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-React-000?&logo=React"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-Redux-000?&logo=Redux"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-Next.js-000?&logo=Next.js"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-Prisma-000?&logo=prisma"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
      </div>
      <div>
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-TypeScript-000?&logo=TypeScript"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-JavaScript-000?&logo=JavaScript"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-HTML-000?&logo=HTML"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
      </div>
      <div>
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-CSS-000?&logo=CSS"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={
            "https://img.shields.io/badge/-StyledComponents-000?&logo=StyledComponents"
          }
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={
            "https://img.shields.io/badge/-TailwindCSS-000?&logo=tailwindcss"
          }
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
      </div>
      <div>
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-Node-000?&logo=Node"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-Express-000?&logo=Express"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
      </div>
      <div>
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-Postgress-000?&logo=Postgress"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-MYSQL-000?&logo=MYSQL"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-MSAzure-000?&logo=Azure"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-Docker-000?&logo=Docker"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <br />
        <Typography style={{ textAlign: "center" }}>
          Testing Libs & Other Tools
        </Typography>
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-Jest-000?&logo=Jest"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-Karma-000?&logo=Karma"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-Qunits-000?&logo=Qunit"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-SonarQube-000?&logo=SonarQube"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-Kibana-000?&logo=Kibana"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
        <Box
          component={"img"}
          src={"https://img.shields.io/badge/-MSAzure-000?&logo=Azure"}
          alt={"skill"}
          sx={{ padding: "10px" }}
        />
      </div>
      <br />
      <br />
      <Typography variant="h5" component="h5" style={{ color: "#ca6be6" }}>
        Certifications & Achievements
      </Typography>
      <List dense={true}>
        <ListItem>
          <ListItemText
            primary="◉ Microsoft Azure Certified: Data
Fundamentals"
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="◉ Digital Skills - User Experience Certification hosted by
Accenture on FutureLearn"
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="◉ Participated in 5-Day Design Thinking Workshop solving a real problem" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="◉ Secured 1st position in a 1-month Hackathon, and showcased the final
product in Germany"
          />
        </ListItem>
      </List>
    </Box>
  );
}
