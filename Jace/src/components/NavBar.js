import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/lul.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/tiktok.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/communication.png';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

const socialLinks = [
  { href: "https://www.linkedin.com/in/greedy-378bb030a/", src: navIcon1, alt: "LinkedIn" },
  { href: "https://www.tiktok.com/@greedy.2854", src: navIcon2, alt: "TikTok" },
  { href: "https://www.instagram.com/marianne.zmeer/", src: navIcon3, alt: "Instagram" },
  { href: "https://discord.gg/uJnrDxadGD", src: navIcon4, alt: "Discord" }
];

const SocialIcons = () => (
  <div className="social-icon">
    {socialLinks.map(({ href, src, alt }) => (
      <a key={href} href={href}><img src={src} alt={alt} /></a>
    ))}
  </div>
);

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img className="lul" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {['home', 'about', 'Gallery'].map((link) => (
                <Nav.Link
                  key={link}
                  href={`#${link}`}
                  className={activeLink === link ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => handleUpdateActiveLink(link)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
            
            <span className="navbar-text2">
            <HashLink to='https://www.instagram.com/marianne.zmeer/'>
                <button className="lol"><span>This is me!</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}
export default NavBar;