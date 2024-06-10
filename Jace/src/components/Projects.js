import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/galleryimg1(1).jpg";
import projImg2 from "../assets/img/galleryimg1(2).jpg";
import projImg3 from "../assets/img/galleryimg1(3).jpg";
import projImg4 from "../assets/img/galleryimg1(4).jpg";
import projImg5 from "../assets/img/galleryimg1(5).jpg";
import projImg6 from "../assets/img/galleryimg1(6).jpg";
import projImg7 from "../assets/img/galleryimg1(7).jpg";
import projImg8 from "../assets/img/galleryimg1(8).jpg";
import projImg9 from "../assets/img/galleryimg1(9).jpg";
import projImg10 from "../assets/img/galleryimg1(10).jpg";
import projImg11 from "../assets/img/galleryimg1(11).jpg";
import projImg12 from "../assets/img/galleryimg1(12).jpg";
import projImg13 from "../assets/img/galleryimg1(13).jpg";
import projImg14 from "../assets/img/galleryimg1(14).jpg";
import projImg15 from "../assets/img/galleryimg1(15).jpg";
import projImg16 from "../assets/img/galleryimg1(16).jpg";
import projImg17 from "../assets/img/galleryimg1(17).jpg";
import projImg18 from "../assets/img/galleryimg1(18).jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projImg19 from "../assets/img/soon.png";

export const Projects = () => {

  const projects = [
    {
      title : "",
      imgUrl: projImg1,
    },
    {
      title : "",
      imgUrl: projImg2,
    },
    {
      title : "",
      imgUrl: projImg3,
    },
    {
      title : "",
      imgUrl: projImg4,
    },
    {
      title : "",
      imgUrl: projImg5,
    },
    {
      title : "",
      imgUrl: projImg6,
    },
  ];
  const projects2 = [
    {
      title : "",
      imgUrl: projImg7,
    },
    {
      title : "",
      imgUrl: projImg8,
    },
    {
      title : "",
      imgUrl: projImg9,
    },
    {
      title : "",
      imgUrl: projImg10,
    },
    {
      title : "",
      imgUrl: projImg11,
    },
    {
      title : "",
      imgUrl: projImg12,
    },
  ];
  const projects3 = [
    {
      title: "",
      imgUrl: projImg13,
    },
    {
      title: "",
      imgUrl: projImg14,
    },
    {
      title: "",
      imgUrl: projImg15,
    },
    {
      title: "",
      imgUrl: projImg16,
    },
    {
      title: "",
      imgUrl: projImg17,
    },
    {
      title: "",
      imgUrl: projImg18,
    },
  ];
  
  const projects4 = [
    {
      title: "",
      imgUrl: projImg19,
    },
    {
      title: "",
      imgUrl: projImg19,
    },
    {
      title: "",
      imgUrl: projImg19,
    },
    {
      title: "",
      imgUrl: projImg19,
    },
    {
      title: "",
      imgUrl: projImg19,
    },
    {
      title: "",
      imgUrl: projImg19,
    },
  ];
  

  return (
    <section className="project" id="Growth">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>This is me!</h2>
                <p>Hello im jace These are my growth pictures over the year</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1 Year old</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2 Years old</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3 Years old</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">4 Years old</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane className="hello4" eventKey="first">
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
                    <Tab.Pane className="hello5" eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
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
                    <Tab.Pane className="hello6" eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
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
                    <Tab.Pane className="hello7" eventKey="fourth">
                      <Row>
                        {
                          projects4.map((project, index) => {
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
export default Projects;