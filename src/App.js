import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState}from 'react';
import Home from './components/homepage';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import SignUp from './components/signup';
import Login from './components/login';





function App() {

  const[projects,setProject] = useState([]);
  useEffect(() => {

  })

  const addTask =((Task,priority) => {

    setProject((task) => [...task, {
 
    task:Task,
    priority:priority
  

    }])

console.log(Task)
    
  })
  return (
   
    
    <div>
   

     
       
    <Router>

<Switch>
  
<Route exact path="/login" component={Login}></Route>

<Route path="/signup" component={SignUp}></Route>

<Route path="/home" ><Home list={projects} add={addTask}/></Route>
  
</Switch>
    </Router>

    </div>
      
  );
}

export default App;
