import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RepoList from "../components/RepoList"
import { graphql } from 'gatsby'


const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <div>
      <h1>My repositories</h1>
      <RepoList repositories={data.github.search.nodes} />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

export const query = graphql`
query MyQuery {
  github {
    search(query: "org:Contino", type: REPOSITORY, first: 100) {
      nodes {
        ... on GitHub_Repository {
          id
          name
          url
          description
        }
      }
    }
  }
}
`