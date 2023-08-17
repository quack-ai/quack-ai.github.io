import Image from "next/image";
import Script from "next/script";
import { FC } from "react";

import waveBot from "../../public/wave-bottom.svg";
import Backers from "../components/Backers";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Workflow from "../components/Workflow";
import styles from "../styles/Home.module.css";

const wideStyle = {
  width: "100%",
};

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Script src="https://buttons.github.io/buttons.js" async defer></Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4C1Y48B784"
        async
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-4C1Y48B784');
        `}
      </Script>
      <main>
        <Hero />
        <Workflow />
        <div className="wave-bottom">
          <Image src={waveBot} alt="Wave graphics" style={wideStyle} />
        </div>
        <Backers />
      </main>
      <Footer />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default Home;
