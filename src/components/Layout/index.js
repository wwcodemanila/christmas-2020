import React, { Fragment } from "react"
import PropTypes from "prop-types"
import bg from "images/temp-background.png"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <main
        className="bg-no-repeat bg-top bg-contain h-screen from-yellow-400 to-gray-400"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <section className="sm:p2 md:p-4 lg:p-10 2xl:p-10">{children}</section>
      </main>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
