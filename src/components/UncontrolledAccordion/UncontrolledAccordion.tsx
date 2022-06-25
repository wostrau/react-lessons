import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={() => {
                setCollapsed(!collapsed)
            }}>toggle
            </button>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}

function AccordionTitle(props: any) {
    console.log('AccordionTitle rendering')
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    const ulStyle = {
        listStyle: 'none',
    }
    return (
        <ul style={ulStyle}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;