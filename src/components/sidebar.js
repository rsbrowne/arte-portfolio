import React from "react"
import { Link } from "gatsby"

import Navigation from "./navigation"

import logo from "../images/logo.svg"

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__title">
          <Link to="/">
            <h4>Artemisia Bellamy</h4>
            <h5>UX Designer</h5>
          </Link>
        </div>
        <Navigation />
      </div>
    </aside>
  )
}

export default Sidebar
