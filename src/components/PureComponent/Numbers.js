import React, { Component } from 'react';
import './Numbers.css';

class Numbers extends Component {

    constructor() {
        super();
        this.state = {
            array: [],
        }
    }

    onChangeInput = (input) => {
        const arrayDigits = Array.from(String(input.target.value), Number);
        const sum = arrayDigits.reduce(
            (previousValue, currentValue) => previousValue + currentValue);

        this.setState(previousState =>({
            array: [...previousState.array, sum],
        }))
    }

    render() {
        return (
            <div>
                <input
                    type="number"
                    onChange = {(input)=>{this.onChangeInput(input)}}
                />

                <ul>
                    {this.state.array.map((num) => <h2>{num}</h2>) }

                </ul>                
            </div>
        );
    }
}

export default Numbers;