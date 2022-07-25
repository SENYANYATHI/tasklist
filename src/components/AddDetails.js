import "../css/add.css";
import React, {useState} from "react"
import pic from "../components/pic.jpg"


function AddTask (props) {

    const [task,setTask] = useState('');
    const [priority,setPriority] = useState('');

 const add =(() => {
    
    props.add (task,priority);
 })
    return(
        <div >

            
       <div className="details">
       <h2 style={{margin:'5px'}}>
            <img src={pic} alt="" style={{width:"50px", height:"50px" }}/>
               Mashego Senyanyathi Matshepo
               <button id="btn" type="submit">LOGOUT</button>
            </h2>
    
           
            </div>

       

<input placeholder="Add  Task" onChange={(e) => setTask(e.target.value)}/>

<select onChange={(e) => setPriority(e.target.value)}>
    <option value="">priority status</option>
<option value="high">High</option>
<option value="medium">Medium</option>
<option value="low">Low</option>
</select>
 <button onClick={add} id="btn">add</button>
        </div>
        
    )
}

export default AddTask;