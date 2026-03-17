import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div>
                <h1 style={{
                    color:'red',
                    background:'green',
                    border: '10px solid wiite'
                
                }}>HERO</h1>
                <button onClick={()=>alert("Hellow")}>Click Me</button>
            </div>
        );
    }
}

export default Hero;