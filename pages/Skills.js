import { VscTerminalCmd } from "react-icons/vsc";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiNpm, DiNodejs } from "react-icons/di";
import { FaSass, FaYarn, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiNextdotjs } from "react-icons/si";
import { BsFillBootstrapFill,BsCheck } from "react-icons/bs";
import Lottie from "lottie-react";
import styles from "../styles/Skills.module.css";
import main_animation from "../assets/main_animation.json";

const Skills = () => {
  return (
    <div id="skill" className={styles.skill}>
      <div className={styles.skill_left}>
        <Lottie
          className={styles.animation}
          height={100}
          width={200}
          animationData={main_animation}
        />
      </div>
      <div className={styles.skill_right}>
        <h1>What i do</h1>
        <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
        <div className={styles.stacks}>
          <li>
            <AiFillHtml5 size="55px" className={styles.stack_icon} />
            HTML5
          </li>
          <li>
            <DiCss3 size="55px" className={styles.stack_icon} />
            CSS3
          </li>
          <li>
            <BsFillBootstrapFill size="55px" className={styles.stack_icon} />
            Bootstrap
          </li>
          <li>
            <FaSass size="55px" className={styles.stack_icon} />
            SASS
          </li>
          <li>
            <IoLogoJavascript size="55px" className={styles.stack_icon} />
            Javascript
          </li>
          <li>
            <FaReact size="55px" className={styles.stack_icon} />
            React.js
          </li>
          <li>
            <SiNextdotjs size="55px" className={styles.stack_icon} />
            Next.js
          </li>
          <li>
            <DiNodejs size="55px" className={styles.stack_icon} />
            Node
          </li>
          <li>
            <SiExpress size="55px" className={styles.stack_icon} />
            Express
          </li>
          <li>
            <DiNpm size="55px" className={styles.stack_icon} />
            Npm
          </li>
          <li>
            <FaYarn size="55px" className={styles.stack_icon} />
            Yarn
          </li>
          <li>
            <VscTerminalCmd size="55px" className={styles.stack_icon} />
            Cmd
          </li>
        </div>
        <ul className={styles.menu}>
        <li> <BsCheck className={styles.menu_icon}/> 
       
            Good Understanding of React, Javascript, HTML5 and CSS3 Flexbox and Grid 
          </li>
          <li>
          <BsCheck className={styles.menu_icon}/> 
          Ability to create reusable components using React and Next 
          </li>
          
          <li>
          <BsCheck className={styles.menu_icon}/> 
          Proficient understanding of versioning tools, such as Git
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;