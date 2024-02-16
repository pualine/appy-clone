import React from "react";
import styles from "./index.module.css";



function TodoList() {
    // let todoTask =[];
    const [todoTask, setTodoTask] = React.useEffect([]);

    function getTodoList() {
        // Get all items from localstorage and store it
       let  SaveTodoTask = JSON.parse(localStorage.getItem("TODO")) || [];
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