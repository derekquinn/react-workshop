import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {

    render() {
        return (
            <div className="Timer">
    
                <p><b>Start Time</b> </p>
                <p><i>4:20:00 PM </i></p>
                <p><b>Elapsed</b></p>
                <i> 0s </i>
                <p>       <button>START</button><button>STOP</button></p>
        
               
            </div>
        )

    }

}

export default Timer; 
