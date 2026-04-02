import {FC, ChangeEvent, useState} from 'react';

// interfaces give/define types for objects?
interface Props {
    name?: string;
    age?: number;
    email?: string;
}
// we can pass props using FC as well, like this:
// export const Person: FC<Props> = ({name, age, email}) => {}
// This requires us to import {FC} from 'react'

export const Person = ({name, age, email}: Props) => {

    // defining state
    const [country, setCountry] = useState<string | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

    return (
        <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{age}</h1>
        <input placeholder="Write your country..." type="text" onChange={handleChange} />
        </div>
    );
}
