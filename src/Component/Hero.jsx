import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div>
                <h1 style={{
                    color:'red',
                    background:'green',
                    border: '10px solid wiite'
                
                }}>HERO Content You can enjoy with us </h1>
                <button onClick={()=>alert("Hellow")}>Click Me</button>
            </div>
        );
    }
}

export default Hero;