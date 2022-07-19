import styles from "../styles/Header.module.css";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Lottie from "lottie-react";
import animation from "../assets/animation.json";
import Github from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import Mail from "../assets/mail.svg";
import Link from "next/link";
// import PDF from '../assets/Nishan_Paudel_CV.pdf'
const Header = () => {
  return (
    <div className={styles.header}>
      <Head>
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
      </Head>
      <div className={styles.container}>
        <div className={styles.header_left}>
          <p>Hi,</p>
          <p>I'm Nishan</p>
          <p>
            A Passionate Front End Developer who focuses on writing clean,
            elegant and efficent code. This is my site, where i share whatever
            side projects I've been working on.
          </p>
          <div className={styles.social_icons}>
            <a href="https://github.com/Nishan99" target="_blank">
              <Image
                alt="Github"
                className={styles.icon}
                width={40}
                height={40}
                src={Github}
              />
            </a>
            <a href="https://www.linkedin.com/in/nishanpaudel/" target="_blank">
              <Image
                alt="LinkedIn"
                className={styles.icon}
                width={40}
                height={40}
                src={LinkedIn}
              />
            </a>
            <a href="mailto:nishanpaudel305@gmail.com">
              <Image
                alt="E-mail"
                className={styles.icon}
                width={40}
                height={40}
                src={Mail}
              />
            </a>
          </div>
          <div className={styles.contact_btn}>
            <Link href="#contact">
              <button>Contact Me</button>
            </Link>
            <a href="/cv.pdf" target="_blank">
              <button>View CV</button>
            </a>
          </div>
        </div>
        <div className={styles.header_right}>
          <Lottie
            className={styles.animation}
            height={60}
            width={20}
            animationData={animation}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
