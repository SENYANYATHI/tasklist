import "../css/add.css";
import React, {useState,useEffect} from "react"
import pic from "../components/pic.jpg"
import {FaPlus} from "react-icons/fa";
import {useHistory} from 'react-router-dom'
import TasksDetailsService from "../config/taskservice";


function AddTask (id) {

    const [task,setTask] = useState('');
    const [priority,setPriority] = useState('');
    const [message , setMessage]=useState({error:false, msg: ""});

    const handleSubmit= async (e)=> {
        e.preventDefault ();
        setMessage("");
        

    if (task === "" || priority === ""  ) {
        setMessage({error:true,msg: "ALL FIELDS ARE REQUIRED"});
        return;
    }
   
    const newTask = {
        task,
        priority,

    };

    console.log(newTask);
    try {
       await TasksDetailsService.AddTask(newTask);
        message({error:false, msg: "new employee added successfully"});
    } catch(err){
    setMessage ({error: true ,msg: err.message});
   
    }
   
    setTask("");
    setPriority("");
};


 let history = useHistory() ;
 const logout= (() => {
    history.push('/');
 })

  
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
<input placeholder="Add  Task" onChange={(e) => setTask(e.target.value)}/>

<select onChange={(e) => setPriority(e.target.value)}>
    <option value="">priority status</option>
<option value="high">High</option>
<option value="medium">Medium</option>
<option value="low">Low</option>

</select>
 <FaPlus  style={{width:"30px", height:"30px"}}></FaPlus>
 </form>
        </div>
        
        
        
    )
}

export default AddTask;