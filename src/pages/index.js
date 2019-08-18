import React from "react"

import Layout from '../components/layout'
import Sidebar from './sidebar';
import ProjectGrid from './project-grid';

import '../styles/main.scss'

const IndexPage = () => {

  return (
    <Layout>
      <ProjectGrid></ProjectGrid>
    </Layout>
  )
}

export default IndexPage