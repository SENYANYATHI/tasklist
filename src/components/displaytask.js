import React from "react";
import '../css/displaytask.css'


function DisplayTasks (props) {

    return (
        <div>
           {props.list.map((task) => {

            <div>
                
                <div className="task-list">

                    <div>
                        <h4 style={{paddinLeft:'12px', paddingTop:'25px'}}>{task.task}</h4>
                        </div>

                        <div>
                        <h4 style={{paddingLeft:'290px',paddingTop:'25px'}}>{task.priority}</h4>
                        </div>
                    </div>
                </div>
           })}
        </div>

    );
}
export default DisplayTasks;