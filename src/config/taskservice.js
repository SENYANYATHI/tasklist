import {db} from "./firebase"

import { collection, getDocs, getDoc,doc, addDoc } from "firebase/firestore";

const TaskcollectionRef =collection(db,"tasks")
class TasksDetailsService {

    Addtask=(newTask) => {
        return addDoc(TaskcollectionRef,newTask)
    };
    
    getAllTasks=()=>{
        return getDocs(TaskcollectionRef);
    };
    getTask=(id) =>{
        const TasksDetailsService =doc(db,"tasks",id);
        return getDoc(TasksDetailsService);
    };
}

export default new TasksDetailsService();