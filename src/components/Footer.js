import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/font/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
      <br></br>
      <br></br>
      <br></br>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rishabh-agarwal-267279259"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Rishabh-Ag17"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/_rishabh__agarwal_/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>For more details, contact above!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
