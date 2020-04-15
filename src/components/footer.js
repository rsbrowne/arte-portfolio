import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer">
    <h4 className="footer__text">Want to get in touch?</h4>
    <Link className="button" to="/contact">
      Contact me
    </Link>
  </footer>
)

export default Footer
