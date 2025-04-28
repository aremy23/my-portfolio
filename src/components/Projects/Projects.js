import React from 'react';
import styles from './Projects.module.css';
import projectImage from '../../assets/pic.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Lalala',
      emojis: ['🪙', '🎥'],
      description: 'Lalala is a lalala',
      skills: Array(10).fill('#skill')
    },
    {
      title: 'Project 2',
      description: 'Project description',
      skills: Array(7).fill('#skill')
    },
    {
      title: 'Project 3',
      description: 'Project description',
      skills: Array(4).fill('#skill')
    }
  ];

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={projectImage} alt={project.title} />
            </div>
            <div className={styles.projectInfo}>
              <h3>
                {project.title}
                {project.emojis?.map((emoji, i) => (
                  <span key={i} className={styles.projectEmoji}>{emoji}</span>
                ))}
              </h3>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.skills.map((skill, i) => (
                  <span key={i} className={styles.techTag}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;