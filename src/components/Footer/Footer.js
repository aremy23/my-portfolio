import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerName}>&copy; Amy He 2025</div>
        <div className={styles.updatedBadge}>
          <div className={styles.pulseDot} />
          <span className={styles.updatedText}>Updated</span>
          <span className={styles.dateText}>03/27/2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;