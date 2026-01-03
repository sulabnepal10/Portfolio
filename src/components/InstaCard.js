import React from 'react';
import styled from 'styled-components';

const InstaCard = ({ thumbnail, title, description, link }) => {
  return (
    <StyledWrapper>
      <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card-container">
          <div className="card-header">
            <div className="header-right">
              <div className="story-ring">
                <span className="heart-mini">❤</span>
              </div>
            </div>
          </div>

          <div className="card-image-container">
            <img src={thumbnail} alt={title} className="thumbnail-img" />
          </div>

          <div className="action-bar">
            <div className="left-icons">
              <HeartIcon />
              <CommentIcon />
              <ShareIcon />
            </div>
            <div className="right-icons">
              <BookmarkIcon />
            </div>
          </div>

          <div className="caption-section">
            <p className="caption-text">
              <span className="username">linux_timeline</span>
              <span className="post-title"> {title}</span>
            </p>
            <p className="description-text">{description}</p>
            <p className="view-comments">View all comments</p>
          </div>
        </div>
      </a>
    </StyledWrapper>
  );
};

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" className="icon">
    <path
      d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.071 2.5 12.194 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.03.044.08.044.11.02a4.23 4.23 0 0 1 5.8-1.961Z"
      fill="#ED4956"
    />
  </svg>
);

const CommentIcon = () => (
  <svg viewBox="0 0 24 24" className="icon">
    <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="black" strokeWidth="2" />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="icon">
    <path
      d="M22.02 2.027a1.012 1.012 0 0 1 1.01 1.051l-1.426 18.312a1.015 1.015 0 0 1-1.576.83l-5.77-3.832-3.414 4.31a.75.75 0 0 1-1.328-.39l-.444-5.184L.694 13.56a1.02 1.02 0 0 1 .051-1.849L21.037 2.063a1.03 1.03 0 0 1 .983-.036Zm-3.41 4.545L5.405 12.33l6.57 2.302.321 3.737 2.147-2.709 5.86 3.892L21.734 3.4l-3.124 3.172Z"
      fill="black"
    />
  </svg>
);

const BookmarkIcon = () => (
  <svg viewBox="0 0 24 24" className="icon">
    <path d="m20 21-8-7.56L4 21V3h16v18Z" fill="none" stroke="black" strokeWidth="2" />
  </svg>
);

const StyledWrapper = styled.div`
  .card-link {
    text-decoration: none;
    color: inherit;
  }

  .card-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 350px;
    background: #f4f4f4; 
    border-radius: 40px;
    overflow: hidden;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
  }

  .card-container:hover {
    transform: translateY(-8px);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 25px 15px;
  }

  .instagram-wordmark {
    width: 105px;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .story-ring {
    width: 34px;
    height: 34px;
    background: linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .heart-mini {
    color: white;
    font-size: 14px;
  }

  .arrow-icon {
    width: 20px;
    height: 20px;
    opacity: 0.6;
  }

  .card-image-container {
    width: calc(100% - 16px);
    margin: 0 auto;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .thumbnail-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .action-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 25px 12px;
  }

  .left-icons, .right-icons {
    display: flex;
    gap: 18px;
  }

  .icon {
    width: 24px;
    height: 24px;
  }

  .plus-circle {
    width: 32px;
    height: 32px;
    border: 1.5px solid #dcdcdc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #999;
  }

  .caption-section {
    padding: 0 25px 30px;
    text-align: left;
  }

  .username {
    font-weight: 700;
    font-size: 14px;
    color: #262626;
  }

  .post-title {
    font-weight: 600;
    font-size: 14px;
    color: #00376b;
  }

  .description-text {
    margin-top: 6px;
    font-size: 14px;
    color: #333;
    line-height: 1.5;
  }

  .view-comments {
    margin-top: 10px;
    font-size: 13px;
    color: #8e8e8e;
  }
`;

export default InstaCard;