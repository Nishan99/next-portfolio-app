import { TbMinusVertical } from "react-icons/tb";
import styles from "../styles/Education.module.css";
import Education_animation from "../assets/Education.json";
import line_animation from "../assets/line_animation.json";
import Lottie from "lottie-react";
import Image from "next/image";
import islington_img from "../assets/islington_img.png";
import londonmet_img from "../assets/london_met.png";
import crimson_img from "../assets/crimson_img.jpg";
import oxford_img from "../assets/oxford_img.jpg";

const Education = () => {
  return (
    <div  className={styles.education_main}>
          <h1 id='education' className={styles.education_heading}>Education</h1>
      <div className={styles.education}>
        <div className={styles.education_left}>
          <Lottie
            className={styles.edu_animation}
            height={10}
            width={10}
            animationData={Education_animation}
          />
        </div>
        <div className={styles.education_right}>
          <div className={styles.study_flex}>
          
            <div className={styles.study_left}>
              <Image alt='islington college' className={styles.study_img} src={londonmet_img} />
            </div>
            <div className={styles.study_right}>
              <p className={styles.date}>September 2020 - April 2022</p>
              <p className={styles.college}>London Metropolitan University</p>
              <p className={styles.std_level}>BSC in Computing</p>
              <li>Kamal Pokhari, Kathmandu</li>
            </div>
          </div>
          <div className={styles.study_flex}>
          
            <div className={styles.study_left}>
              <Image alt='Crimson Technical College' className={styles.study_img} src={crimson_img} />
            </div>
            <div className={styles.study_right}>
              <p className={styles.date}>August 2017 - April 2020</p>
              <p className={styles.college}>Crimson Technical College</p>
              <p className={styles.std_level}>Diploma in Computer Engineering</p>
              <li>Devinagar, Butwal</li>
            </div>
          </div>
          <div className={styles.study_flex}>
          
            <div className={styles.study_left}>
              <Image alt='Oxford School' className={styles.study_img} src={oxford_img} />
            </div>
            <div className={styles.study_right}>
              <p className={styles.date}>September 2006 - April 2016</p>
              <p className={styles.college}>Oxford Secondary School</p>
              <p className={styles.std_level}>SLC</p>
              <li>Butwal, Sukkhanagar</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
