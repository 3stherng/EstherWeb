import React from "react";
import { Container } from "react-bootstrap";
import aboutData from "../data/about_me.json";

import AboutHeader from "../components/about_me/AboutHeader";
import ProfileSummary from "../components/about_me/ProfileSummary";
import Skills from "../components/about_me/Skills";
import Education from "../components/about_me/Education";
import Certification from "../components/about_me/Certifications";
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

      <ProfileSummary text={aboutData.profile} />

      <Skills stack={aboutData.skills.techStack} technical={aboutData.skills.technical} soft={aboutData.skills.soft} />

      <Education education={aboutData.education} />

      <Certification certification={aboutData.certification} />

      <Experience experience={aboutData.experience} />
    </Container>
  );
};

export default AboutMe;
