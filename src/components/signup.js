

import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import google from "../images/google.jpg"

function SignUp () {

    
    const btn = {
        width:"160px",
        height:"38px",
        margintTop:"3px"
    }
    let history=useHistory();
    const register= (() => {
        history.push("/home");
    })


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
<input type="email" placeholder="enter email"/><br></br>
<br></br>
<label>Password</label>
<input type="password" placeholder="enter password"/><br></br>
<br></br>

<button style={btn} onClick={register}>Create Account</button>
<br></br>
<br></br>
<label>Already have an account ?</label><Link to="/login">Login</Link>

OR


<button style={{marginTop:"50px"}}> <img src={google} alt="matshepo" style={{width:"20px", height:"20px" }}/>
sign up with google</button>
        </div>
    )
}
export default SignUp;