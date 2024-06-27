import React from 'react'
import Todo from './Todo'
const Todos = (props) => {
  return (
    <div className="todos-list">

      {props.todos.map(todo => (
        <Todo key={todo.id} todo={todo} mode={props.mode}  toggleTodo={props.toggleTodo}   
        deleteTodo={props.deleteTodo}  editTodo={props.editTodo}
        />
      ))}

      {props.todos.length === 0 && props.mode=="filter" && (
        <>
        <h3 className="no-todos"> No compelete Tasks Now... </h3>
           </>  
      )}
        {props.todos.length === 0 && props.mode=="add" && (
        <>
        <h3 className="no-todos"> No todos now... </h3>
           </>  
      )}

    </div>
  )
}

export default Todos