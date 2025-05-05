import { Card, Dropdown, DropdownItem } from 'flowbite-react'

import Counter from "./components/Counter"

export default function App() {
    console.log('App Component rendered');

    return (
        <div className="h-screen">

            <Dropdown label="Dropdown button" dismissOnClick={false}>
                <DropdownItem>Dashboard</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Earnings</DropdownItem>
                <DropdownItem>Sign out</DropdownItem>
            </Dropdown>

            <Card href="#" className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>



            <Counter />

        </div>
    )
}