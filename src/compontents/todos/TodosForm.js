import React, { useState,useEffect } from 'react'
import FeatherIcon from 'feather-icons-react'
const TodosForm = ({ addNewTodo, toggleFilter, mode, activeTodo }) => {
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (mode === 'edit'  ) {
      setTitle(activeTodo.title.trim())
    }
  }, [mode])

  const handleInputChange = (e) => {
    setTitle(e.target.value)
  }

  const handleAddNewTodo = () => {
    addNewTodo(title)
    setTitle('')
  }

  return (
    <div className="todos-form">
      <div className={`todos-form_icon ${mode == 'filter' ? 'active' : 'text-white'}`} onClick={toggleFilter}>
        <FeatherIcon icon="circle" className="me-1" />
      </div>
      <div className="todos-form_form">
        <input type="text" placeholder="Add new task..."  value={title} onChange={handleInputChange} />
      </div>
      <div className="todos-form_submit">
        <button className="btn text-white" disabled={!title.trim()} onClick={handleAddNewTodo} >
          {mode === 'edit' ?  'Edit' : 'Add' }
        </button>
      </div>
    </div>
  )
}

export default TodosForm