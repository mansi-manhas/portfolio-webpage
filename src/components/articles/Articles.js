import React from 'react';
import ArticleBlock from "./ArticleBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";

export default function Articles() {
    return (
        <Box marginLeft="40px">
            <Grid container display={'flex'} justifyContent={'center'} marginTop={'20px'}>
                {info.articles.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <ArticleBlock image={project.image} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};