import React from "react";
import "./SelfCard.css";
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SelfCard = ({ photo_url, github_url, linkedin_url }) => {
    return (
        <div className="self-card-container">
            <Grid className="self-photo">
                <img
                    src={photo_url}
                />
            </Grid>
            <Grid className="social-links">
                <Link href={github_url} target="_blank">
                    <GitHubIcon className="social-icon" />
                </Link>
                <Link href={linkedin_url} target="_blank">
                    <LinkedInIcon className="social-icon" />
                </Link>
            </Grid>
        </div>
    );
};

export default SelfCard;
