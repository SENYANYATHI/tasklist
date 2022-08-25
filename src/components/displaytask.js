import React, {useState,useEffect} from "react";
import '../css/displaytask.css'
import TasksDetailsService from "../config/taskservice";



function DisplayTasks (getTaskId) {

    const[tasks, setTasks]= useState([]);
    useEffect(() => {
            getTasks();

    }, []);

 const getTasks = async() => {
        const data = await TasksDetailsService.getAllTasks();
        console.log(data.docs);
        setTasks(data.docs.map((doc) => ({...doc.data(), id :doc.id })))

    };
    const deleteTask=async(id) => {
        await TasksDetailsService.completedTask(id)
        getTaskId();
       

    } 
    return(
    
    
        <>
        <div className="mb-2">
            <button variant="dark edit" onClick={getTasks }>
                REFRESH LIST
                </button>
    
        </div>
    
        {/*<pre>{JSON.stringify(employees,undefined,2)}</pre>*/}
        
        <caption><strong>tasklist</strong></caption>
            
        
            <table striped bordered hover size="sm">
        
        <thead>
            <tr>
                <th>TASKSId</th>
                <th>TASKS</th>
                <th>PRIORITY</th>
                <th>ACTION</th>
              
            </tr>
        
        </thead>
        
        <tbody>
        
  
  {tasks.map((doc,index) => {
    return (
    
       <tr key={doc.id} >
        <td>{index +1}</td>
        <td>{doc.task}</td>
        <td>{doc.priority}</td>
      

        <td>
   
<button variant="dark delete" className="complete" onClick={(e) => deleteTask(doc.id) }>
            complete
            </button>

</td>

       </tr>
      
   

    );
    
  })}
  </tbody>
  </table>
  </>
    );
}
export   { DisplayTasks };