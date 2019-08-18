import React from 'react'

import '../styles/main.scss'

const Layout = (props) => {

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}

export default Layout