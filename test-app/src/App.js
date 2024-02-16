
import React from "react";
import Header from "./component/header";
import AddTodo from "./component/add-todo";
import TodoList from "./component/todo-list";



function App() {
  return(
  <React.Fragment>
    <Header/>
    <AddTodo/>
    <TodoList/>
  </React.Fragment>
  ); 
}

export default App;
