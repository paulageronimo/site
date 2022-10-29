import React from "react"

import Layout from "../components/layout"
import Intro from "../components/intro"

const IndexPage = () => {
  return (
    <Layout>
      <Intro />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            emoji
            shortDesc
          }
          rawMarkdownBody
        }
      }
    }
  }
`

