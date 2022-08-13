import React from 'react';

export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: string[]
};

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle
                title={props.title}
                onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody items={items}/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3
        onClick={props.onChange}
    >{props.title}</h3>
}

type AccordionBodyPropsType = {
    items: string[]
};

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(i => <li>{i}</li>)}
        </ul>
    )
}

export default Accordion;