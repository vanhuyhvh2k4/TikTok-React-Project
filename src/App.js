import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const gifts = [
  'CPU i9',
  'Ram 32Gb Rgb',
  'Rgb keyboard'
]

function App() {
  const [gift, setGift]= useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);

    setGift(gifts[index]);
  }

  return (
    <div className="App">
      <h1>{gift || 'don\'t have any gift'}</h1>
      <button onClick={randomGift}>Get Gift</button>
    </div>
  );
}

export default App;
