import styles from "../styles/about.module.css";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiSass,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";

const about = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={styles.about_container}
      id="abouts"
    >
      <h1>About Me.</h1>
      <h2>
        Hello there, my name is Kenneth Pole. I love to create and deliver
        end-to-end <span>UI/UX design</span> and <span>development</span> for
        software products. I'm passionate in continuous learning and improvement
        and constanty looking to learn new things everyday.
      </h2>
      <p>Here are some tech stack I've been working recently.</p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.stacks}
      >
        <motion.div
          whileHover={{ scale: 1.1, y: -5, color: "#e85c90" }}
          whileTap={{ scale: 0.8 }}
          className={styles.stacks_icon}
        >
          <SiHtml5 size={35} />
          <h5>HTML5</h5>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, y: -5, color: "#e85c90" }}
          whileTap={{ scale: 0.8 }}
          className={styles.stacks_icon}
        >
          <SiSass size={35} />
          <h5>SCSS</h5>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, y: -5, color: "#e85c90" }}
          whileTap={{ scale: 0.8 }}
          className={styles.stacks_icon}
        >
          <SiJavascript size={35} />
          <h5>ES6</h5>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, y: -5, color: "#e85c90" }}
          whileTap={{ scale: 0.8 }}
          className={styles.stacks_icon}
        >
          <SiReact size={35} />
          <h5>REACT</h5>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, y: -5, color: "#e85c90" }}
          whileTap={{ scale: 0.8 }}
          className={styles.stacks_icon}
        >
          <SiNextdotjs size={35} />
          <h5>NEXT JS</h5>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, y: -5, color: "#e85c90" }}
          whileTap={{ scale: 0.8 }}
          className={styles.stacks_icon}
        >
          <SiFramer size={35} />
          <h5>FRAMER</h5>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default about;
