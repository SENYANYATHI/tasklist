
import {useHistory} from 'react-router-dom'

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

        <div className="container">
            <h1>welcome Back</h1>
            <h1>manage your task easily</h1>


<input type="email" placeholder="enter email"/>
 <br></br>
 <br></br>
<input type="password" placeholder="enter password"/>
<br></br>
<br></br>

<button style={btn} onClick={login}>LOGIN</button>
<br></br>
<br></br>
<span>Dont have Account</span>{""}
<br></br>
<br></br>
<span>
    <Link to="/signup">Create here</Link>
</span>
<br></br>
<br></br>
OR
<br></br>
<br></br>
<button >sign in with google</button>

        </div>
    )
}
export default Login;