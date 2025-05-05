import { useState } from 'react'


export function TestComponent() {
    console.log('TestComponent Rendered')
    let x = 3;
    return (
        <div>TEST</div>

    )
}

export default function Message() {
    console.log('Message Rendered')

    const [msg, fnc] = useState('New Text');

    let counter = 1;

    function ShowMessage() {
        // debugger
        console.log('msg before: ', msg)
        fnc('New Text')
        console.log('msg after: ', msg)
    }


    function increase() {
        console.log('counter before:', counter)
        counter++;
        console.log('counter after:', counter)
    }


    return (
        <div>
            <button
                onClick={ShowMessage}
                className="border cursor-pointer p-3">
                Show Message {5 + 4}
            </button>

            <button onClick={increase}>+</button>
            <p>{msg}</p>
        </div>
    )
}
