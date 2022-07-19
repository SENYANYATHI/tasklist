import "../css/add.css";
import React, {useState} from "react"
import { Container,Button} from 'react-floating-action-button';




function AddTask (props) {

    const [task,setTask] = useState('');
    const [priority,setPriority] = useState('');

 const add =(() => {
    console.log(task)
    console.log(priority);
    props.add (task,priority);
 })
    return(
    
        
        <div >
      
    <button id="btn" type="submit">LOGOUT</button>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin:'20px' }}>
            <img src="" alt="" size="48" height="48" width="48" data-view-component="true" class="avatar circle mr-3"  />
            <h2 style={{margin:'5px'}}>
               Mashego Senyanyathi Matshepo
            </h2>

         </div>
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