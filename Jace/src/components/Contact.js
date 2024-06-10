import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project1.png";
import projImg2 from "../assets/img/Project2.png";
import projImg3 from "../assets/img/Project3.png";
import projImg4 from "../assets/img/journey(1).jpg";
import projImg5 from "../assets/img/journey(2).jpg";
import projImg6 from "../assets/img/journey(3).jpg";
import projImg7 from "../assets/img/journey(4).jpg";
import projImg8 from "../assets/img/journey(5).jpg";
import projImg9 from "../assets/img/journey(6).jpg";
import projImg10 from "../assets/img/journey(7).jpg";
import projImg11 from "../assets/img/journey(8).jpg";
import projImg12 from "../assets/img/journey(9).jpg";
import projImg13 from "../assets/img/journey(10).jpg";
import projImg14 from "../assets/img/journey(11).jpg";
import projImg15 from "../assets/img/journey(12).jpg";
import projImg16 from "../assets/img/journey(13).jpg";
import projImg17 from "../assets/img/journey(14).jpg";
import projImg18 from "../assets/img/journey(15).jpg";
import projImg19 from "../assets/img/journey(16).jpg";
import projImg20 from "../assets/img/journey(17).jpg";
import projImg21 from "../assets/img/journey(18).jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const projects = [
    { imgUrl: projImg4 },
    { imgUrl: projImg5 },
    { imgUrl: projImg6 },
    { imgUrl: projImg7 },
    { imgUrl: projImg8 },
    { imgUrl: projImg9 },
  ];

  const projects2 = [
    { imgUrl: projImg10 },
    { imgUrl: projImg11 },
    { imgUrl: projImg12 },
    { imgUrl: projImg13 },
    { imgUrl: projImg14 },
    { imgUrl: projImg15 },
  ];

  const projects3 = [
    { imgUrl: projImg16 },
    { imgUrl: projImg17 },
    { imgUrl: projImg18 },
    { imgUrl: projImg19 },
    { imgUrl: projImg20 },
    { imgUrl: projImg21 },
  ];

  return (
    <section className="project" id="Gallery">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>The journey of Foxy</h2>
                  <p>This is my journey throughout life. Welcome to my journey!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Gallery 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Gallery 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Gallery 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
}

export default Contact;
