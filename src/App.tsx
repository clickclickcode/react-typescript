import React, {FC, createContext} from 'react';
import './App.css';
import { Person, Haircolor } from './components/Person';
import { Human } from './components/Human';
import { Dog } from './components/Dog';

interface AppContextInterface {
  name: string
  age: number
  hasEyesight: boolean
}

const AppContext = createContext<AppContextInterface | null>(null)


// type FC -> Functional Component
const App: FC = () => {
  
  const contextValue: AppContextInterface = {
    name: 'Blyat',
    age: 23,
    hasEyesight: false
  }

  const hello: string = 'Hello, motherfucker'
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <Person name='Bob' email='bob@bobr.ru' age={25} hairColor={Haircolor.Blonde} />
        <Human legs={3} arms={2} nuts />
        <Dog name="Ol' Yella" />
      </div>
    </AppContext.Provider>
  );
}

export default App;
