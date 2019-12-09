import React, { useState, useEffect } from 'react';
import './App.css';

const useTitle = (counter) => {
  useEffect(() => {
    document.title = `Clicked ${counter}`
    console.log('UseEffect');
  }, [counter])

  return document.title;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [name, updateName] = useState('');

  useTitle(counter);

  const updateCounter = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  }


  return (
    <div className="App">
      <div className="App-header">
        <p> Counter:{counter} </p>
        <button onClick={updateCounter}>Click me to Up</button>
        {/* <button onClick={updateCounter}>Click me to Down</button> */}
        <div>
          <input value={name} onChange={(e) => updateName(e.target.value)}></input>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}

export default App;