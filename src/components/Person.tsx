import * as React from 'react';

// types for props/objects
export interface Props {
    name?: string
    email?: string
    age?: number
    // for functions: () => return type
    // getName: () => string
}

// non-destructured props example
// note: does not work in functional components
export const Person = (props: Props) => {
  return (
    <div>
      <h1> {props.name} </h1>
      <h1> {props.email} </h1>
      <h1> {props.age} </h1>
    </div>
  );
}
