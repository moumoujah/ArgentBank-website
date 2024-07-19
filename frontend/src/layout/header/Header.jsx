import LogoArgentBank from "./argentBankLogo.png";
import { NavLink } from 'react-router-dom';

function Header() {
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
      <NavLink to ='/sign-in' > 
        <div className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </div>
        </NavLink>
    </nav>
   
    </header>)
}

export default Header