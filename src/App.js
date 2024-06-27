import './App.css'
import {  Routes ,Route} from "react-router-dom"
import Home from "./compontents/home/Home"
import Header from "./compontents/header/Header"
import Register from "./compontents/login/Register"
import Login from "./compontents/login/Login"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <>
    <div className="App">
    <Header/>
        <Routes>
          <Route path='/' element={<Home/>}  />
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>



   
    </div>
     
 
    </>
  )
}

export default App
