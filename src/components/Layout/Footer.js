import React from "react";
import { FaSquareXTwitter, FaSquareFacebook } from "react-icons/fa6";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h4>© {new Date().getFullYear()} tastebud.com</h4>
      <div className={classes.icons}>
        <FaSquareXTwitter size={32} />
        <FaSquareFacebook size={32} />
      </div>
      <p>
        Powered by <b>TasteBud</b>
      </p>
    </footer>
  );
};

export default Footer;
