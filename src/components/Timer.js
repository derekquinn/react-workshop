import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {

    state = {
        startTime: null,
        elapsed: 0
    }

    handleStart = () => {
        this.setState({
            startTime: new Date(),
            elapsed: 0
        })
        this.interval = setInterval(this.timerTick, 1000);

    }

    timerTick = () => {


        this.setState(prev => {
            return { elapsed: prev.elapsed + 1 }
        })

        console.log('tick')

    }

    handleStop = () => {
        clearInterval(this.interval); // stop the ticking!	    clearInterval(this.interval); // stop the ticking!
        this.setState({ startTime: null, elapsed: 0 });
    }

    render() {

        let startTime;
        if (this.state.startTime) {
            startTime = this.state.startTime.toLocaleTimeString();
        } else {
            startTime = "Stopped";
        }



        return (
            <div className="Timer">

                <p><b>Start Time</b> </p>
                <p><i>{startTime} </i></p>
                <p><b>Elapsed Time</b></p>
                <i> {this.state.elapsed}s</i>
                <p>
                    {this.state.startTime === null ?
                        <button onClick={this.handleStart}>START</button> :
                        <button onClick={this.handleStop}>STOP</button>
                    }
                </p>


            </div>
        )

    }

}
export default Timer; 
