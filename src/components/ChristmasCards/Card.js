import React from "react"

const Card = ({ name, message }) => {
  return (
    <div
      className={`border border-gray-200 bg-gray-50 rounded max-w-xs max-h-md p-2 m-3`}
    >
      <div>
        <div className="font-medium text-gray-900 sm:text-md md:text-lg lg:text-lg xl:text-lg 2xl:text-lg">
          "{message}"
        </div>
        <div className="sm:text-sm md:text-md lg:text-md xl:text-lg 2xl:text-lg text-gray-500">
          - {name}
        </div>
      </div>
    </div>
  )
}

export default Card
