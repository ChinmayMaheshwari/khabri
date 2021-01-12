import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaFacebook, FaInstagram } from "react-icons/fa";
import { links } from "../data";
import { FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav className="sticky">
      <div className="nav-center">
        {/* <div className="nav-header"> */}
        {/* <img src={logo} className="logo" alt="logo" /> */}
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
        {/* </div> */}
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          <li>
            <a href="youtube.com">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="youtube.com">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="youtube.com">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
