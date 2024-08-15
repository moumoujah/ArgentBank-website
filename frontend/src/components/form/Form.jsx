import Button from "../button/Button.jsx";
import InputWrapper from "../inputWrapper/InputWrapper.jsx";
import { fetchLoginUser } from "../../redux/api.js";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLogIn } from "../../redux/reducers/authSlice.js";
import { useNavigate } from "react-router-dom";
// import { NavLink } from 'react-router-dom';

function Form() { 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fetchDataLogin = await fetchLoginUser(email, password);

    // Enregistrement du token dans le state si l'email et le mot de passe sont correct
    if (fetchDataLogin.status === 200) { 
        const token = fetchDataLogin.body.token;
        dispatch(setLogIn({ token }))
        // Une fois la connexion réussi redirection ver la page user
        navigate("/Profile") 
    }
  };
  
  // Enregistrement de l'email dans le storage si la checkbox est coché
  useEffect(() => {
    const storageEmail = localStorage.getItem("rememberMe");
    if (storageEmail) {
        setEmail(storageEmail);
        setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    if (rememberMe) {
        localStorage.setItem("rememberMe", email);
    } else {
        localStorage.removeItem("rememberMe");
    }
  }, [rememberMe, email]);

  const handleCheckBox = (e) => {
    setRememberMe(e.target.checked);
  };



    return (
        <form onSubmit={handleSubmit}>
        <InputWrapper
                id="username"
                label="Username"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputWrapper
                id="password"
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
            />
          <div className="input-remember">
          <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleCheckBox}  />
          <label for="remember-me">
                Remember me</label>
        </div>
        <Button
          className="sign-in-button"
          type="submit"
          txt="Sign In"            
        />
        
      </form>   
)
             }

export default Form