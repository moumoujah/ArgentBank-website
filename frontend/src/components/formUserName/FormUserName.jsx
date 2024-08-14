import InputWrapper from "../inputWrapper/InputWrapper";
import Button from "../button/Button";


function FormUserName() {

      return (
        <div className="sign-in-content">
                    <h1>Edit user info</h1>
                    <form>
                        <InputWrapper
                            id="userName"
                            label="User Name:"
                            type="text"
                        />
                        <InputWrapper
                            id="firstName"
                            label="First Name:"
                            type="text"
                        />
                        <InputWrapper
                            id="lastName"
                            label="Last Name:"
                            type="text"
                        />
                        <Button
                            className="edit-button"
                            type="submit"
                            txt="Save"
                        />
                        <Button
                            className="edit-button"
                            type="button"
                            txt="Cancel"
                        />
                    </form>
                </div>

     )
  }
  
  export default FormUserName