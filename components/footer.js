import styles from "../styles/footer.module.css";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import Link from "next/link";
import { motion } from "framer-motion";
const footer = () => {
  return (
    <footer className={styles.footer_container}>
      <motion.div
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className={styles.footer_logo}
      >
        <Link href="/">{`{kp}`}</Link>
      </motion.div>
      <div className={styles.footer_social}>
        <a href="https://www.instagram.com/kennethpole10/">
          📸 Instagram
          {/* <SiInstagram size={25} /> */}
        </a>
        <a href="https://github.com/kennethpole6">
          🖥 Github
          {/* <SiGithub size={25} /> */}
        </a>
        <a href="https://www.linkedin.com/in/kenneth-pole/">
          📱 LinkedIn
          {/* <SiLinkedin size={25} /> */}
        </a>
      </div>
    </footer>
  );
};

export default footer;
