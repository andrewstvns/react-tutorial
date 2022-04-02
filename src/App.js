// membuat state, usestate itu apa?
// cari tau usestate
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// Manggil Component Counter
import Counter from './components/Counter';
import Button from './components/Button';


const App = () => {
  const [addNumber, setAddNumber] = useState(1)
  const [delateNumber, setdelateNumber] = useState(0)

  const sumNumber = () => {
    setAddNumber(addNumber + 1)
    console.log('sumNumber')
  }

  const minNumber = () => {
    setdelateNumber(delateNumber - 1)
    console.log('minNumber')
  }

// stated = dinamik
// prop = statik

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Manggil counter dgn single tag */}
        <Counter count='ReactJS Tutorial'/>
        <Counter count={addNumber} />
        <Counter count={delateNumber} />
        <Counter count=' ' />
        <Button title='add' handleOnClick={sumNumber}/>
        <Button title='min' handleOnClick={minNumber}/>
        {/* <Button title='x' handleOnClick={} */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
