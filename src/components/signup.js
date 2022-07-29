

import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import google from "../images/google.jpg"
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../config/firebase'
import React, { useState } from 'react'


function SignUp () {
    
  
    const [email,setEmail]= useState('');
    const [password, setPassword]=useState('');

    let history=useHistory();

    const register= (() => {

        createUserWithEmailAndPassword(auth,  email, password).then (() => {

            history.push("/home");
        }).catch ((error)=>{
            console.log(error);
        })

        
   });


    return(

        <div className="Container">
            <h1>Welcome</h1>
            <br></br>
            <h1>Manage Your Task Checklist Easily</h1>
            <br></br>
            <br></br>
<label>Fullnames</label>
<input type="fulnames" placeholder="enter fullnames" /><br></br>
<br></br>
<label>Email Address</label>
<input type="email" placeholder="enter email" onChange={(e) =>setEmail (e.target.value)}/><br></br>
<br></br>
<label>Password</label>
<input type="password" placeholder="enter password" onChange={(e) =>setPassword (e.target.value)}/><br></br>
<br></br>

<button  onClick={register}>Create Account</button>
<br></br>
<br></br>
<label>Already have an account ?</label><Link to="/login">Login</Link>

OR


<button style={{marginTop:"50px"}}> <img src={google} alt="matshepo" style={{width:"20px", height:"20px" }}/>
sign up with google</button>
        </div>
    );
}
export default SignUp;