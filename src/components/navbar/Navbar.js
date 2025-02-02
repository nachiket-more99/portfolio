import React from "react";
import "./Navbar.css";
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography } from "@mui/material";

const Navbar = ({ title, links }) => {
    return (
        <div className="navbar-container">
            <Grid className="name">

                <Typography className="title font-bold">{title}.</Typography>
            </Grid>
            <Grid className="nav-links-container" gap={2}>
                {links.map((item, index) => (
                    <Link className="nav-link" key={index} href={`#${item}`} >
                        {item}
                    </Link>
                ))}
            </Grid>
        </div>
    );
};

export default Navbar;
