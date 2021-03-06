import React from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

function OnOff(props: OnOffPropsType) {
    const onStyle = {
        width: '50px',
        height: '30px',
        borderRadius: '2px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'lightGreen' : 'lightGrey'
    };
    const offStyle = {
        width: '50px',
        height: '30px',
        borderRadius: '2px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '2px',
        backgroundColor: !props.on ? 'pink' : 'lightGrey'
    };
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        margin: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'lightGreen' : 'pink'
    };

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.onChange(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.onChange(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

export default OnOff;