import React, { Component } from 'react';
import './Votes.css';

class Votes extends Component {


    state = {

        chocolate: 0,
        vanilla: 0,
        strawberry: 0

    }
    handleVote = (vote) => {
        if (vote === "chocolate") {

            this.setState(prev => {
                return { chocolate: prev.chocolate + 1 }

            })
            console.log("Chocolate vote")
        } else if (vote === "vanilla") {
           
            this.setState(prev => {
                return { vanilla: prev.vanilla + 1 }

            })
            console.log("Vanilla Vote")

        } else

            this.setState(prev => {
                return { strawberry: prev.strawberry + 1 }

            })
        console.log("Strawberry Vote")

    }




    render() {


        return (
            <div className="Votes">
                <p>Chocolate</p>
                <p>{this.state.chocolate}</p>
                <p>Vanilla</p>
                <p>{this.state.vanilla}</p>
                <p>Strawberry:</p>
                <p>{this.state.strawberry}</p>
                <button onClick={() => this.handleVote("chocolate")}>Chocolate</button>
                <button onClick={() => this.handleVote("vanilla")}>Vanilla</button>
                <button onClick={() => this.handleVote("strawberry")}>Strawberry</button>

            </div>

        )


    }
}

export default Votes; 