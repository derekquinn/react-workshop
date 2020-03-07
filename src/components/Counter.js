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
    handleCount = (diff)=> {
        if(diff = -1){
            console.log("Counter decrease")
        } else{
            console.log("Counter increase")
        }
        this.setState(prev => {
            return {count: prev.count + diff}
        })
    }


    render() {
        let additionClass = ""
        if (this.state.count < 0 ){
            additionClass = " negative"
        }
        return (
            <div className={"Counter" + additionClass}>
                <p>{this.state.count}</p>
                <div>
                    <button onClick={()=> this.handleCount(-1)}> Down</button>
                    <button onClick={this.handleReset}>Reset</button>
                    <button onClick={()=> this.handleCount(1)}>Up</button>
                </div>
            </div>
        )

    }
}

export default Counter;