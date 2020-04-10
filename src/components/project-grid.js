import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const ProjectGrid = ({ data }) => {
  const { edges: projects } = data.allMarkdownRemark

  return (
    <div className="project-grid">
      {projects &&
        projects.map(({ node: { frontmatter: project } }, key) => (
          <Link
            to={`/${project.slug}`}
            aria-label={project.title}
            className={`project-grid__item project-grid__item--${project.slug}`}
          >
            <Img fluid={project.cover.childImageSharp.fluid} />
          </Link>
        ))}
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProjectListQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                slug
                cover {
                  childImageSharp {
                    fluid(maxWidth: 1600) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <ProjectGrid data={data} />}
  />
)
