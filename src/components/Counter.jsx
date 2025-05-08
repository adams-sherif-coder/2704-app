import { useState } from "react";
import Button from "./Button";
import Container from "./Container";

import Title from "./Title";


export default function Counter() {

    console.log('Counter Component Rendered')

    const [number, setNumber] = useState(7);


    function changeNumber(n) {
        setNumber(number + n);
    }


    function showMsg(user_name) {
        console.log(user_name)
    }


    return (
        <Container tailwind='flex flex-col bg-zinc-100 max-w-xl m-auto'>

            <Title>Counter</Title>

            <div className="flex gap-5 m-auto mb-12">
                <Button action={() => showMsg('Maged')}>Type Maged</Button>
                <Button action={() => showMsg('Adam')}>Type Adam</Button>
                <Button action={() => showMsg('Alyaa')}>Type Alyaa</Button>
            </div>

            <Container isFlexCenter={true} tailwind="gap-4">
                <Button tw="bg-green-400" action={() => changeNumber(1)}>+</Button>
                <span>{number}</span>
                <Button tw="bg-red-400" action={() => changeNumber(-1)}>-</Button>
            </Container>

            <Title tailwind='text-green-700'>changeNumber</Title>

            <Container isFlexCenter={true}>
                <Button action={() => changeNumber(5)}>+5</Button>
                <Button action={() => changeNumber(10)}>+10</Button>
                <Button action={() => changeNumber(20)}>+20</Button>
            </Container>

            <Title tailwind='text-red-700'>Decrease</Title>

            <Container isFlexCenter={true} >
                <Button action={() => changeNumber(-5)}>-5</Button>
                <Button action={() => changeNumber(-10)}>-10</Button>
                <Button action={() => changeNumber(-20)}>-20</Button>
            </Container>


            <Container></Container>
        </Container>
    )
}


// eleme.addEventListener('click', showMsg('Shady'))


