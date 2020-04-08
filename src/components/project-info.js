import { graphql } from "gatsby"

export const query = graphql`
  fragment ProjectInfo on MarkdownRemark {
    frontmatter {
      cover {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
