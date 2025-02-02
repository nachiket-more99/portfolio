import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Section from './components/section/Section';
import SelfCard from './components/self-card/SelfCard';
import ResumeData from './data/resume.json';
import EducationExp from "./components/education_exp/EducationExp";
import Projects from "./components/projects/Projects"

import "./App.css"
import './assets/fonts/fonts.css';
import Navbar from "./components/navbar/Navbar";

const theme = createTheme({
  typography: {
    fontFamily: '"Hanken Grotesk", sans-serif',
  },
});

function App() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    setProfileData(ResumeData);
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar title={profileData.name} links={["about", "projects"]}/>
        <Section idValue="intro" title="Introduction" subtitle={profileData.position} summary={profileData.summary} resume_link={profileData.resume_link} lr={true} leftSize="50%" rightSize="50%" tb={false} title_right={true} homepage={true}
          contentComponent={<SelfCard
            photo_url={profileData.self_photo}
            github_url={profileData.github_url}
            linkedin_url={profileData.linkedin_url}
          />} />

        <Section idValue="about" title="About Me" subtitle="Education & Work Experience" lr={true} leftSize="40%" rightSize="60%" tb={false} title_right={false}
          contentComponent={<EducationExp
            education={profileData.education}
            experience={profileData.experience}
            publications={profileData.publications}
          />} />

        <Section idValue="projects" title="Projects" subtitle="All Creative Work & Selected Projects" lr={false} tb={true} title_right={false} 
          contentComponent={<Projects 
            projects={profileData.projects} 
        />}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
