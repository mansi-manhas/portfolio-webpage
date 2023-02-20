import React from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import Resume from "./resume/Resume";
import AboutMe from "./about/AboutMe";
import ExperienceTimeline from './experience/ExperienceTimeline';
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";

export default function BaseLayout() {

   return (
      <Box className={Style.dark}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item style={{ margin: '10px'}}>
               <Navbar />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  {/* <Route exact path={'/about'} element={<AboutMe/>}/> */}
                  <Route exact path={'/experience'} element={<ExperienceTimeline/>}/>
                  <Route exact path={'/projects'} element={<Portfolio/>}/>
                  <Route exact path={'/resume'} element={<Resume/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>&copy; 2023</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

