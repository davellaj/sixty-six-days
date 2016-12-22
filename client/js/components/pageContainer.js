import React from 'react'
import Goals from './goals'
import Sticker from './sticker'
import NavBar from './navBar'

function Page() {
  return (
    <div className="container">
      <NavBar />
        <h3>Your Goals</h3>
      <Goals />
      <div className="jumbotron">
        <h3>Stickers</h3>
        <Sticker />
      </div>
    </div>
  )
}

export default Page
