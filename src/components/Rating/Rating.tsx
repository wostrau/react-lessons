import React from 'react';

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5;
type RatingPropsType = {
    value: RatingValuePropsType
    onClick: (value: RatingValuePropsType) => void
};

function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick}/>
            <Star selected={props.value > 1} onClick={props.onClick}/>
            <Star selected={props.value > 2} onClick={props.onClick}/>
            <Star selected={props.value > 3} onClick={props.onClick}/>
            <Star selected={props.value > 4} onClick={props.onClick}/>
        </div>
    );
}

function Star(props: any) {
    return (
        <span>
            {props.selected ? <b> STAR </b> : ' STAR '}
        </span>
    )
}

export default Rating;