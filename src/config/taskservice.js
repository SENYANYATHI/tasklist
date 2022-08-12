import {db} from "./firebase"

import { collection, getDocs, getDoc, addDoc,deleteDoc,doc } from "firebase/firestore";

const TaskcollectionRef =collection(db,"tasks")
class TasksDetailsService {

    Addtask=(newTask) => {
        return addDoc(TaskcollectionRef,newTask)
    };
   comletedTask=(id)=> {
    const taskDoc =doc (db,"tasks", id);
    return deleteDoc(taskDoc);
   };
    
    getAllTasks=()=>{
        return getDocs(TaskcollectionRef);
    };
    getTask=(id) =>{
        const taskDoc=doc(db,"tasks",id);
        return getDoc(taskDoc);
    };
}

export default new TasksDetailsService();