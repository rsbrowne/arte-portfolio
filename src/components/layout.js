import React from 'react'

import '../styles/main.scss'

const Layout = (props) => {

  return (
    <div className="page-container">
      <Sidebar></Sidebar>
      <div className="page-content">
        {props.children}
      </div>
    </div>
  )
}

export default Layout