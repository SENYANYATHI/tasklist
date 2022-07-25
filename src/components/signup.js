

import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

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

        <div className="container">
            <h1>welcome</h1>
            <h1>Manage Your Task Checklist Easily</h1>

<input type="fulnames" placeholder="enter fullnames" /><br></br>
<br></br>
<input type="email" placeholder="enter email"/><br></br>
<br></br>
<input type="password" placeholder="enter password"/><br></br>
<br></br>

<button style={btn} onClick={register}>Create Account</button>
<span>Already have an account?</span> <span>
    <Link to="/home"></Link>
</span>
        </div>
    )
}
export default SignUp;