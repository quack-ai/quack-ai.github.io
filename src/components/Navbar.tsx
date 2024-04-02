import Image from "next/image";
import Link from "next/link";
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
      <div className={styles.navLinks}>
        {/* <Link href="#features">Features</Link> */}
        <Link href="https://docs.quackai.com">Documentation</Link>
        {/* <Link href="/blog">Blog</Link> */}
        <Link href="https://discord.gg/E9rY3bVCWd">Community</Link>
        <Link href="https://www.ycombinator.com/companies/quack-ai/jobs">
          Careers
        </Link>
      </div>
      <div className={styles.authLinks}>
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
      </div>
    </nav>
  );
};

export default Navbar;
