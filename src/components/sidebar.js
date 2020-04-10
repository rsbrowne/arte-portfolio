import React, { Fragment } from "react"
import { Link } from "gatsby"
import useWindowSize from "./helpers/windowsize"

import Navigation from "./navigation"

const Sidebar = () => {
  const { width } = useWindowSize()

  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__title">
          <Link to="/">
            {width > 600 && (
              <Fragment>
                <h4>Artemisia Bellemy</h4>
                <h5>UX Designer</h5>
              </Fragment>
            )}
            {width <= 600 && <h4>AB</h4>}
          </Link>
        </div>
        <Navigation />
      </div>
    </aside>
  )
}

export default Sidebar
