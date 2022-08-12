import React, {useState,useEffect} from "react";
import '../css/displaytask.css'
import TasksDetailsService from "../config/taskservice";


function DisplayTasks (props) {

    const[task, setTasks]= useState([]);
    useEffect(() => {
            getAllTasks();

    }, []);

 const getAllTasks = async() => {
        const data = await TasksDetailsService.getAllTasks();
        console.log(data.docs);
        setTasks(data.docs.map((doc) => ({...doc.data(), id :doc.id })))

    };
    const deleteTask=async(id) => {
        await TasksDetailsService.completedTask(id)
        alert("task completed")

    }
  
  
    return (
        <div>
           {props.list.map((task) => (

            <div>
                {task.priority === "high" ? ( <div className="task-list">

                                 <div>
                                     <h4 style={{paddinLeft:'12px', paddingTop:'25px'}}>
                                        {task.task}</h4>
                                     </div>
                                 <div className='High-line'></div>
                        
                                     <div>
                                     <button id="submit"  onClick={deleteTask}>complete task</button>
                                     </div>
                                     
                                 </div>
                                  ):(
                                
                                    <div className="task-list">

                                     <div>
                                         <h4 style={{paddinLeft:'12px', paddingTop:'25px'}}>
                                            {task.task}
                                            </h4>
                                             </div>
                                              <div className='Medium-line' style={{width:"500px"}}></div>
                                              
                                                 <div>
                                                     <button id="submit">complete task</button>
                                                     </div>
                                                     
                                                 </div> 
                                                 )}
                                                 
                               

                                                 
                                                 </div>     
               
           ))}
        </div>

    );
}
export   { DisplayTasks };