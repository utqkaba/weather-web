import React from "react";
import '../src/footer.css';
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="Footer">
    <hr className="style"/>
      <p className="name">
        Made by Utku KABA. 
        <br />
        <a href="https://www.github.com/utqkaba" target="blank"  > <FaGithub size="2em"/> </a>
      </p>
    </footer>
  );
}

export default Footer;