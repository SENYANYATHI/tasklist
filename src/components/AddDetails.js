import "../css/add.css";
import React, {useState} from "react"
import pic from "../components/pic.jpg"
import {FaPlus} from "react-icons/fa";
import {useHistory} from 'react-router-dom'
import {db} from '../config/firebase';
import TasksDetailsService from "../config/taskservice";
import { addDoc, collection } from "firebase/firestore";
import { async } from "@firebase/util";


function AddTask (props) {

    const [task,setTask] = useState('');
    const [priority,setPriority] = useState('');
    const [message , setMessage]=useState({error:false, msg: ""});

  

const add =(()=>{
    const TaskcollectionRef =collection(db,"tasks");
const priorities ={
    task,
    priority
};
console.log(task,priority)
    
    addDoc(TaskcollectionRef,priorities).then(() =>{
        alert("add succefully")
    }).catch((err) => {
        console.log(err)
    })
    props.add(task,priority);
    
})

 let history = useHistory() ;
 const logout= (() => {
    history.push('/');
 })
 const handleSubmit=async(e)=>{
    e.preventDefault();

    setMessage("");
    if(task ==="" || priority ===""){
        setMessage({error:true,msg:"ALL FIELD ARE MENDATORY"});
        return;
    }
    const newTask={
        task,
        priority
    }
    console.log(newTask);

    try{
await TasksDetailsService.AddTask(newTask);
setMessage({error:false,msg:"new task added"});
    }catch (err){
        setMessage({error:true,msg:err.message});
    }
    setTask("");
    setPriority("");

 };

  
    return(
        <div >

            
       <div className="details" >
       <h2 style={{margin:'5px'}}>
            <img src={pic} alt="" style={{width:"50px", height:"50px" }}/>
               Mashego Senyanyathi Matshepo
               <button id="btn" type="submit" style={{margingBottom:"100px"}} onClick={logout}>LOGOUT</button>
            </h2>
    
           
            </div>

       
<form onSubmit={handleSubmit}>
<input placeholder="Add  Task"  onChange={(e) => setTask(e.target.value)}/>

<select  onChange={(e) => setPriority(e.target.value)}>
    <option value="">priority status</option>
<option value="high">High</option>
<option value="medium">Medium</option>
<option value="low">Low</option>

</select>
 <FaPlus  style={{width:"30px", height:"30px"}} onClick={add}></FaPlus>
 </form>
        </div>
        
        
        
    )
}

export default AddTask;