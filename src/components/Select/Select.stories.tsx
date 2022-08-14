import React, {useState} from 'react';
import Select from './Select';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Select',
    //component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState('2');

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Kiev'},
                    {value: '3', title: 'Sumy'}
                ]}/>
    </>
}

export const WithoutValueExample = () => {
    const [value, setValue] = useState(null);

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Kiev'},
                    {value: '3', title: 'Sumy'}
                ]}/>
    </>
}