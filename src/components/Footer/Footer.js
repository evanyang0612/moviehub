import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [githubHovered, setGithubHovered] = useState(false);
  const [globalHovered, setGlobalHovered] = useState(false);
  const [mailHovered, setMailHovered] = useState(false);
  const year = new Date().getFullYear();

  const githubClassname = githubHovered
    ? "ri-github-fill footer-icon"
    : "ri-github-line footer-icon";
  const globalClassname = globalHovered
    ? "ri-global-fill footer-icon"
    : "ri-global-line footer-icon";
  const mailClassname = mailHovered
    ? "ri-mail-fill footer-icon"
    : "ri-mail-line footer-icon";

  return (
    <div className="footer">
      <h3 className="footer-copyright">
        Copyright © {year} Developed by Evan Yang. All rights reserved.
      </h3>
      <h3 className="footer-find">Find me on</h3>
      <a
        href="https://github.com/evanyang0612"
        onMouseEnter={() => setGithubHovered(true)}
        onMouseLeave={() => setGithubHovered(false)}
      >
        <i className={githubClassname}></i>
      </a>
      <a
        href="https://evan-personal-blog.vercel.app/"
        onMouseEnter={() => setGlobalHovered(true)}
        onMouseLeave={() => setGlobalHovered(false)}
      >
        <i className={globalClassname}></i>
      </a>
      <a
        href="mailto:blacksheet0612@gmail.com"
        onMouseEnter={() => setMailHovered(true)}
        onMouseLeave={() => setMailHovered(false)}
      >
        <i className={mailClassname}></i>
      </a>
    </div>
  );
}
