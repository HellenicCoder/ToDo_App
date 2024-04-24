import React from "react";
import TodoItem from "./TodoItem";
function TodoList({ todos , toggleTodo, deleteTodo }){
    return(
        <div className="TodoList">
        {todos.map((todo) => (
        <TodoItem
             key={todo.id} 
             todo={todo} 
             toggleTodo={toggleTodo}
             deleteTodo={deleteTodo}
        />
        ))}
        </div>
    )
}
export default TodoList