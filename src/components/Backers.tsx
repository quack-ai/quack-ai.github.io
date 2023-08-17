import { FC } from "react";

import styles from "../styles/Backers.module.css";

const Backers: FC = () => {
  return (
    <section className={styles.backedBySection}>
      <p className={styles.subtitle}>Backed by</p>
      <div className={styles.logoGrid}>
        <a href="https://www.joinef.com/" className={styles.logoCard}>
          <img src="/ef.png" alt="Entrepreneur First" className={styles.logo} />
        </a>
        <a href="https://www.ycombinator.com/" className={styles.logoCard}>
          <img src="/yc.svg" alt="Y Combinator" className={styles.logo} />
        </a>

        <a href="https://www.agoranov.com/" className={styles.logoCard}>
          <img src="/agoranov.png" alt="Agoranov" className={styles.logo} />
        </a>
      </div>
    </section>
  );
};

export default Backers;
