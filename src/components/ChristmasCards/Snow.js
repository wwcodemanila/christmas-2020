import React from "react"

const Snow = () => {
  const snowflakes = ["❅", "❅", "❆", "❄", "❅", "❆", "❄", "❅", "❆", "❄"]
  return (
    <div className="snowflakes" aria-hidden="true">
      {snowflakes.map(snowflake => (
        <div className="snowflake" key={snowflake}>
          {snowflake}
        </div>
      ))}
    </div>
  )
}

export default Snow
