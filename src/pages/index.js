// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm making this by following rhw Gatsby Tutorial</p>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage