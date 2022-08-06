import styles from "../styles/contact.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
const contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={styles.contact_container}
      id="contacts"
    >
      <h3>Interested? 🤔</h3>
      <h1>Tell me about it.</h1>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        I am currently looking to join a team of creative designers and
        developers. If you think I might be a good fit to your team, give me a{" "}
        <Link href="/">call </Link>🤳 or send me an{" "}
        <Link
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=polekenneth11@gmail.com"
          target="_blank"
        >
          email 📧.
        </Link>
      </motion.h2>
    </motion.div>
  );
};

export default contact;
