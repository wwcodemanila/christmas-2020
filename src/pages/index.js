import React, { useEffect, useState } from "react"

import Layout from "Layout"
import SEO from "Layout/SEO"

import Window from "components/Window"

const IndexPage = () => {
  const [mousePositions, setMousePositions] = useState([])

  useEffect(() => {
    let positionsList = [...mousePositions]

    onmousemove = event => {
      const screenPosition = { left: event.screenX, top: event.screenY }
      positionsList.push(screenPosition)
      setMousePositions(positionsList)
    }
  }, [mousePositions])

  return (
    <Layout>
      <SEO title="Home" />
      {mousePositions.map((position, index) => (
        <Window position={position} key={index} />
      ))}
    </Layout>
  )
}

export default IndexPage
