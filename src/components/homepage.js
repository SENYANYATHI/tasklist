import AddTask from './AddDetails';
import { DisplayTasks } from './displaytask';



function Home (props) {

    return (

        <div className="container">

<DisplayTasks list={props.list}/>
<AddTask add={props.add}/>
      
        </div>
    );
}
export default Home;