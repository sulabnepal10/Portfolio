import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import CreativeCard from './CreativeCard';
import InfoCard from './InfoCard';
import Card from './Earth';
import Switch from './switch';
import { useState } from 'react';

export const Banner = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const handleSwitchToggle = (e) => {
    setIsSwitchOn(e.target.checked);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center justify-content-center g-4">
          {isSwitchOn ? (
            <>
              <Col xs={12} lg={7} xl={8} className="d-flex justify-content-center justify-content-lg-start" style={{ zIndex: 10 }}>
                <TrackVisibility once>
                  {({ isVisible }) => (
                    <div style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                      transition: 'all 0.8s ease',
                      width: '100%'
                    }}>
                      <CreativeCard />
                    </div>
                  )}
                </TrackVisibility>
              </Col>

              <Col xs={12} lg={5} xl={4} className="d-flex justify-content-center justify-content-lg-end" style={{ zIndex: 10 }}>
                <div style={{ maxWidth: '420px', width: '100%' }}>
                  <TrackVisibility once>
                    {({ isVisible }) => (
                      <div style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                        transition: 'all 0.8s ease',
                      }}>
                        <InfoCard />
                      </div>
                    )}
                  </TrackVisibility>
                </div>
              </Col>
            </>
          ) : (
            <Col xs={12} className="text-center" style={{ zIndex: 10, color: '#fff' }}>
            </Col>
          )}
        </Row>
      </Container>

      <div className="switch-responsive-container">
        <Switch checked={isSwitchOn} onChange={handleSwitchToggle} />
      </div>

      <div className="earth-bg-container">
        <Card />
      </div>

      <style>{`
        .banner {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 100px 0;
          overflow: hidden;
        }

        .switch-responsive-container {
          position: absolute; 
          bottom: 30px;
          right: 30px;
          z-index: 999;
          transform: scale(0.7);
          transform-origin: bottom right;
          transition: all 0.4s ease;
        }

        .earth-bg-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          opacity: 0.4;
          pointer-events: none;
        }

        /* Responsive Logic */
        @media (max-width: 991px) {
         .switch-responsive-container {
      top: 100px; 
      bottom: auto; 
      right: 15px;
      /* Boost z-index to ensure it is clickable over other elements */
      z-index: 9999; 
      transform: scale(0.45); 
      transform-origin: top right;
    }

    .banner {

      padding: 180px 0 60px 0 !important;
    }
          
          .earth-bg-container {
            opacity: 0.3; /* Even lower opacity on mobile for readability */
          }
        }

        @media (min-width: 992px) {
          .earth-bg-container {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};