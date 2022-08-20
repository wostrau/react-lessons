import React, {useReducer} from 'react';
import {reducer, TOGGLE_CONSTANT} from './reducer';

type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function UncontrolledAccordion(props: AccordionPropsType) {
    const [state, dispatch] = useReducer(reducer, {collapsed: false});
    return (
        <div>
            <AccordionTitle
                title={props.title}
                onClick={() => {
                    dispatch({type: TOGGLE_CONSTANT})
                }}
            />
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => {
        props.onClick()
    }}>{props.title}</h3>
}

function AccordionBody() {
    const ulStyle = {
        listStyle: 'none',
    };
    return (
        <ul style={ulStyle}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion;