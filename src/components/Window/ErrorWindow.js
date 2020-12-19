import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ErrorWindow = ({ position }) => {
  const data = useStaticQuery(graphql`
    query {
      ie: file(relativePath: { eq: "ie-logo.png" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div
      className="w-4/12 h-auto bg-white"
      style={{
        position: "absolute",
        float: "left",
        left: position.left,
        top: position.top - 10,
      }}
    >
      <div class="shadow border border-gray-900">
        <div className="bg-gradient-to-r from-blue-dark to-blue-light shadow overflow-hidden p-2">
          <p className="text-lg leading-6 font-normal text-gray-50">Explorer</p>
        </div>
        <div className="bg-gray-50 flex flex-row flex-nowrap h-30 justify-center items-center px-10 py-2 font-bold">
          <p className="font-bold flex-1">
            Explorer has encountered a problem and needs to close. We are sorry
            for the inconvenience.
          </p>
          <Img fixed={data.ie.childImageSharp.fixed} />
        </div>
        <div className="bg-gray-200 px-10 py-2">
          <p className="mb-2">
            If you were in the middle of something, the information you were
            working on might be lost.
          </p>
          <p className="font-bold mb-2">Please tell me about this problem.</p>
          <p className="mb-2">
            We have created an error report that you can send to help us improve
            Explorer. We will treat this report as confidential and anonymous.
          </p>

          <p className="mt-4 mb-2">
            To see what this error report contains,{" "}
            <span className="text-blue text-underline">click here</span>.
          </p>

          <div class="mt-5 flex lg:mt-0 flex-row-reverse w-100">
            <span class="hidden sm:block ml-3">
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-900 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Error Report
              </button>
            </span>
            <span class="hidden sm:block ml-3">
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 border border-gray-500 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Don't Send
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorWindow
