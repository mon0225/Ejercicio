import React, { Component } from 'react';

class Navbar extends Component{
    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center"><strong>Ejercicio</strong></a>
                    <a style={{marginLeft: '15px'}}>Section 1</a>
                    <a style={{marginLeft: '15px'}}>Section 2</a>
                    <a style={{marginLeft: '15px'}}>Section 3</a>
                    <a style={{marginLeft: '15px'}}>Section 4</a>
                </div>
            </nav>
        )
    }
}

export default Navbar