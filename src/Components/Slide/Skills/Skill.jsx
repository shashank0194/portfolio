import React, { useState} from "react";
import "./Skill.css";
import { MainHeadingWrapper} from "../../Elements/Elements";
import programmingSkils from "./img/programming-skills.svg"

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Front End", logoSrc: "programming-skills.svg" },
    { label: "Back End", logoSrc: "programming-skills.svg" }, 
    { label: "Database", logoSrc: "programming-skills.svg" },
    { label: "Languages", logoSrc: "programming-skills.svg" },
    { label: "Tools & Technology", logoSrc: "programming-skills.svg" },
  ];

  const frontEndSkills = [
    { skill: "HTML", logoURL: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" },
    { skill: "CSS", logoURL: "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" },
    { skill: "Bootstrap", logoURL: "https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" },
    { skill: "React JS", logoURL: "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" },
    { skill: "Redux", logoURL: "https://profilinator.rishav.dev/skills-assets/redux-original.svg" },
  ];

  const backEndSkills = [
    { skill: "Node JS", logoURL: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" },
    { skill: "Express JS", logoURL: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" },
  ];

  const databaseSkills = [
    { skill: "MongoDB", logoURL: "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" },
    { skill: "Redis", logoURL: "https://profilinator.rishav.dev/skills-assets/redis-original-wordmark.svg" },
  ];

  const languageSkills = [
    { skill: "JavaScript", logoURL: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg" },
  ];

  const toolsSkills = [
    { skill: "Git", logoURL: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" },
    { skill: "Postman", logoURL: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { skill: "GitHub", logoURL: "https://img.icons8.com/fluency/96/000000/github.png" },
  ];

  const resumeDetails = [

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills1"
    >
      {frontEndSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
        </div>
      ))}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills2"
    >
      {backEndSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
        </div>
      ))}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills3"
    >
      {databaseSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
        </div>
      ))}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills4"
    >
      {languageSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
        </div>
      ))}
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills4"
    >
      {toolsSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skill}</span>
          <div className="skill-icon"><img src={skill.logoURL} alt="HTML5" /></div>
        </div>
      ))}
    </div>,

    /* WORK EXPERIENCE */
    // <div className="resume-screen-container" key="work-experience">
    //   <div className="experience-container">
    //     <ResumeHeading
    //       heading={"Ehizeex Technoloy"}
    //       subHeading={"FULL STACK DEVELOPER INTERN"}
    //       fromDate={"2021"}
    //       toDate={"Present"}
    //     />
    //     <div className="experience-description">
    //       <span className="resume-description-text">
    //         Currently working as MERN stack web and mobile developer and also an
    //         online instructor on udemy.
    //       </span>
    //     </div>
    //     <div className="experience-description">
    //       <span className="resume-description-text">
    //         - Developed an ecommerce website for client with the dashboard for
    //         managing the products, managing reviews, users, payment etc. .
    //       </span>
    //       <br />
    //       <span className="resume-description-text">
    //         - Integrated the web app with backend services to create new user
    //         onboarding application with dynamic form content.{" "}
    //       </span>
    //       <br />
    //       <span className="resume-description-text">
    //         - I stretch my mental capacity to develope UI as per the given
    //         designs.
    //       </span>
    //       <br />
    //     </div>
    //   </div>
    // </div>, 
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={programmingSkils}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
      <MainHeadingWrapper>
        <h1>Skills & Interests</h1>
        <div></div>
      </MainHeadingWrapper>
        {/* <ScreenHeading title={"Skills"} subHeading={"Overview of My Skill"} /> */}
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
