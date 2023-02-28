import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const courses = [
  {
    id: 1,
    name: 'React'
  },
  {
    id: 2,
    name: 'NodeJs'
  },
  {
    id: 3,
    name: 'Angular'
  },
]

function App() {
  const [checked, setChecked] = useState();
  const handleChecked = () => {
    console.log({
      checked
    })
  }
  
  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>
          <input type='radio' onChange={() => setChecked(course.id)} checked={checked === course.id}/>
          {course.name}
        </div>
      ))}
      <button onClick={handleChecked}>Register</button>
    </div>
  );
}

export default App;
