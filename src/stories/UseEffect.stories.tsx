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

export const UseEffectSetIntervalExample = () => {
    console.log('UseEffectSetIntervalExample');

    const [counter, setCounter] = useState<number>(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <>
        counter: {counter}
    </>
};

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1);

    console.log('Component rendered');

    useEffect(() => {
        console.log('Effect occurred: ' + counter)
        return () => {
            console.log('Reset effect: ' + counter)
        }
    }, [counter]);

    const increaseCounter = () => {
        setCounter(counter + 1)
    };

    return <>
        Hello, counter: {counter}
        <button onClick={increaseCounter}>+</button>
    </>
};

export const KeysTrackerExample = () => {
    const [text, setText] = useState('');

    console.log('Component rendered with ' + text);

    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            console.log(event.key);
            setText(text + event.key);
        };
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        };
    }, [text]);

    return <>
        Typed text: {text}
    </>
};

export const SetTimeoutExample = () => {
    const [text, setText] = useState('');

    console.log('Component rendered with ' + text);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('Timeout expired');
            setText('3 seconds passed')
        }, 3000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [text]);

    return <>
        Typed text: {text}
    </>
};