import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Position',
      company: 'Company',
      date: 'Month Year - Month Year',
      points: ['Description 1', 'Description 2']
    },
    {
      icon: 'fas fa-robot',
      title: 'Position',
      company: 'Company',
      date: 'Month Year - Month Year',
      points: ['Description 1', 'Description 2']
    }
  ];

  return (
    <section id="experience" className={styles.section}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}>
              <i className={exp.icon} />
            </div>
            <div className={styles.timelineContent}>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className={styles.date}>{exp.date}</p>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;