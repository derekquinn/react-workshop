import React, { Component } from 'react';

class Counter extends Component {

    render() {

        return (
            <div className="Counter">
                <p><h3>0</h3></p>
                <div><button>Down</button>
                <button>Reset</button>
                <button>Up</button></div>
            </div>
        )
    }
}

export default Counter;