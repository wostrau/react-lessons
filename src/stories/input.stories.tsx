import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'input'
};

//export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () = {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    };

    return <div>
        <input value={value} onChange={onChange} />
        - {value}
    </div>;

};

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value}
    </>;
};

export const ControlledInputWithFixedValue = () => {
    <input value={'sanya\'s incubator'}/>
};