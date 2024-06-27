import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import TodoList from './../../views/TodoList';
const Home=()=> {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (

    <div className='container pt-5'>
  {isLoggedIn ? (
        <div>
          <h1 className='text-white text-center mb-3'>Task Management</h1>
          <TodoList/>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
   

  

  )
}

export default Home