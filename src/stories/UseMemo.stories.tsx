import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {
    console.log('DifficultCountingExample')

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]);

    let resultB = 1;

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
};

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret');
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
};

const Users = React.memo(UsersSecret);

export const HelpsReactMemoExample = () => {
    console.log('HelpsReactMemoExample');

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Alex', 'John', 'Billy', 'Bobby', 'Molly', 'Brown']);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users]);

    const addUser = () => {
        const newUsers = [...users, 'Milly' + new Date().getTime()];
        setUsers(newUsers);
    };

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
};

type BooksSecretPropsType = {
    books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret');
    return <div>
        <button onClick={()=>props.addBook()}>add book</button>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
};

const Book = React.memo(BooksSecret);

export const LikeUseCallback = () => {
    console.log('LikeUseCallback');

    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['REACT', 'JS', 'CSS', 'HTML', 'REDUX']);

    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [books]);

    const addBook = () => {
        const newBooks = [...books, 'ANGULAR' + new Date().getTime()];
        setBooks(newBooks);
    };

    const memorizedAddBook = useMemo(()=>{return addBook}, [books]);

    const memorizedAddBook2= useCallback(()=>{addBook()}, [books]);

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Book
            books={newArray}
            addBook={memorizedAddBook2}
        />
    </>
};