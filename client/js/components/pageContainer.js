import React from 'react';
import Goals from './goals';
import Sticker from './sticker';
import NavBar from './navBar';

function Page() {
    return (
        <div className="container">
            <NavBar/>
            <h1 className="title">66 Days</h1>
            <h2 className="subtitle">Set goals, stick to them.</h2>
            <hr></hr>
            <h3>Your Goals</h3>
            <hr></hr>
            <Goals/>

            <div className="jumbotron">
                <h3>Stickers Earned</h3>
                <Sticker/>
            </div>
            <footer>*Source: "European Journal of Social Psychology"
  <div className="tagline">"On average, it takes more than two months before a new behavior becomes automatic — 66 days to be exact."*</div>
</footer>
        </div>
    )
}

export default Page
