import React from 'react';
import styled from 'styled-components';
import InstaCard from './InstaCard';
import ig1 from '../assets/img/ig1.png';
import ig2 from '../assets/img/ig2.png';
import ig3 from '../assets/img/ig3.png';

const InstagramSection = () => {
  const posts = [
    {
      thumbnail: ig1,
      title: "Linux History Timeline",
      description: "Exploring key milestones in Linux development over the decades.",
      link: "https://www.instagram.com/p/DCvrEttCnVR/"
    },
    {
      thumbnail: ig3,
      title: "Kernel Insights",
      description: "Deep dive into Linux kernel architecture and contributions.",
      link: "https://www.instagram.com/p/DC-4cGSvLbp/"
    },
    {
      thumbnail: ig2,
      title: "Linux Distribution",
      description: "How open source changed the tech world forever.",
      link: "https://www.instagram.com/p/DDCAQPiOa5s/"
    }

  ];

  return (
    <SectionWrapper>
      <div className="container">
        <div className="header">
          <h2 className="section-title">
            Knowledge Sharing on Instagram
          </h2>
          <p className="section-description">
            I share bite-sized, informative content about Linux history, distributions, kernel concepts, and the open-source journey on Instagram.
            Here's a glimpse of my recent posts — follow for daily tech insights!
          </p>
        </div>
        <div className="cards-grid">
          {posts.map((post, index) => (
            <InstaCard
              key={index}
              thumbnail={post.thumbnail}
              title={post.title}
              description={post.description}
              link={post.link}
            />
          ))}
        </div>
        <a
          href="https://www.instagram.com/linux_timeline/"
          target="_blank"
          rel="noopener noreferrer"
          className="view-more-btn"
        >
          <InstagramIcon />  View More on Instagram
        </a>
      </div>
    </SectionWrapper>
  );
};

const InstagramIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '0 8px', verticalAlign: 'middle' }}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.012 7.052.07 3.104.237 0 3.373 0 7.332c-.058 1.28-.07 1.683-.07 4.948 0 3.264.012 3.667.07 4.948.148 3.958 3.284 7.094 7.232 7.261 1.28.058 1.683.07 4.948.07 3.264 0 3.667-.012 4.948-.07 3.949-.167 7.085-3.303 7.252-7.261.058-1.28.07-1.683.07-4.948 0-3.264-.012-3.667-.07-4.948C23.763 3.373 20.627.237 16.679.07 15.399.012 15 .0 12 0z" fill="url(#ig-gradient)" />
    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" fill="url(#ig-gradient)" />
    <defs>
      <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="30%" stopColor="#fa7e1e" />
        <stop offset="60%" stopColor="#d62976" />
        <stop offset="100%" stopColor="#962fbf" />
      </linearGradient>
    </defs>
  </svg>
);

const SectionWrapper = styled.section`
  padding: 100px 20px;
  background: #000000; /* Pure black like IG dark mode */
  color: #ffffff;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .header {
    margin-bottom: 60px;
  }

  .section-title {
    font-size: 40px;
    font-weight: 800;
    margin-bottom: 20px;
    background: linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }

  .section-description {
    font-size: 18px;
    color: #a8a8a8;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Classic IG 3-column grid */
    gap: 20px;
    max-width: 1100px;
    margin: 0 auto 70px;
  }

  .view-more-btn {
    display: inline-flex;
    align-items: center;
    padding: 14px 36px;
    background: linear-gradient(45deg, #fa7e1e, #d62976, #962fbf);
    color: white;
    font-size: 18px;
    font-weight: 700;
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.4s ease;
    box-shadow: 0 8px 25px rgba(214, 41, 118, 0.4);
  }

  .view-more-btn:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(214, 41, 118, 0.6);
  }

  @media (max-width: 992px) {
    .cards-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    padding: 80px 15px;

    .section-title {
      font-size: 32px;
    }

    .cards-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }
`;

export default InstagramSection;