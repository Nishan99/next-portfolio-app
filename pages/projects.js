import styles from "../styles/Project.module.css";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import {SiNextdotjs,SiPrisma,SiTailwindcss } from "react-icons/si";
import { GoGraph } from "react-icons/go";
import Link from "next/link";
const Projects = () => {
  return (
    <div className={styles.project} id="project">
      <h1>Projects</h1>
      <div className={styles.project_main}>
         <div className={styles.project_each}>
          <h3>Dashboard Panel</h3>
          <p className={styles.project_desc}>
            Admin Panel where detail information is deplayed
          </p>
          <p className={styles.project_title}>Technologies</p>
          <div className={styles.project_icons}>
            <li>
              <AiFillHtml5 size="40px" className={styles.tech_icon} />
              HTML5
            </li>
            <li>
              <DiCss3 size="40px" className={styles.tech_icon} />
              CSS3
            </li>
            <li>
              <IoLogoJavascript size="40px" className={styles.tech_icon} />
              Javascript
            </li>
            <li>
              <FaReact size="40px" className={styles.tech_icon} />
              React.js
            </li>
          </div>
          <Link href="https://preeminent-tanuki-286df7.netlify.app/" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://preeminent-tanuki-286df7.netlify.app/"
            >
              <button className={styles.project_btn}>View Project</button>
            </a>
          </Link>
        </div>
        <div className={styles.project_each}>
          <h3>Flexibble App</h3>
          <p className={styles.project_desc}>Showcase your design portfolio here</p>
          <p className={styles.project_title}>Technologies</p>
          <div className={styles.project_icons}>
            <li>
              <SiNextdotjs size="40px" className={styles.tech_icon} />
              Next 13
            </li>
            <li>
              <GoGraph size="40px" className={styles.tech_icon} />
              Grafbase
            </li>
            <li>
              <SiPrisma size="40px" className={styles.tech_icon} />
              Prisma
            </li>
            <li>
              <GrGraphQl size="40px" className={styles.tech_icon} />
              GraphQl
            </li>
           
          </div>
          <Link href="https://grafbase-flexibble-two.vercel.app/" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://grafbase-flexibble-two.vercel.app/"
            >
              <button className={styles.project_btn}>View Project</button>
            </a>
          </Link>
        </div>
       
        <div className={styles.project_each}>
          <h3>CarDetails | CarHub</h3>
          <p className={styles.project_desc}>Cars list with their details...</p>
          <p className={styles.project_title}>Technologies</p>
          <div className={styles.project_icons}>
            <li>
              <AiFillHtml5 size="40px" className={styles.tech_icon} />
              HTML5
            </li>
            <li>
              <DiCss3 size="40px" className={styles.tech_icon} />
              CSS3
            </li>
            <li>
              <IoLogoJavascript size="40px" className={styles.tech_icon} />
              Javascript
            </li>
            <li>
              <FaReact size="40px" className={styles.tech_icon} />
              Next.js
            </li>
          </div>
          <Link href="https://next-carhub.vercel.app/" passHref>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://next-carhub.vercel.app/"
            >
              <button className={styles.project_btn}>View Project</button>
            </a>
          </Link>
        </div>
        
       
      </div>
     
    </div>
  );
};

export default Projects;
