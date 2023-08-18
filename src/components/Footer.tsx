import { FC } from "react";
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa';

import styles from "../styles/Footer.module.css";

const Footer: FC = () => {
  return (
    <footer>
      <p>Copyright 2023 Quack AI</p>
      <div className={styles.socialLinks}>
        <a
          href="https://discord.gg/E9rY3bVCWd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord className={styles.socialIcon} color="#5865F2" />
        </a>
        <a
          href="https://github.com/quack-ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.socialIcon} />
        </a>
        <a
          href="https://twitter.com/quack_ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className={styles.socialIcon} color="#1D9BF0" />
        </a>
      </div>
      <style jsx>{`
        footer {
          width: 100%;
          height: auto;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem; /* Adds some padding around the elements */
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        footer p {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
