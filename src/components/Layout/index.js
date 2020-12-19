import React, { Fragment } from "react"
import PropTypes from "prop-types"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <section className="flex w-screen h-screen items-center justify-center sm:visible md:visible lg:invisible xl:invisible 2xl:invisible">
        <h1 className="text-lg">You'll enjoy this better on desktop!</h1>
      </section>
      <main className="bg-gray-600 sm:invisible md:invisible lg:visible xl:visible 2xl:visible">
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
