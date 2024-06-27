import React from 'react'
import FeatherIcon from 'feather-icons-react'
const Todo = ({ todo, toggleTodo, deleteTodo, editTodo, mode }) => {
  // console.log(todo);
  return (
    <div className={`todos-todo ${todo.compeleted ? 'compeleted' : ''}`}>
      <div className="todos-todo_icon" onClick={() => toggleTodo(todo.id)}>
        <FeatherIcon icon={todo.compeleted ? 'check-circle' : 'circle'} />
      </div>
      <div className="todos-todo_text text-white">  {todo.title}</div>
      {mode == 'add' && (
        <div className="todos-todo_cta">
          <div className="todos-todo_cta-edit" onClick={() => editTodo(todo)}>
            <FeatherIcon icon="edit" size="20" />
          </div>
          <div className="todos-todo_cta-delete" onClick={() => deleteTodo(todo.id)}>
            <FeatherIcon icon="trash-2" size="20" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Todo