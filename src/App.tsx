import React from 'react';
import './App.css';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import Accordion from './components/Accordion/Accordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import Rating from './components/Rating/Rating';

function App() {
    return (
        <div className={'App'}>
            <OnOff
                on={true}
            />
            <UncontrolledAccordion
                title={'Menu'}
            />
            <Accordion
                title={'Menu'}
                collapsed={false}
            />
            <UncontrolledRating/>
            <Rating value={3}/>
        </div>
    );
}

export default App;
