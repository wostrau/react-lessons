import React, {useState} from 'react';
import './App.css';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import Accordion from './components/Accordion/Accordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import Rating, {RatingValuePropsType} from './components/Rating/Rating';

function App() {
    const [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0)

    return (
        <div className={'App'}>
            <OnOff
                on={false}
            />
            {/*<UncontrolledAccordion
                title={'Menu'}
                collapsed={false}
            />*/}
            <Accordion
                title={'Menu'}
                collapsed={false}
            />
            {/*<UncontrolledRating/>*/}
            <Rating
                value={ratingValue}
                onClick={setRatingValue}
            />
        </div>
    );
}

export default App;
