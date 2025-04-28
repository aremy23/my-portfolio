import React from 'react';
import styles from './About.module.css';
import profileImage from '../../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <h2 className={styles.sectionTitle}>About me</h2>
      <div className={styles.aboutContainer}>
        <div className={styles.profileImage}>
          <img src={profileImage} alt="Profile" />
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.aboutItem}>
            <span className={styles.emoji}>🌞</span>
            <p>Hi! My name is Amy and I am a ... student with a deep passion for ...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;