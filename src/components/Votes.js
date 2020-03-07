import React, { Component } from 'react';
import './Votes.css';

class Votes extends Component {


    state = {

        chocolate: 0,
        vanilla: 0,
        strawberry: 0,


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

        } else {
            this.setState(prev => {
                return { strawberry: prev.strawberry + 1 }

            })
            console.log("Strawberry Vote")
        }



        
       
    }




    render() {



        let total = this.state.chocolate + this.state.strawberry + this.state.vanilla; 
        if(total === 0 ){
            total = 1
        }
        let percentChocolate = (this.state.chocolate / total) * 100;
        let percentVanilla = (this.state.vanilla / total) * 100;
        let percentStrawberry = (this.state.strawberry / total) * 100;

    

        return (
            <div className="Votes">
                <p><b>Chocolate</b></p>
                <p>{this.state.chocolate}</p>
                <p>{percentChocolate}%</p>
                <p><b>Vanilla</b></p>
                <p>{this.state.vanilla}</p>
                <p>{percentVanilla}%</p>
                <p><b>Strawberry:</b></p>
                <p>{this.state.strawberry}</p>
                <p>{percentStrawberry}%</p>
                <button onClick={() => this.handleVote("chocolate")}>Chocolate</button>
                <button onClick={() => this.handleVote("vanilla")}>Vanilla</button>
                <button onClick={() => this.handleVote("strawberry")}>Strawberry</button>
                <p>Total Vote = {total}</p>
            </div>

        )


    }
}

export default Votes; 