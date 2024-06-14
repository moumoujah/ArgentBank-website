import React from 'react';
// import Header from '../../layout/header/Header.jsx';
// import Footer from '../../layout/footer/Footer.jsx';
import LoginForm from '../../components/form/Form.jsx';

function SignIn() {
    document.title = "Argent Bank - Sign In"
    return (

      <main className="main bg-dark">
          <section className="sign-in-content">
              <i className="fa fa-user-circle sign-in-icon"></i>
              <h1>Sign In</h1>
              <LoginForm />
          </section>
      </main>
  )
}

export default SignIn