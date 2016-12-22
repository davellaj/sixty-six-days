import React from 'react'
import Goals from './goals'
import Sticker from './sticker'
import Motivation from './motivation'
import Funds from './funds'

function Page() {
  return (
    <div className="container">
      <div className="jumbotron">
        <Funds />
        <Sticker />
        <Motivation />
      </div>
      <Goals />
    </div>
  )
}

export default Page
