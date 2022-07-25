import React from "react";
import '../css/displaytask.css'


function DisplayTasks (props) {

    return (
        <div>
           {props.list.map((task) => (

            <div>
                {task.priority == "high" ?  <div className="task-list">

<div>
    
    <h4 style={{paddinLeft:'12px', paddingTop:'25px'}}>{task.task}</h4>
    </div>
    <div>
    
    <h4 style={{paddinLeft:'12px', paddingTop:'25px'}}>{task.priority}</h4>
    </div>


    <div>
    <button>complete task</button>
    </div>
    

</div>
           ):(
            <div className="task-list">

            <div>
                
                <h4 style={{paddinLeft:'12px', paddingTop:'25px'}}>{task.task}</h4>
                </div>
                <div>
                
                <h4 style={{paddinLeft:'12px', paddingTop:'25px'}}>{task.priority}</h4>
                </div>


                <div>
                <button>complete task</button>
                </div>
                

            </div>
           )}
                
               
                </div>
           ))}
        </div>

    );
}
export   { DisplayTasks };