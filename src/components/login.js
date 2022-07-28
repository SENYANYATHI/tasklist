
import {useHistory} from 'react-router-dom'
import google from "../images/google.jpg"

import {Link} from 'react-router-dom'
function Login () {

    const btn = {
        width:"160px",
        height:"38px",
        margintTop:"3px"
    }

    let history=useHistory();
    const login = (() => {
        history.push("/home");
    })

    return(

        <div className="Container" >
            <h1>Welcome Back</h1>
            <br></br>
            <h1 >manage your task easily</h1>
            <br></br>
            <br></br>
<label>Email Address</label>
<input type="email" placeholder="enter email"/>
 <br></br>
 <br></br>
 <label>Password</label>
<input type="password" placeholder="enter password"/>
<br></br>
<br></br>

<button style={btn} onClick={login}>LOGIN</button>
<label>Dont have Account</label>{""}
<label>
    <Link to="/signup">Create here</Link>
</label>

OR

<button style={{marginTop:"50px"}}> <img src={google} alt="matshepo" style={{width:"20px", height:"20px" }}/>
sign in with google</button>

        </div>
    )
}
export default Login;