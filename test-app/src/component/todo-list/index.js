import React from "react";
import styles from "./index.module.css";
import {useLocalStorage} from "usehooks-ts";



function TodoList() {
    // let todoTask =[];
    const [todoTask, setTodoTask] = React.useState([]);

    function getTodoList() {
        // Get all items from localstorage and store it
       let  SaveTodoTask = JSON.parse(useLocalStorage.getItem("TODO")) || [];
       setTodoTask(SaveTodoTask);
    }
    

React.useEffect(getTodoList, []);

    return (
        <div className={styles.todoList}>
            <ul>
                {todoTask.map(function(todoTask){
                    return <li>{todoTask}</li>
                })}
            </ul>
        </div>
    );
}
export default TodoList; 