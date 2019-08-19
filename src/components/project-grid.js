import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const ProjectGrid = () => {
  const projects = useStaticQuery(graphql`
    query {
      prwd: allMarkdownRemark(filter: {frontmatter: {title: {eq: "PRWD"}}}) {
        edges {
          node {
            frontmatter {
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="project-grid">
      <Link to="/" aria-label="PWRD" className="project-grid__item project-grid__item--pwrd">
        <Img fluid={projects.prwd.edges[0].node.frontmatter.cover.childImageSharp.fluid} />
      </Link>
    </div>
  )
}

export default ProjectGrid
