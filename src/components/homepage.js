import AddTask from './AddDetails';
import { DisplayTasks } from './displaytask';



function Home (props) {

    return (

        <div className="container">


<AddTask add={props.add}/>
<DisplayTasks list={props.list}/>
      
        </div>
    );
}
export default Home;