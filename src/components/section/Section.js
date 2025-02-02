import React from "react";
import "./Section.css";
import Grid from '@mui/material/Grid2';
import { Typography, Link } from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';

const Section = ({ idValue, title, subtitle, lr, leftSize = "50%", rightSize = "50%", tb, title_right, homepage, summary, resume_link, contentComponent }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: tb ? "column" : "row",
    minHeight: homepage ? "calc(100vh - 100px)" : "0"
  };


  const leftSplit = { flex: `0 0 ${leftSize}` };
  const rightSplit = { flex: `0 0 ${rightSize}` };

  return (
    <div id={idValue} className={`section-container ${title_right ? "reverse" : ""}`} style={containerStyle}>
      <Grid className="section" id="section-left" sx={leftSplit} size={6}>
        <Typography className="subtitle">{title}</Typography>
        <Typography className="title">{subtitle}</Typography>
        <Typography className="content">{summary}</Typography>
        {
          resume_link && <Link className="resume-btn" href={resume_link} target="_blank">
            <DescriptionIcon />
            View Resume
          </Link>
        }
      </Grid>
      <Grid className="section" id="section-right" sx={rightSplit} size={6}>
        {contentComponent}
        
      </Grid>
    </div>
  );
};

export default Section;