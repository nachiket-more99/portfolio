import React from "react";
import "./Projects.css";
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from "@mui/material";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const renderProjectCard = (item, index) => (
    <div className="project" key={index}>
        <Grid className="project-content">
            <Typography className="subheading">{item.date}</Typography>
            <Typography className="heading font-bold">{item.project_title}</Typography>
            <ul>
                {
                    item.info.map((point, index) => (
                        <li key={index}>
                            <Typography className="content">{point}</Typography>
                        </li>
                    ))
                }
            </ul>
        </Grid>
        <Grid className="project-info">
            <Stack project-tags direction="row" className="tags-container">
                {
                    item.tags.map((tag, index) => (
                        <Chip key={index} className="tag content" label={tag} />
                    ))
                }
            </Stack>
            <Link href={""} target="_blank">
                <GitHubIcon className="social-icon" />
            </Link>
        </Grid>
    </div>
);

const Projects = ({ projects }) => {
    return (
        <div className="projects-container">

            {projects.map(renderProjectCard)}

        </div>
    );
};

export default Projects;
