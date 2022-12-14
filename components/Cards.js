import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../styles/project.module.css";
const Cards = ({ title, desc, badge, link, github }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ y: -10 }}
        className={styles.cards}
      >
        <div className={styles.cards_header}>
          <FiFolder size={40} style={{ color: "#2278fb" }} />
          <div className={styles.cards_external_links}>
            <Link href={github}>
              <FiGithub size={27} className={styles.github} />
            </Link>
            <Link href={link}>
              <FiExternalLink size={27} className={styles.folder} />
            </Link>
          </div>
        </div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <p className={styles.badge}>{badge}</p>
      </motion.div>
    </div>
  );
};

export default Cards;
