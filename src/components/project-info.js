import { graphql } from "gatsby"

export const query = graphql`
  fragment ProjectInfo on MarkdownRemark {
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
`
