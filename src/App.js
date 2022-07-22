import logo from './logo.svg';
import './App.css';
import React, {useState}from 'react';
import AddTask from './components/AddDetails';
import DisplayTasks from './components/displaytask';
import home from './components/homepage'

function App() {

  const[projects,setProject] = useState([]);

  const addTask =((Task,priority)=> {

    setProject((task)=> [...task, {
 
    task:Task,
    priority:priority
  

    }])


    
  })
  return (
    
    <div className="container">
      <AddTask add={addTask}/>
      <DisplayTasks list={projects}/>
      <home add={addTask}/>
      
  
      
    </div>
    
  );
}

export default App;
