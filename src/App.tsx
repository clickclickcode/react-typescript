import React, {FC} from 'react';
import './App.css';
import { Person } from './components/Person';
import { Human } from './components/Human';


// type FC -> Functional Component
const App: FC = () => {

  const hello: string = 'Hello, motherfucker'
  return (
    <div className="App">
      <Person name='Bob' email='bob@bobr.ru' age={25} />
      <Human legs={3} arms={2} nuts />
    </div>
  );
}

export default App;
