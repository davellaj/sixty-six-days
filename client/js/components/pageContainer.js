import React from 'react'
import Goals from './goals'
import Sticker from './sticker'
import NavBar from './navBar'

function Page() {
  return (
    <div className="container">
      <NavBar />
        <h1 className="title">66 Days</h1>
        <hr></hr>
        <p className="subtitle">On average, it takes more than two months before a new behavior becomes automatic — 66 days to be exact.</p>
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
