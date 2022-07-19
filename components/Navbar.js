import Link from "next/link";
import styles from "../styles/Navbar.module.css";



 

const Navbar = () => {

  return (
    <div className={`${styles.navbar} ${styles.scrolling_effect}`}>
      <Link href="/">
        <div className={styles.logo}>
          <span>&#60;</span>
          <span> Nishan</span>
          <span> &#47;&#62;</span>
        </div>
      </Link>
      <ul className={styles.menu}>
        <li>
          <Link href="#skill">Skills</Link>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <Link href="#project">Project</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
