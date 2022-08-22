import React, {useState} from 'react';

export default {
    title: 'useState demo'
}

function generateData() {
    return 1;
}

export const UseStateExample = () => {
    console.log('UseStateExample');
    const [counter, setCounter] = useState<number>(generateData);


    return <>
        <button onClick={()=>{setCounter(counter => counter + 1)}}></button>
        {counter}
    </>
};

