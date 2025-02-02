import React from "react";
import "./EducationExp.css";
import Grid from '@mui/material/Grid2';
import { Typography } from "@mui/material";

const renderEducationItem = (item, index) => (
    <div className="about-section" key={index}>
        <Grid className="content">
            <Typography className="heading">{item.degree}</Typography>
            <Typography className="subheading">{item.college}</Typography>
        </Grid>
        <Grid className="dates">
            <Typography className="subheading">{item.start_date} - {item.end_date}</Typography>
        </Grid>
    </div>
);


const renderExperienceItem = (item, index) => (
    <div className="about-section" key={index}>
        <Grid className="content">
            <Typography className="heading">{item.position}</Typography>
            <Typography className="subheading">{item.company}, {item.location}</Typography>
        </Grid>
        <Grid className="dates">
            <Typography className="subheading">{item.start_date} - {item.end_date}</Typography>
        </Grid>
    </div>
);


const renderPublicationItem = (item, index) => (
    <div className="about-section" key={index}>
        <Grid className="content">
            <Typography className="heading">{item.title}</Typography>
            <Typography className="subheading">{item.publisher}</Typography>
        </Grid>
        <Grid className="dates">
            <Typography className="subheading">Published in {item.year}</Typography>
        </Grid>
    </div>
);


const EducationExp = ({ education, experience, publications }) => {
    return (
        <div>
            <div className="about-container">
                {education.map(renderEducationItem)}
            </div>
            <hr className="section-line" />
            <div className="about-container">
                {experience.map(renderExperienceItem)}
            </div>
            <hr className="section-line" />
            <div className="about-container">
                {publications.map(renderPublicationItem)}
            </div>
        </div>

    );
};

export default EducationExp;
