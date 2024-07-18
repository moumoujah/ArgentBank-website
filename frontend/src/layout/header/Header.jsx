import LogoArgentBank from "./argentBankLogo.png";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
    <header>
         <nav class="main-nav">
         <NavLink to ='/' >
      <div class="main-nav-logo" >
        <img
          class="main-nav-logo-image"
          src={LogoArgentBank}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </div>
      </NavLink>
      <NavLink to ='/sign-in' > 
        <div class="main-nav-item">
          <i class="fa fa-user-circle"></i>
          Sign In
        </div>
        </NavLink>
    </nav>
   
    </header>)
}

export default Header