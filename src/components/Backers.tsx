import Image from "next/image";
import { FC } from "react";

import agoLogo from "../../public/agoranov.png";
import efLogo from "../../public/ef.png";
import ycLogo from "../../public/yc.svg";
import styles from "../styles/Backers.module.css";

const Backers: FC = () => {
  return (
    <section className={styles.backedBySection} id="backers">
      <p className={styles.subtitle}>Backed by</p>
      <div className={styles.logoGrid}>
        <a href="https://www.joinef.com/" className={styles.logoCard}>
          <Image
            src={efLogo}
            alt="Entrepreneur First"
            className={styles.logo}
          />
        </a>
        <a href="https://www.ycombinator.com/" className={styles.logoCard}>
          <Image src={ycLogo} alt="Y Combinator" className={styles.logo} />
        </a>

        <a href="https://www.agoranov.com/" className={styles.logoCard}>
          <Image src={agoLogo} alt="Agoranov" className={styles.logo} />
        </a>
      </div>
    </section>
  );
};

export default Backers;
