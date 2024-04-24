import React, { useState } from "react";

function AddTodoForm({ addTodo}){
    const [text , setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!text.trim()) return;
        addTodo(text)
        setText('')
    };

    return(
        <form className="AddTodoForm"  onSubmit={handleSubmit}>
          <input
          type="text"
          placeholder="Add What You Want To-Do"
          value={text}
          onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add It</button>
        </form>
    )
}
export default AddTodoForm