import Link from "next/link";
import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 &copy; Khoi T.</p>
      <p className="text-black">Portfolio Purpose Only</p>
      <p className="icons">
        <Link href="https://www.linkedin.com/in/johntrinhnhat/">
          <AiFillLinkedin />
        </Link>
        <Link href="https://github.com/johntrinhnhat">
          <AiFillGithub />
        </Link>
        <Link href="https://www.facebook.com/johntrinhnhat/">
          <AiFillFacebook />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
