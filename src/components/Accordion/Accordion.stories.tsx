import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion, {AccordionPropsType} from './Accordion';
import {Story} from '@storybook/react';
import OnOff from '../OnOff/OnOff';

export default {
    title: 'components/Accordion',
    component: Accordion,
}

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;
const callbackProps = {
    onChange: callback,
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbackProps,
    title: 'Menu',
    collapsed: true,
    items: [],
    onClick: onClickCallback
};

export const UsersUncollapsedMode = Template.bind({});
UsersUncollapsedMode.args = {
    ...callbackProps,
    title: 'Users',
    collapsed: false,
    items: [
        {title: 'Alex', value: '1'},
        {title: 'Roxy', value: '2'},
        {title: 'Max', value: '3'}
    ],
    onClick: onClickCallback
};

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onChange={() => {
        setValue(!value)
    }}/>;
};
ModeChanging.args = {
    title: 'Users',
    items: [
        {title: 'Alex', value: 1},
        {title: 'Roxy', value: 2},
        {title: 'Max', value: 3}
    ],
    onClick: onClickCallback
};