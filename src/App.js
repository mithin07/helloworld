import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import SomeComponent123 from './components/SomeComponent123';
import Weather12 from './components/Weather12';

import mary from "./images/mary.jpg";
import car from "./images/car.jpg";
// let source = `The Old Man and the Sea is a novella written by the American author Ernest Hemingway in 1951 in Cayo Blanco, and published in 1952. It was the last major work of fiction written by Hemingway that was published during his lifetime.`;
// let source2 =`The meaning behind The Old Man and the Sea is that humans will journey through struggles throughout their lives. Perseverance will bring dignity and faith will help to overcome obstacles.`;
// let source3 = `hello world`;

// const Anotherexample = () => (
//   <div>
//     <p>HELLO THIS IS MITHIN</p>
//   </div>
// )

function App() {
  function clearEverything(){
    console.log(`button activated`);
    setquoteContent(``);
  }
  const [quoteContent, setquoteContent] = useState('');
  useEffect(() => {
    console.log(quoteContent);

}, [quoteContent]);
  return (
    <div className="App">
      <div>
        <p>
          hi this is jay
        </p>
        <input
        type="text"
        className='from-control'
        placeholder='enter anything you want'
        onChange={e => setquoteContent(e.target.value)}
        value={quoteContent}                
        ></input>
        <button
        type="button"
        className='btn btn-primary'
        onClick={clearEverything}
        >click me!</button>
        <hr></hr>
        <h1>hi,{quoteContent}</h1>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={mary} className="img-fluid" alt="mary" />
        <img src={car} className="img-fluid" alt="car" />
        <p>
          hey....
        </p>
        {/* <p>{source}</p>
        <p>{source2}</p>
        <p>{source3}</p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SomeComponent123/>
        <Weather12/>
        {/* <Anotherexample/> */}
        {/* <SomeComponent123/> */}
        {/* <Anotherexample/> */}
        {/* <SomeComponent123/> */}
        {/* <Anotherexample/> */}
        
      </header>
    </div>
  );
}

export default App;
