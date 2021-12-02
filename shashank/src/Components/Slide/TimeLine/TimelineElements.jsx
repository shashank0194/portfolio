import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import styled from "styled-components";

const CardHead = styled.h3`
  margin-bottom: 5px;
`;

const CardSubHead = styled.h4`
  margin-bottom: 10px;
  color: #131010;
  font-weight: 600;
`;

const CardDetailText = styled.li`
  color: #141313;
  margin: 5px;
`;

const Responsibilities = styled.div`
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
  letter-spacing: 0.2ch;
`;

function ChronoTimeline({ currentTheme }) {
  const items = [
    // {
    //   title: "October 2020 - Present",
    //   cardSubtitle: "Masai School",
    //   cardTitle: "Full Stack Web Development",
    //   cardDetailedText: ["A full stack web development course."],
    // },
    {
      title: "July 2011 - June 2015",
      cardSubtitle: "Narendra Dev University of Agriculture and Technology",
      cardTitle: "B.Tech Mechanical Engineering",
      cardDetailedText: [
        "An undergraduate Computer Engineering course, that includes the study, design, development, construction, and testing of mechanical and thermal sensors and devices, including tools, engines, and machines. Mechanical engineering careers center on creating technologies to meet a wide range of human needs.",
      ],
    },
    // {
    //   title: "June 2020- July 2020",
    //   cardTitle: "Web Development Intern",
    //   cardSubtitle: "CrackMbaInterview",
    //   cardDetailedText: [
    //     "Revamped the existing website.",
    //     "Updated WordPress and plugins.",
    //     "Integrated authentication and authorization.",
    //     "Integrated payment gateway.",
    //   ],
    //   internship: true,
    // },
    // {
    //   title: "January 2020- June 2020",
    //   cardTitle: "Digital Marketing and Web Development Intern",
    //   cardSubtitle: "Cubicode Digital Media LLP",
    //   cardDetailedText: [
    //     "Obtained requirements from clients.",
    //     "Built websites with WordPress.",
    //     "Maintained websites with WordPress and HTML/CSS.",
    //     "Keyword research for SEO.",
    //   ],
    //   internship: true,
    // },
    {
      title: "June 2009- June 2011",
      cardSubtitle: "Bright Way College",
      cardTitle: "Pre-University College",
      cardDetailedText: [
        "An intermediate course of two years duration, conducted by boards of state education.",
      ],
    },
  ];

  return (
    <VerticalTimeline animate={false} position="left">
      {items?.map((history) => (
        <EducationTimelineCard
          key={history.school}
          currentTheme={currentTheme}
          {...history}
        />
      ))}
    </VerticalTimeline>
  );
}

function EducationTimelineCard({
  title,
  cardTitle,
  cardSubtitle,
  cardDetailedText,
  internship,
  currentTheme,
}) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        textAlign: "left",
        background: "#ffffff",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #ffffff" }}
      date={title}
      iconStyle={{
        background: `${currentTheme === "light" ? "#FEC107" : "#C50E6A"}`,
        color: "#1a1111",
        transform: "scale(0.4)",
      }}
    >
      <CardHead
        style={{ color: "#000000" }}
        className="vertical-timeline-element-title"
      >
        {cardTitle}
      </CardHead>
      <CardSubHead
        style={{ color: "#393e46" }}
        className="vertical-timeline-element-subtitle"
      >
        {cardSubtitle}
      </CardSubHead>
      {internship && (
        <Responsibilities>
          <b>Responsibilities</b>
        </Responsibilities>
      )}

      <ul>
        {cardDetailedText.map((item) => (
          <CardDetailText key={item.title}>{item}</CardDetailText>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
}

export { ChronoTimeline };
