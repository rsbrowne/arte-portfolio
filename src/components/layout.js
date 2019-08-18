import React from 'react'

import '../styles/main.scss'
import Sidebar from './sidebar';

const Layout = (props) => {

  return (
    <React.Fragment>
      <Sidebar></Sidebar>
      {props.children}
    </React.Fragment>
  )
}

export default Layout