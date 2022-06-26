import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (on: boolean) => void
}

function UncontrolledOnOff(props: OnOffPropsType) {
    const [on, setOn] = useState(false)

    const onStyle = {
        width: '50px',
        height: '30px',
        borderRadius: '2px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '2px',
        backgroundColor: on ? 'lightGreen' : 'lightGrey'
    };
    const offStyle = {
        width: '50px',
        height: '30px',
        borderRadius: '2px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '2px',
        backgroundColor: !on ? 'pink' : 'lightGrey'
    };
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '2px',
        backgroundColor: on ? 'lightGreen' : 'pink'
    };

    const onCLicked = () => {
        setOn(true)
        props.onChange(true)
    };
    const offCLicked = () => {
        setOn(false)
        props.onChange(false)
    };

    return (
        <div>
            <div style={onStyle} onClick={onCLicked}>On
            </div>
            <div style={offStyle} onClick={offCLicked}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default UncontrolledOnOff;