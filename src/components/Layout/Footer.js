import React from "react"

const Footer = () => {
  return (
    <footer className="flex items-center justify-between w-screen bg-blue-dark h-10 px-10 text-gray-50">
      <p className="text-gray-50">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a
          href="https://www.gatsbyjs.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Gatsby
        </a>
      </p>
      <p className="text-gray-50">
        by{" "}
        <a
          href="https://twitter.com/kimberrypi"
          target="_blank"
          rel="noreferrer noopener"
          className="font-bold"
        >
          @kimberrypi
        </a>
      </p>
    </footer>
  )
}

export default Footer
