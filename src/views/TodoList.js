import React, { useState } from "react";
import Todos from "./../compontents/todos/Todos";
import TodosForm from "./../compontents/todos/TodosForm";
const initialData = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
const TodoList = () => {
  const [todos, setTodos] = useState(initialData);
  const [mode, setMode] = useState("add");
  const [completeTask, setCompleteTask] = useState(false);

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
    setTodos((data) => {
      const newData = data.filter((td) => td.id !== id);
      return newData;
    });
  };

  const addNewTodo = (title) => {
    if (mode == "add") {
      const newTodo = {
        id: todos.length + 1,
        title: title,
        compeleted: false,
      };
      setTodos((PrevTodos) => {
        return [newTodo, ...PrevTodos];
      });
    } else if (mode === "edit") {
      console.log(activeTodo);
      const newTodos = todos.map((t) => {
        if (t.id === activeTodo.id) {
          console.log(6);
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
