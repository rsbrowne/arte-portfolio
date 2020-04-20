import React from "react"
import { Link } from "gatsby"

import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.svg"
import linkedin from "../images/linkedin.svg"

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__inner">
        <li className="navigation__item">
          <Link to="/about">About</Link>
        </li>
        <li className="navigation__item">
          <Link to="/cv">CV</Link>
        </li>
        <li className="navigation__item">
          <div className="navigation__social">
            <a href="#">
              <img src={twitter} alt="twitter" className="navigation__icon" />
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin" className="navigation__icon" />
            </a>
            <a href="#">
              <img
                src={instagram}
                alt="instagram"
                className="navigation__icon"
              />
            </a>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
