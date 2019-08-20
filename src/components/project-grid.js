import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ProjectInfo from "../components/project-info"

const ProjectGrid = () => {
  const projects = useStaticQuery(graphql`
    query {
      prwd: allMarkdownRemark(filter: {frontmatter: {title: {eq: "PRWD"}}}) {
        edges {
          node {
            ...ProjectInfo
          }
        }
      },
      allianz: allMarkdownRemark(filter: {frontmatter: {title: {eq: "Allianz UK"}}}) {
        edges {
          node {
            ...ProjectInfo
          }
        }
      },
      kumon: allMarkdownRemark(filter: {frontmatter: {title: {eq: "Kumon"}}}) {
        edges {
          node {
            ...ProjectInfo
          }
        }
      },
      pf: allMarkdownRemark(filter: {frontmatter: {title: {eq: "PF"}}}) {
        edges {
          node {
            ...ProjectInfo
          }
        }
      },
    }
  `)

  return (
    <div className="project-grid">
      <Link to="/" aria-label="PWRD" className="project-grid__item project-grid__item--pwrd">
        <Img fluid={projects.prwd.edges[0].node.frontmatter.cover.childImageSharp.fluid} />
      </Link>
      <Link to="/" aria-label="Allianz-UK" className="project-grid__item project-grid__item--allianz-uk">
        <Img fluid={projects.allianz.edges[0].node.frontmatter.cover.childImageSharp.fluid} />
      </Link>
      <Link to="/" aria-label="Kumon" className="project-grid__item project-grid__item--kumon">
        <Img fluid={projects.kumon.edges[0].node.frontmatter.cover.childImageSharp.fluid} />
      </Link>
      <Link to="/" aria-label="PF" className="project-grid__item project-grid__item--allianz-pf">
        <Img fluid={projects.pf.edges[0].node.frontmatter.cover.childImageSharp.fluid} />
      </Link>
    </div>
  )
}

export default ProjectGrid
