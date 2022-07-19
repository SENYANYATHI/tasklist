import logo from './logo.svg';
import './App.css';
import React, {useState}from 'react';

import AddTask from './components/AddDetails';

function App() {

  const[projects,setProject] = useState([]);
  const addTask =((Task,priority)=> {

    setProject((task)=> [...task ,{
 
    task:Task
    }]);

    
    
  });
  return (
    
    <div className="container">
      <AddTask add={addTask}/>
  
      
    </div>
    
  );
}

export default App;
