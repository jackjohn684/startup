import React from 'react';

import { Players } from './players';
import { SimonGame } from './Game';

export function Play(props) {
  return (
    <main className='bg-secondary'>
      <Players userName={props.userName} />
      <SimonGame userName={props.userName} />
    </main>
  );
}
