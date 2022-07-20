import styles from '../styles/Project.module.css'
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { DiCss3} from "react-icons/di";
import {  FaReact } from "react-icons/fa";
import Link from 'next/link'
const Projects=()=>{
  return(
    <div className={styles.project} id='project'>
        <h1>Projects</h1>
        <div className={styles.project_main}>
          <div className={styles.project_each}>
            <h3>Dashboard Panel</h3>
            <p className={styles.project_desc}>Admin Panel where detail information is deplayed</p>
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
            <Link href="https://nishan-dahboard.netlify.app/">
            <button className={styles.project_btn}>View Project</button>
            </Link>
          </div>
          <div className={styles.project_each}>
            <h3>Product Website</h3>
            <p className={styles.project_desc}>Single Landing web page to showcase product information</p>
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
            <Link href="https://business-project.netlify.app/">
            <button className={styles.project_btn}>View Project</button>
            </Link>
          </div>
          <div className={styles.project_each}>
            <h3>Travel Website</h3>
            <p className={styles.project_desc}>Travel website </p>
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
         
            </div>
            <Link href="https://upbeat-shannon-25ad23.netlify.app/">
            <button className={styles.project_btn}>View Project</button>
            </Link>
          </div>
         
        </div>
    </div>
  )
}

export default Projects