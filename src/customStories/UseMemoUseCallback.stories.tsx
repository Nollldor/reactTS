import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1


    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }


    return (
        <>
            <input value={a} onChange={(e) => {
                setA(+e.currentTarget.value)
            }}/>
            <input value={b} onChange={(e) => {
                setB(+e.currentTarget.value)
            }}/>

            <hr/>
            <div>
                Result for a: {resultA}
            </div>

            <div>
                Result for b: {resultB}
            </div>
        </>
    )
}


const UsersSecret = (props: { users: Array<any> }) => {
    console.log("UsersSecret")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"])

    const filteredUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={filteredUsers}/>
    </>
}


//useCallback
export const LikeUseCallback = () => {
    console.log("LikeUseCallback")

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["JS", "HTML", "CSS"])
    console.log(books)
    const filteredBooks = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [books])


    const addBook = () => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }
    //useMemo
    const memoAddBook = useMemo(()=> addBook, [books])

    //useCallback
    const memoAddBook2 = useCallback(addBook, [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addBook()}>add book</button>
        {counter}
        <Books books={filteredBooks} addBook={memoAddBook2}/>
    </>
}


const BooksSecret = (props: { books: Array<any>; addBook: () => void }) => {
    console.log("BooksSecret")
    return <div>
        {props.books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
}

const Books = React.memo(BooksSecret)