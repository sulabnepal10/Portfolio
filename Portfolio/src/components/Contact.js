import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lottie from 'react-lottie';
import contactAnimation from '../assets/img/Animation.json';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../App.css';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const formData = new FormData(e.target);
      formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();
      setFormDetails(formInitialDetails);
      setButtonText("Send");

      if (result.success) {
        setStatus({ success: true, message: '' });

        setTimeout(() => {
          setStatus({ success: false, message: '' });
        }, 10000);
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: `Error: ${error.message}` });
      console.error("Error in sending message:", error);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: contactAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    speed: 0.1,
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <Lottie options={defaultOptions} height={null} width="100%" />
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input type="text" name="firstName" value={formDetails.firstName} placeholder="Full Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required />
                      </Col>

                      <Col xs={12} sm={6} className="px-1">
                        <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} required />
                      </Col>

                      <Col xs={12} className="px-1">
                        <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
                        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status.message && (
                        <Col xs={12}>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};