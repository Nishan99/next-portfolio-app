import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";



 

const Navbar = () => {
  const [activeMenu, setActivemenu] = useState(false)
  const mobileMenu=()=>{
    
    setActivemenu(!activeMenu)
  }

  return (
    <div className={`${styles.navbar} ${styles.scrolling_effect}`}>
      <Link href="/">
        <div className={styles.logo}>
          <span>&#60;</span>
          <span> Nishan</span>
          <span> &#47;&#62;</span>
        </div>
      </Link>
      <ul className={activeMenu ? `${styles.menu} ${styles.activeMenu}`:`${styles.menu}`}>
        <li onClick={mobileMenu}>
          <Link href="#skill">Skills</Link>
        </li>
        <li onClick={mobileMenu}>
          <a href="#education">Education</a>
        </li>
        <li onClick={mobileMenu}>
          <Link href="#project">Project</Link>
        </li>
        <li onClick={mobileMenu}>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.mobile_menu} onClick={mobileMenu}>
        {activeMenu ?<AiOutlineClose className={styles.menu_icon}/> :<HiOutlineMenuAlt3 className={styles.menu_icon}/>}
        
      </div>
    </div>
  );
};

export default Navbar; 
