import Button from "../button/Button.jsx";
import InputWrapper from "../inputWrapper/InputWrapper.jsx";

function Form() {
    return (
        <form>
        <InputWrapper
                id="username"
                label="Username"
                type="text"
            />
            <InputWrapper
                id="password"
                label="Password"
                type="password"
            />
        <div class="input-remember">
          <input type="checkbox" id="remember-me" /><label for="remember-me">
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