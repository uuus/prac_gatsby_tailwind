import { graphql } from "gatsby"
import * as React from "react"

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string
      }
    }
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

const Index = (props: IndexPageProps) => {
  const hello = `Hello`;
  const { siteName } = props.data.site.siteMetadata
  return (
    <>
      <h1>{ hello } TypeScript world!</h1>
      <p>
        This site is named <strong>{siteName}</strong>
      </p>
    </>
  )
}

export default Index;