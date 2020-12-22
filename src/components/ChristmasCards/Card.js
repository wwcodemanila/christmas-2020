import React from "react"

const Card = ({ name, message }) => {
  return (
    <div
      className={`border border-gray-200 bg-gray-50 rounded max-w-xs max-h-md p-2 m-3`}
    >
      <div>
        <div className="font-medium text-gray-900 text-2xl">{name}</div>
        <div className="text-md text-gray-500">{message}</div>
      </div>
    </div>
  )
}

export default Card
