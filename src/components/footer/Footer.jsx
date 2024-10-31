import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Adamu Abubakar | All right reserved |
        Creating Content for the Internet since 2012.
      </p>
    </footer>
  );
}

export default Footer;
