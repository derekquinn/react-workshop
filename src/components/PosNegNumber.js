import React, { Component } from 'react';
import './PosNegNumber.css'

class PosNegNumber extends Component {





    render() {
        let displayColor;

        if (this.props.number === 0){
            displayColor = "black";
        } else if (this.props.number > 0){
            displayColor = "blue";
        } else{
            displayColor = "red";
        }


        return (
            <span className = "PosNegNumber" style={{color: displayColor}}>
                {this.props.number}
            </span>
        )
    }

} export default PosNegNumber