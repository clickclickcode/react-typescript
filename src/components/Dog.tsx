import {FC} from 'react';

export interface Props {
    legs?: number
    tail?: boolean
    name: string
}

// defining type in a Functional Component
// you can pass props like this as well: (props), but then you need to access them with props.name, etc
export const Dog: FC<Props> = ({legs, tail, name}) => {
  return (
    <div>
      <h1> {legs} </h1>
      <h1> {tail} </h1>
      <h1> {name} </h1>
    </div>
  );
}
