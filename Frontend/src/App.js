import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Homepage } from './components/HomePage';

function App() {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;