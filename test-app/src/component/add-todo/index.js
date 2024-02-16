// import React from "react";
import styles from "./index.module.css"



function AddTodo() {
    // const [todo, setTod] = React.useState('')

    let todo;
    // receive input todo
    function CollectTodo(event){
        // console.log(event.target.value);
        todo = event.target.value;
    }

    // save todo -on button
    function SaveTodo(){
        // Get existing list of items - todos from localStorage
        let todoTask = localStorage.getItem("TODO") || [];

        // Add new items to exsting items
        todoTask.push(todo);

        // store all items in localstore
        localStorage.setItem("TODO", JSON.stringify(todo));

    }



    return (
        <section className={styles.addTodo}>{
            
        } 
            <input
            onChange={CollectTodo}
                placeholder="Enter your task.."
                className={styles.addTodoInput} />
            <button
            onChange={SaveTodo}
                className={styles.addTodoButton}>Add Task</button>
        </section>

    );
}

export default AddTodo;