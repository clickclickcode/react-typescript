import * as React from 'react';

export interface Props {
    legs?: number
    arms?: number
    nuts?: boolean
}

// destructured props example
export const Human = ({legs, arms, nuts}: Props) => {
  return (
    <div>
      <h1> {legs} </h1>
      <h1> {arms} </h1>
      <h1> {nuts} </h1>
    </div>
  );
}
