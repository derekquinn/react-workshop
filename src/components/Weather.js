import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {
    render() {
        // let conditionColor;

        // if (this.props.condition === "Sunny") {
        //     this.conditionColor === "yellow"
        // } else {
        //     this.conditionColor === "white"
        // }

        return (

            <div className="Weather" >

                <h3>Forecast</h3>
                <p>
                    {this.props.condition}
                </p>

                <p>
                    <label>High Temp: </label> {this.props.highTemp}
                </p>

                <p>
                    <label>Low Temp: </label> {this.props.lowTemp}
                </p>
            </div>

        )

    }

} export default Weather