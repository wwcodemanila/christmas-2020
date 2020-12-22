import React from "react"

import Card from "components/ChristmasCards/Card"

import members from "./members.json"

const ChristmasCards = () => {
  return (
    <section className="flex flex-row flex-wrap w-3/5">
      {members.map(member => (
        <Card name={member.name} message={member.message} />
      ))}
    </section>
  )
}

export default ChristmasCards
