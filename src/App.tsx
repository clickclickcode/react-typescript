import React, {FC} from 'react';
import './App.css';


// type FC -> Functional Component
const App: FC = () => {

  const hello: string = 'Hello, motherfucker'
  return (
    <div className="App">
      {hello}
    </div>
  );
}

export default App;
