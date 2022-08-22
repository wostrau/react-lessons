import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const UseEffectSimpleExample = () => {
    console.log('UseEffectSimpleExample');

    const [fake, setFake] = useState<number>(1);
    const [counter, setCounter] = useState<number>(1);

    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString();
    });

    useEffect(() => {
        console.log('useEffect first render and every time counter changes');
        document.title = counter.toString();
    }, [counter]);

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString();
    }, []);
    //without deps useEffect will always start
    //with empty array - [] - useEffect will start only once

    return <>
        Hello, {counter} {fake}
        <button onClick={() => {
            setFake(fake => fake + 1)
        }}>fake+
        </button>
        <button onClick={() => {
            setCounter(counter => counter + 1)
        }}>counter+
        </button>
    </>
};

export const UseEffectSetTimeoutExample = () => {
    console.log('UseEffectSetTimeoutExample');

    const [fake, setFake] = useState<number>(1);
    const [counter, setCounter] = useState<number>(1);

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000);
    }, []);

    return <>
        counter: {counter} / fake: {fake}
        {/*<button onClick={() => {
            setFake(fake => fake + 1)
        }}>fake+
        </button>
        <button onClick={() => {
            setCounter(counter => counter + 1)
        }}>counter+
        </button>*/}
    </>
};

