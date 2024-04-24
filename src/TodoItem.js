import React from "react";

function TodoItem({ todo , toggleTodo, deleteTodo }){
    const handleToggle = () => {
        toggleTodo(todo.id);
    }

    const handleDelete = () => {
        deleteTodo(todo.id)
    }
    return(
        <div className={`TodoItem ${todo.completed ? 'completed' : '' }`}>
        <input 
        type="checkbox" 
        checked={todo.completed}
        onChange={handleToggle}
        />
        <span>{todo.text}</span>
        <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
export default TodoItem