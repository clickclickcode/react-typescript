import React, {useState} from 'react';

export enum Haircolor {
    Blonde = 'You seem to have blonde hair, motherfucker!',
    Brown = 'Well well well',
    Blue = 'Nope...'
}

// types for props/objects
export interface Props {
    name?: string
    email?: string
    age?: number
    hairColor: Haircolor
    // for functions: () => return type
    // getName: () => string
}


// non-destructured props example
// note: does not work in functional components
export const Person = (props: Props) => {

    const [country, setCountry] = useState<string | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    return (
        <div>
            <h1> {props.name} </h1>
            <h1> {props.email} </h1>
            <h1> {props.age} </h1>

            <input placeholder='Type your country of origin...' onChange={handleChange}/>

            {country}
            {props.hairColor}
        </div>
    );
}
