import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

function App() {
    console.log('App rendering')
    return (
        <div>
            <Accordion title={'Menu'} collapsed={true}/>
            <Accordion title={'Menu'} collapsed={false}/>
            <Rating value={1}/>
        </div>
    );
}

export default App;
