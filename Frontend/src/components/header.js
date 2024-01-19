import React, { Component } from 'react';
import './header.css';

export class Header extends Component {
    componentDidMount() {
        const link1 = document.createElement('link');
        link1.rel = 'preconnect';
        link1.href = 'https://fonts.googleapis.com';
    
        const link2 = document.createElement('link');
        link2.rel = 'preconnect';
        link2.href = 'https://fonts.gstatic.com';
        link2.crossOrigin = 'true';
    
        const link3 = document.createElement('link');
        link3.href = "https://fonts.googleapis.com/css2?family=Teko&display=swap" ;
        link3.rel = 'stylesheet';
       
        document.head.appendChild(link1);
        document.head.appendChild(link2);
        document.head.appendChild(link3);
    }
    render() {
        return (
            <div className='header'>
                <h1><a href="/" id="title">Aphel Builds</a></h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Builder</a></li>
                        <li><a href="/">Pre-Builts</a></li>
                        <li><a href="/">Sign In</a></li>
                    </ul>
                </nav>     
            </div>
        )
    }
}