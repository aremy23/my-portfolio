import React from 'react';
import './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="intro-text">Hi, my name is</p>
          <h1 className="name">Amy He</h1>
          <p className="title">student at </p>
          <div className="social-icons">
            <a href="https://github.com/aremy23" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/amy-he0323/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="mailto:amywxhe@gmail.com">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;