import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

import styles from "../styles/Navbar.module.css";

const Navbar: FC = () => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <Image
          src="/quack.png"
          alt="Quack AI"
          width={64}
          height={64}
          className={styles.logo}
        />
        <span className={styles.companyName}>Quack AI</span>
      </div>
      <div className={styles.ctaButton}>
        {isClient && (
          <a
            className={styles.githubButton}
            href="https://github.com/quack-ai/companion"
            aria-label="Star quack-ai/companion on GitHub"
          >
            <FaGithub className={styles.githubLogo} />
            Star us on GitHub
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
