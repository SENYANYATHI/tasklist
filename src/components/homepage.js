import AddTask from './AddDetails';
import DisplayTasks from './displaytask';


function home () {

    return (

        <div>





<AddTask add={addTask}/>
      <DisplayTasks list={projects}/>
        </div>
    )
}
export default home;