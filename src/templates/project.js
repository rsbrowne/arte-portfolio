import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        title_detail
        slug
        color
        cover {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`

const ProjectPage = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
}) => {
  return (
    <Layout>
      <div className="project">
        <div className="project__intro">
          <h3 className="project__subtitle">Project</h3>
          <h1 className="project__title">{frontmatter.title}</h1>
          <div
            className="project__content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
        <div
          className="project__images"
          style={{ backgroundColor: frontmatter.color }}
        ></div>
        <div className="project__footer"></div>
      </div>
    </Layout>
  )
}

export default ProjectPage
