import "./header.css";
import Medicine from "../../assets/images/Medicine.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { logout } from "../../redux-store/AuthSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  window.addEventListener("scroll", () => {
    let isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated=="") {
      const header = document.getElementsByClassName("header")[0];
      header.classList.toggle("active", window.scrollY > 200);
    }

    //{console.log(document.body.scrollHeight)}
  });
  // window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch=useDispatch()
  return (
    <>
     
        <div className="header">
          <div className="containerr ">
            <div className="header__content">
              <div className="logo">
                <Link to="/">
                 Rukn
                </Link>
              </div>
          
              
              <div className="account d-flex align-items-center">
                {isLoggedIn ?<div className="d-flex gap-2  align-items-center" ><button className="btn" onClick={()=>dispatch(logout())}>Logout</button></div>: 
                <div>
                  <a href="/login" type="button" className="btn btn-dark me-3 text-white head-login">Login</a>
                  <a href="register" type="button" className="btn btn-dark me-3 text-white">Register</a>
                  </div> 
}
             
              </div>
            </div>
          </div>
        </div>

    </>
  );
}

export default Header;
