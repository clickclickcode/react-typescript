import React, {FC} from 'react';
import './App.css';
import { Person } from './components/Person';

// type is FC -> Functional Component
const App: FC = () => {

  return (
    <div className="App">
      <Person name='Bob' age={20} email='bob@bobr.ru' />
    </div>
  );
}

export default App;
