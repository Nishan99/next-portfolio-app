import styles from '../styles/Proficiency.module.css'
import profiecency_animation from '../assets/profeciency_animation.json'
import Lottie from "lottie-react";
import { Line, Circle } from 'rc-progress';

const Proficiency =()=>{
  return (
    <div className={styles.proficiency}>
      <div className={styles.Proficiency_left}>
        <h1>Proficiency</h1>
        <div className={styles.level}>
          <p>Frontend</p>
        <Line percent={90} className={styles.level_line} strokeWidth={6} trailWidth={1} strokeColor="#2ecc71" trailColor='#16a085'/>

        </div>
        <div  className={styles.level}>
          <p>Backend</p>
        <Line percent={70}  className={styles.level_line} strokeWidth={6} trailWidth={2} strokeColor="#2ecc71" trailColor='#16a085' />

        </div>
        <div className={styles.level}>
          <p>Programming</p>
        <Line percent={80}  className={styles.level_line} strokeWidth={6} trailWidth={2} strokeColor="#2ecc71"  trailColor='#16a085'/>

        </div>
     {/* <Circle percent={10} strokeWidth={4} strokeColor="#D3D3D3" />  */}
      </div>
      <div  className={styles.Proficiency_right}>
      
      <Lottie
            className={styles.animation}
            height={60}
            width={20}
            animationData={profiecency_animation}
          />
      </div>
    </div>
  )
}

export default Proficiency  