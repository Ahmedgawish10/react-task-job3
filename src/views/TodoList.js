import React, { useState,useEffect } from "react";
import Todos from "./../compontents/todos/Todos";
import TodosForm from "./../compontents/todos/TodosForm";
const initialData = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
const TodoList = () => {
  const [todos, setTodos] = useState(initialData);
  const [mode, setMode] = useState("add");
  const [completeTask, setCompleteTask] = useState(false);
  const [nextId, setNextId] = useState(() => {
    
    return localStorage.getItem("nextTodoId")? parseInt(localStorage.getItem("nextTodoId")) : 1;
  });

  useEffect(() => {
    localStorage.setItem("nextTodoId", nextId.toString());
  }, [nextId]);




  const [activeTodo, setActiveTodo] = useState(null);

  const setToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const toggleTodo = (id) => {
    setTodos((data) => {
      const newData = data.map((td) => {
        if (td.id === id) {
          return { ...td, compeleted: !td.compeleted };
        }
        return td;
      });
      // console.log(newData);
      return newData;
    });
  };

  const deleteTodo = (id) => { 
    const newData = todos.filter((td) => td.id !== id);
    setTodos(newData);
    if (newData.length==0) {
      setNextId(1)      
    }
  };

  const addNewTodo = (title) => {
    if (mode == "add") {
      const newTodo = {
        id: nextId,
        title: title,
        compeleted:false,
      };
      setTodos((PrevTodos) => {
        return [newTodo, ...PrevTodos];
      });
      setNextId((prevId) => prevId + 1); 

    } else if (mode === "edit") {
      const newTodos = todos.map((t) => {
        if (t.id === activeTodo.id) {
          t.title = title;
        }
        return t;
      });
      setTodos(newTodos);
      setMode("add");
    }
  };

  const toggleFilter = () => {
    if (mode === "filter") {
      setMode("add");
      console.log(" this all tasks completed and not complelted");
    } else {
      console.log(" this all tasks  completed  ! ");
      setMode("filter");
      setCompleteTask(true);
    }
  };

  const editTodo = (todo) => {
    setMode("edit");
    setActiveTodo(todo);
  };

  let currentTodos = [...todos];
  if (mode === "filter") {
    currentTodos = todos.filter((t) => t.compeleted);
  }
  if (mode === "edit" && activeTodo) {
    currentTodos = [activeTodo];
  }

  setToLocal();

  return (
    <div className="container1">
      <div className="todos">
        <TodosForm
          addNewTodo={addNewTodo}
          toggleFilter={toggleFilter}
          mode={mode}
          activeTodo={activeTodo}
        />
        <Todos
          todos={currentTodos}
          completeTask={completeTask}
          mode={mode}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
};

export default TodoList;
