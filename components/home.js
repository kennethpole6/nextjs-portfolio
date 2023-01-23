import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const home = () => {
  return (
    <>
      <div className={styles.header_container}>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={styles.header_container_sub}
          >
            Let's turn your ideas into a <span>real-world </span>
            projects.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hello there 👋, my name is Kenneth and I am a front-end developer,
            I'm passionate about UX Design and building web that client needs.
          </motion.p>
          <motion.div whileHover={{ x: 10 }} style={{ width: "fit-content" }}>
            <Link href="#contacts">GOT IDEAS? LET'S BUILD</Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default home;
