import React from "react";
import '../css/displaytask.css'


function DisplayTasks (props) {

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
                                     <button id="submit" >complete task</button>
                                     </div>
                                     
                                 </div>
                                  ):(
                                
                                    <div className="task-list">

                                     <div>
                                         <h4 style={{paddinLeft:'12px', paddingTop:'25px'}}>
                                            {task.task}
                                            </h4>
                                             </div>
                                              <div className='Medium-line'></div>
                                              
                                                 <div>
                                                     <button id="submit">complete task</button>
                                                     </div>
                                                     
                                                 </div> 
                                                 )}:
                                                 
                                (
                                                     <div className="task-list">
                                                    <div>
                                     <h4 style={{paddinLeft:'12px', paddingTop:'25px'}}>
                                        {task.task}</h4>
                                     </div>
                                                    <div className="Low-line"></div>
                                                    <div>
                                                     <button id="submit">complete task</button>
                                                     </div>
                                                     
                                                 </div> 
                                                 )

                                                 
                                                 </div>     
               
           ))}
        </div>

    );
}
export   { DisplayTasks };