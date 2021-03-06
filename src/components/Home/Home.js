import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            name: 'Diablo',
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'Fernando'
            })
        }, 2000);
    }

    render() {
        const buttonStyle={
            backgroundColor:'gray',
            border: '1px solid red',
        }

        const {name} = this.state;

        //console.log(name);
        return (
            <div className="Home">
              <h1>{name}</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Rick Roll</a>
            
              <div>
                  {/*Styles inline*/}
                    <button style={{
                        backgroundColor:'red',
                        border: '1px solid black',
                    }}>
                        Click
                    </button>
                    {/*Styles objects */}
                    <button style={buttonStyle}>
                        Click
                    </button>
                </div>  
            </div>
        );
    }
}

export default Home;