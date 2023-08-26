import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Cardcont from './components/Cards';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='app'>
        <Navbar/>
        <Header/>
        <MainContent/>
        <Cardcont />
    </div>

);


