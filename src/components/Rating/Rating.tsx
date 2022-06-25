import React from 'react';

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Rating(props: RatingPropsType) {
    console.log('UncontrolledRating rendering')
    if (props.value === 1) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    } else {
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    }
}

function Star(props: any) {
    console.log('Star rendering')
    if (props.selected === true) {
        return <span><b> star </b></span>
    } else {
        return <span> star </span>
    }
}

export default Rating;