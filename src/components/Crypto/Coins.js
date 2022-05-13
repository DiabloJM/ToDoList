import React, { Component } from 'react';
import './Coins.css';

class Coins extends Component {
    constructor() {
        super();

        this.state={
            dolars: 0
        }
    }

    getDolars = (input) => {
        this.setState({ 
            dolars: input.target.value
        })
    }

    dolarsToCoins = (dolars) => {
        let coins = dolars / 10;

        if(dolars % 10 === 0)
        {
            return `Pudes comprar ${coins} monedas`;
        }
        else
        {
            return `Pudes comprar    monedas`;
        }
    }

    render() {
        return (
            <div className="Crypto">
                <div className="title">
                    Compra Crypto Coins
                </div>

                <div className="dolars">
                    Dolares a invertir
                </div>

                <input type = 'number' onChange={this.getDolars}/>

                <div className="price">
                    Precio de Cripto moneda: $10
                </div>  

                <div className="result">
                    {this.dolarsToCoins(this.state.dolars)}
                </div>             
            </div>
        );
    }
}

export default Coins;