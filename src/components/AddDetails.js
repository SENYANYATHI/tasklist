import "../css/add.css";
import React, {useState} from "react"
import pic from "../components/pic.jpg"
import {FaPlus} from "react-icons/fa";
import {db} from "../config/firebase"
import {useHistory} from 'react-router-dom'
import {addDoc, collection,deleteDoc} from "firebase/firestore"


function AddTask (props) {

    const [task,setTask] = useState('');
    const [priority,setPriority] = useState('');

    const newTask = {
        task,
        priority,

    };
    console.log(newTask);

 const add =(() => {
    const collectionRef =collection(db,"tasks");
    const tasks ={
        task:task,
        priority:priority,
    };
   
    addDoc(collectionRef,tasks).then (()=>{
        alert("task added successfully")

    })

    
   
 props.add(task,priority);
 })
 let history = useHistory() ;
 const logout= (() => {
    history.push('/');
 })

  
    return(
        <div >

            
       <div className="details">
       <h2 style={{margin:'5px'}}>
            <img src={pic} alt="" style={{width:"50px", height:"50px" }}/>
               Mashego Senyanyathi Matshepo
               <button id="btn" type="submit" style={{margingBottom:"100px"}} onClick={logout}>LOGOUT</button>
            </h2>
    
           
            </div>

       

<input placeholder="Add  Task" onChange={(e) => setTask(e.target.value)}/>

<select onChange={(e) => setPriority(e.target.value)}>
    <option value="">priority status</option>
<option value="high">High</option>
<option value="medium">Medium</option>
<option value="low">Low</option>

</select>
 <FaPlus  onClick={add}   style={{width:"30px", height:"30px"}}></FaPlus>

        </div>
        
    )
}

export default AddTask;