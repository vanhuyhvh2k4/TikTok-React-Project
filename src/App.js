import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
  
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'));

    return storageJobs;
  });
  
  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);

      return newJobs;
    });
    setJob('');
  }
  
  return (
    <div className="App">
      <input value={job} onChange={e => setJob(e.target.value)}></input>
      <button onClick={handleSubmit}>click here</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
