import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import google from "../images/google.jpg";
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from  '../config/firebase'






function Login () {
    const [email,setEmail]= useState('');
    const [password, setPassword]= useState('');

    const btn = {
        width:"160px",
        height:"38px",
        margintTop:"3px"
    }

    let history = useHistory() ;

    const login = (() => {

        signInWithEmailAndPassword(auth, email, password).then (()=>{
            history.push('/home');

        }).catch((err)=>{
            console.log(err);
        })
      
    })

    return(
        

        <div className="Container"  >



            <h1 >Welcome Back</h1>
            <br></br>
            <h1 >manage your task easily</h1>
            <br></br>
            <br></br>
            
<label>Email Address</label>

<input type="email" placeholder="enter email" onChange={(e) =>setEmail (e.target.value)}/>
 <br></br>
 <br></br>
 <label>Password</label>
<input type="password" placeholder="enter password" onChange={(e) =>setPassword (e.target.value)}/>
<br></br>
<br></br>


<button style={btn} onClick={login}>LOGIN</button>
<label>Dont have Account</label>
<label>
    <Link to="/signup">Create here</Link>
</label>

OR

<button style={{marginTop:"50px"}}> <img src={google} alt="matshepo" style={{width:"20px", height:"20px" }} onClick={{login}}/>
sign in with google</button>

        </div>
    )
}
export default Login;