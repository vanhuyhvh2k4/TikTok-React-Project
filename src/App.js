import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log({
      name,
      email
    })
  }
  
  return (
    <div className="App">
    <input value={name} onChange={(e) => setName(e.target.value)}></input>
    <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
    <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
