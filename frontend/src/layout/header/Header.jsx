import LogoArgentBank from "./argentBankLogo.webp";
import { NavLink } from 'react-router-dom';
import { setLogOut } from "../../redux/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {

  const token = useSelector((state) => state.auth.token);
  const userName = useSelector((state) => state.user.userName);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogOut());
  };


    return (
    <header>
         <nav className="main-nav">
         <NavLink to ='/' >
      <div className="main-nav-logo" >
        <img
          className="main-nav-logo-image"
          src={LogoArgentBank}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </div>
      </NavLink>
      {token ? (  <div className="nav-signout">
                   <NavLink to ='/user' > 
                   <div className="main-nav-item">
                     <i className="fa fa-user-circle"></i>{userName}
                     
                   </div>
                   </NavLink>
                   <NavLink to ='/' onClick={handleLogout}> 
                   <div className="main-nav-item">
                     <i className="fa fa-sign-out"></i>
                     Sign Out
                   </div>
                   </NavLink>
                   </div>
                   
                ) : (
                  <NavLink to ='/sign-in' > 
                  <div className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                  </div>
                  </NavLink>
                )}
      
    </nav>
   
    </header>)
}

export default Header