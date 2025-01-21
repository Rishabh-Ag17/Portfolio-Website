import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/deshare.png";
import projImg2 from "../assets/img/bot.jpg";
import projImg3 from "../assets/img/img4.png";
import img4 from "../assets/img/cc.jpg";
import img5 from "../assets/img/crypto.jpg";
import img6 from "../assets/img/url.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "De-Share",
      description: "Engineered a decentralized file sharing system, and enabling permission-based access management.",
      imgUrl: projImg1,
      projectUrl: "https://de-docs-client-solved.vercel.app/",
    },
    {
      title: "Coin Coffer",
      description: "Developed a token staking application where you can claim rewards for staking your Sepolia tokens",
      imgUrl: img4,
      projectUrl: "https://coin-coffer-6bj8.vercel.app/",
    },
    {
      title: "LinkedBot",
      description: "A smart Discord bot that helps job seekers craft professional resumes, LinkedIn profiles, and cover letters. ",
      imgUrl: projImg2,
      projectUrl: "https://github.com/Rishabh-Ag17/LinkedBot",
    },
    {
      title: "CodeChef Problem Pinger",
      description: "An extension that sends a notification after every submission in a contest about the result of the submission",
      imgUrl: projImg3,
      projectUrl: "https://github.com/Rishabh-Ag17/Codechef-ProblemPinger",
    },
    {
      title: "URL Shortener",
      description: "Developed a URL shortener application that efficiently converts long URLs into concise links",
      imgUrl: img6,
      projectUrl: "https://github.com/Rishabh-Ag17/URL_Shortener",
    },
    {
      title: "CryptoTracker",
      description: "Focuses on Backend Development, handling backgroudn jobs and interacting with APIs",
      imgUrl: img5,
      projectUrl: "https://github.com/Rishabh-Ag17/crypto-tracker",
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects and Coding Profiles</h2>
                <p>Explore some of the projects I've crafted on my GitHub account. Feel free to delve into my coding stats across different platforms and peruse the coursework I've tackled thus far in my B.Tech journey.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Coding Profiles</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">CourseWork</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Here's a small glimpse at my coding profiles accross various platforms. Do check them out using the handles below!</p>
                      <ul>
                        <li>Knight at LeetCode with a rating of 1966 - Account - <a href="">rishabhag</a></li>
                        <li>Specialist at CodeForces with a rating of 1516 - Account - <a href="">rishabh_ag</a></li>
                        <li>4 Star at CodeChef with a rating of 1800+ - Account - <a href="">rishabh_ag17</a></li>
                        <li>Specialist at CodeStudio - Account - <a href="">Rishabh-Agarwal</a></li>
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Here are some of the courses I have undertaken during my B.Tech tenure - </p>
                      <ul>
                        <li>Analysis Of Data Structures and Algorithms - Grade : 10/10</li>
                        <li>Data Structures - Grade : 10/10</li>
                        <li>Operating System - Grade : 10/10</li>
                        <li>Database Management System - Grade : 10/10</li>
                        <li>Software Engineering - Grade : 10/10</li>
                        <li>Object Oriented Programming - Grade : 9/10</li>
                        <li>Computer Network - Grade : 10/10</li>
                        <li>Artificial Intelligence - Grade : 10/10</li>
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
