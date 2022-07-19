import Navbar from "./Navbar"
import Header from '../pages/header'
import Skills from "../pages/Skills"
import Proficiency from "../pages/Proficiency"
import Education from "../pages/Education"
import Projects from "../pages/projects"
import Contact from "../pages/Contact"


const Layout=({children})=>{
  return <>
    <Navbar/>
    <Header/>
    <Skills/>
    <Proficiency/>
    <Education/>
    <Projects/>
    <Contact/>
    {children}
  </>
}

export default Layout