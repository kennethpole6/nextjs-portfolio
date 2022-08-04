import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "../styles/navbar.module.css";

const navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_links}>
        <motion.div
          whileHover={{ y: -5, scale: 1.1, rotate: -5 }}
          className={styles.navbar_logo}
        >
          <Link href="/">{`{kp}`}</Link>
        </motion.div>

        <div className={styles.navbar_links_container}>
          <Link href="#projects">Projects</Link>
          <Link href="#abouts">About</Link>
          <Link href="#contacts">Contact</Link>
        </div>
      </div>
      <div className={styles.navbar_cta}>
        <a href="#">
          <FaFacebook size={24} />
        </a>
        <a href="#">
          <FaLinkedin size={24} />
        </a>
        <a href="#">
          <FaGithub size={24} />
        </a>
      </div>

      <div className={styles.navbar_menu}>
        {toggleMenu ? (
          <FiX size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <FiMenu size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <motion.div
            animate={{ y: -5, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className={styles.navbar_menu_container}
          >
            <div className={styles.navbar_menu_links}>
              <Link href="#projects">Projects</Link>
              <Link href="#abouts">About</Link>
              <Link href="#contacts">Contact</Link>
              <div className={styles.navbar_menu_cta}>
                <a href="#">
                  <FaFacebook size={24} />
                </a>
                <a href="#">
                  <FaLinkedin size={24} />
                </a>
                <a href="#">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default navbar;
