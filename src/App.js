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
  const [checked, setChecked] = useState([]);
  const handleSubmit = () => {
    console.log({
      checked
    })
  }

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id)
      }
      else {
       return [...prev, id]
      }
    })
  }
  
  return (
    <div className="App">
      {courses.map((course) => (
        <div key={course.id}>
          <input type='checkbox' onChange={() => handleCheck(course.id)} checked={checked.includes(course.id)}/>
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
