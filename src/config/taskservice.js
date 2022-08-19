import {db} from "./firebase"

import { collection, getDocs, getDoc, addDoc,deleteDoc,doc } from "firebase/firestore";


const TaskcollectionRef =collection(db,"tasks")
class TasksDetailsService {

    AddTask=(newTask) => {
        return addDoc(TaskcollectionRef,newTask)
    };
   comletedTask=(id)=> {
    const taskdetails =doc (db,"tasks", id);
    return deleteDoc(taskdetails);
   };
    
    getAllTasks=()=>{
        return getDocs(TaskcollectionRef);
    };
    getTask=(id) =>{
        const taskdetails=doc(db,"tasks",id);
        return getDoc(taskdetails);
    };
}

export default new TasksDetailsService();