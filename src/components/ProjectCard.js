import { Col } from "react-bootstrap";
import { useState } from "react";
import streamlitImg from "../assets/img/streamlit.png"; // Import the image

export const ProjectCard = ({ title, description, imgUrl, link, isImageOnly }) => {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    if (isImageOnly) {
      setShowImage(true); // Show the image instead of opening a link
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4 className="project-title">{title}</h4>
            <span className="project-description">{description}</span>
          </div>
        </div>
      </div>

      {/* Image preview overlay for the last project */}
      {isImageOnly && showImage && (
        <div className="image-overlay" onClick={() => setShowImage(false)}>
          <img src={streamlitImg} alt="Streamlit Preview" className="popup-image" />
        </div>
      )}
    </Col>
  );
};
