import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/pic.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer" , "Web Developer", "Competetive Programmer", "UI/UX Designer" , "BlockChain Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Portfolio Website</span> */}
                <h1>{`Hey, I am Rishabh`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer", "Web Developer", "Competetive Programmer", "UI/UX Designer" , "BlockChain Developer"]'><span className="wrap">{text}</span></span></h1>
                  <p>I am a pre-final year student at IIITM, deeply passionate about competitive programming. I have good hands on Blockchain Development as well as Backend Development. With this being said, I have previously interned at The Mango Jelly as a Backend Developer where I managed to integrate OpenAi as well as OAuth. I am also excited to announce that I will be joining Curefit this summer for a 2-month summer internship</p>
                  <a href="https://www.linkedin.com/in/rishabh-agarwal-267279259"><button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              <img src={headerImg} alt="Header Img" style={{ width: 'auto', height: 'auto' }} /> {/* Adjust width and height as needed */}
              </div>}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  )
}
