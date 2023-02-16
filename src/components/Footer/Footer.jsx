import React from "react";
import Logo from "../../fish.svg";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </footer>
  );
};
export default Footer;
