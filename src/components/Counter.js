import React, { Component } from 'react';
import PosNegNumber from './PosNegNumber';
import './Counter.css';

class Counter extends Component {

    state = {
        count: 200
    }

    handleReset = () => {
        this.setState({ count: 0 })
        console.log("Counter Reset")
    }
    handleCount = (diff) => {

        this.setState(prev => {
            return { count: prev.count + diff }
        })
    }


    render() {
        let additionClass = ""
        if (this.state.count < 0) {
            additionClass = " negative"
        }
        return (
            <div className={"Counter" + additionClass}>


                <PosNegNumber number={this.state.count}> </PosNegNumber>


                <div>
                    <button onClick={() => this.handleCount(-1)}> Down</button>
                    {this.state.count !== 0 &&
                        <button onClick={this.handleReset}>Reset</button>}
                    <button onClick={() => this.handleCount(1)}>Up</button>
                </div>
            </div>
        )

    }
}

export default Counter;