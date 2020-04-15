import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Footer from "../components/footer"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        title_detail
        slug
        color
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image_alt
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
        >
          {frontmatter.images &&
            frontmatter.images.map((image, i) => (
              <Img
                fluid={image.image.childImageSharp.fluid}
                key={`Image ${i}`}
                alt={image.image_alt}
              />
            ))}
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default ProjectPage
