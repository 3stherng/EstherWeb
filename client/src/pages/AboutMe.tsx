import React from "react";
import { Container } from "react-bootstrap";
import aboutData from "../data/about_me.json";

import AboutHeader from "../components/about_me/AboutHeader";
import TechStack from "../components/about_me/TechStacks";
import ProfileSummary from "../components/about_me/ProfileSummary";
import Skills from "../components/about_me/Skills";
import Education from "../components/about_me/Education";
import Experience from "../components/about_me/Experience";

const AboutMe: React.FC = () => {
  return (
    <Container className="py-5" id="about">
      <AboutHeader
        name={aboutData.header.name}
        title={aboutData.header.title}
        location={aboutData.header.location}
        linkedin={aboutData.header.linkedin}
        image={aboutData.header.image}
        cv={aboutData.header.cv}
      />

      <TechStack stack={aboutData.techStack} />

      <ProfileSummary text={aboutData.profile} />

      <Skills technical={aboutData.skills.technical} soft={aboutData.skills.soft} />

      <Education education={aboutData.education} />

      <Experience experience={aboutData.experience} />
    </Container>
  );
};

export default AboutMe;
