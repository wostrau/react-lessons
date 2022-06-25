import React, {useState} from 'react';

type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <div>
            <AccordionTitle
                title={props.title}
                onClick={() => {
                    setCollapsed(!collapsed)
                }}
            />
            {!collapsed && <AccordionBody/>}
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