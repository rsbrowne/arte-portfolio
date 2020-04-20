import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer">
    <h3 className="footer__text">Want to get in touch?</h3>
    <Link className="button" to="/contact">
      Contact me
    </Link>
  </footer>
)

export default Footer
