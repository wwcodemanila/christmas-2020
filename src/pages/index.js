import React from "react"

import Layout from "Layout"
import SEO from "Layout/SEO"
import ChristmasCards from "../components/ChristmasCards"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <ChristmasCards />
    </Layout>
  )
}

export default IndexPage
