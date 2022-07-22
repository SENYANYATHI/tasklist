import "../css/add.css";
import React, {useState} from "react"






function AddTask (props) {

    const [task,setTask] = useState('');
    const [priority,setPriority] = useState('');

 const add =(() => {
    
    props.add (task,priority);
 })
    return(
    
        <div >

          
            
    <button id="btn" type="submit">LOGOUT</button>
 
            <h2 style={{margin:'5px'}}>
                
               Mashego Senyanyathi Matshepo
            </h2>

       

<input placeholder="Add  Task" onChange={(e) => setTask(e.target.value)}/>

<select onChange={(e) => setPriority(e.target.value)}>
    <option value="">priority status</option>
<option value="high">High</option>
<option value="medium">Medium</option>
<option value="low">Low</option>
</select>

    <button  onClick={add}  id="btn">add</button>
       

        </div>
        
    )
}

export default AddTask;