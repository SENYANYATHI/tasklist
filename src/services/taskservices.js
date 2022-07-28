import{db} from "../Firebase.config"

import {collection, getDocs, getDoc, addDoc,completeDoc, doc} from "firebase/firestore";


const taskCollectionRef =collection(db, "tasks");
class TaskDataServices {
    addTasks =(newTask) => {
        return addDoc(taskCollectionRef.newTask)
    };

    completeDoc=(id,completedtask) => {
        const taskdoc = doc (db,"tasks", id);
        return completeDoc(taskdoc,completedtask)
    };
    getAllTask = () => {
        return getDocs(taskCollectionRef);
    };
    getDoc =(id) => {
        const taskdoc=doc (db,"tasks",id);
        return getd (taskdoc);
    };
}




export default new TaskDataServices();