import Image from "next/image";
import { FC } from "react";

import waveTop from "../../public/wave-top.svg";
import styles from "../styles/Hero.module.css";

const wideStyle = {
  width: "100%",
};

const Hero: FC = () => {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.title}>
        AI{" "}
        <a href="https://marketplace.visualstudio.com/items?itemName=QuackAI.quack-companion">
          companion
        </a>{" "}
        for developer onboarding
      </h1>

      <p className={styles.description}>
        Our VSCode extension guides developers through the best steps to make a
        smooth contribution.
      </p>

      <div className={styles.grid}>
        <a
          href="https://marketplace.visualstudio.com/items?itemName=QuackAI.quack-companion"
          className={styles.card}
        >
          <h3 className={styles.cardTitle}>
            <img src="/vscode.svg" alt="VSCode Icon" className={styles.icon} />{" "}
            VSCode extension &rarr;
          </h3>
          <p>Let&apos;s get you started for your next contributions!</p>
        </a>

        <a href="https://discord.gg/E9rY3bVCWd" className={styles.card}>
          <h3 className={styles.cardTitle}>
            <img
              src="/discord.png"
              alt="Discord Icon"
              className={styles.icon}
            />{" "}
            Discord &rarr;
          </h3>
          <p>Join other developers from the Quack community.</p>
        </a>
      </div>
      <div
        className="wave-top"
        style={{
          transform: "rotate(180deg)",
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
        }}
      >
        <Image src={waveTop} alt="Wave graphics" style={wideStyle} />
      </div>
    </section>
  );
};

export default Hero;
