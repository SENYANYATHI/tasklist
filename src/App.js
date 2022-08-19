import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState}from 'react';
import Home from './components/homepage';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import SignUp from './components/signup';
import Login from './components/login';
import {collection,getDocs} from "firebase/firestore"
import GoogleLogin from 'react'





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
  const handleLogin=(googleData) =>{
    console.log(googleData);
  };
  const handleFilure =(result) => {
  alert(result);
  }
  return (
   
    
    <div>
   

     
       
    <Router>

<Switch>
  
<Route exact path="/" component={Login}></Route>

<Route path="/signup" component={SignUp}></Route>

<Route path='/home' ><Home list={projects} add={addTask}/></Route>
<GoogleLogin>
  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
  buttonText={"Log in with google"}
  onSuccess={handleLogin}
  onFailure={handleFilure}
  cookiePolicy={"single_host_orign"}

</GoogleLogin>
  
</Switch>
    </Router>

    </div>
      
  );
}

export default App;
