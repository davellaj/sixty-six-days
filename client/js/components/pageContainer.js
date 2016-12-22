import React from 'react'
import Goals from './goals'
import Sticker from './sticker'
import Funds from './funds'
import NavBar from './navBar'

function Page() {
  return (
    <div className="container">
      <NavBar />
      <div className="jumbotron">
        <Funds />
        <Sticker />
      </div>
      <Goals />
    </div>
  )
}

export default Page
