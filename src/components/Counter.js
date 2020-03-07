import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {

    state = {
        count: 200
    }

    handleReset = () => {
        this.setState({ count: 0 })
        console.log("Counter Reset")
    }
    handleUp = () => {
        this.setState(prev => {
            return { count: prev.count + 1 }
        }
        )
        console.log("Counter Increse")
    }
    handleDown = () => {
        this.setState(prev => {
            return { count: prev.count - 1 }
        }
        )
        console.log("Counter Decrese")
    }

    render() {

        return (
            <div className="Counter">
                <p>{this.state.count}</p>
                <div>
                    <button onClick={this.handleDown}>Down</button>
                    <button onClick={this.handleReset}>Reset</button>
                    <button onClick={this.handleUp}>Up</button>
                </div>
            </div>
        )

    }
}

export default Counter;