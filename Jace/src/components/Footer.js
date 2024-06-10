import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/lul.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/tiktok.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from '../assets/img/communication.png';

const socialLinks = [
  { href: "https://www.linkedin.com/in/greedy-378bb030a/", src: navIcon1, alt: "LinkedIn" },
  { href: "https://www.tiktok.com/@greedy.2854", src: navIcon2, alt: "TikTok" },
  { href: "https://www.instagram.com/jacethebrownlabrador/", src: navIcon3, alt: "Instagram" },
  { href: "https://discord.gg/uJnrDxadGD", src: navIcon4, alt: "Discord" }
];

export const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col xs={12} sm={6}>
          <img src={logo} alt="Logo" />
        </Col>
        <Col xs={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            {socialLinks.map(({ href, src, alt }) => (
              <a key={href} href={href}><img src={src} alt={alt} /></a>
            ))}
          </div>
          <p>&copy; 2024. Greedy</p>
        </Col>
      </Row>
    </Container>
  </footer>
);
export default Footer;