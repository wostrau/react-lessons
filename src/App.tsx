import React, {useState} from 'react';
import './App.css';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValuePropsType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [switchOn, setSwitchOn] = useState<boolean>(true)

    return (
        <div className={'App'}>
            <UncontrolledOnOff
                onChange={setSwitchOn}
            />
            <Accordion
                title={'Menu'}
                collapsed={collapsed}
                onChange={() => {setCollapsed(!collapsed)}}
            />
            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />
            <OnOff
                on={switchOn}
                onChange={setSwitchOn}
            />
        </div>
    );
}

export default App;
