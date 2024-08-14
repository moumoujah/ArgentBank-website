import InputWrapper from "../inputWrapper/InputWrapper";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProfileUser, putUserName } from "../../redux/api";
import { setProfileUser, setEditName } from "../../redux/reducers/userSlice";


function FormUserName() {

    const user = useSelector((state) => state.user);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newUserName, setNewUserName] = useState(user.userName);

    // MAJ du state avec les données du user
    useEffect(() => {
        const dataUser = async () => {
            const data = await fetchProfileUser(token);
            // icitest
            dispatch(setProfileUser({ stateProfil: data }));
        };
        dataUser();
    }, [dispatch, token, user]);

    // Enregistrement dans le state le nouveau user name
    const handleSubmit = async (e) => {
        e.preventDefault();

        const valueInput = document.querySelector('input#userName');
        if (!valueInput.value) {
            alert("Le champ est vide saisissez un nouvel user name");
            return;
        }
        const onSuccess = await putUserName(token, newUserName);
        if (onSuccess) {
            dispatch(setEditName(newUserName));
            setIsEditing(!isEditing);
        }
    };

    return (
        <div>
            {isEditing ? (
                <div className="sign-in-content">
                    <h1>Edit user info</h1>
                    <form onSubmit={handleSubmit}>
                        <InputWrapper
                            id="userName"
                            label="User Name:"
                            type="text"
                            placeholder={user.userName}
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                        <InputWrapper
                            id="firstName"
                            label="First Name:"
                            type="text"
                            value={user.firstName}
                            disabled={true}
                        />
                        <InputWrapper
                            id="lastName"
                            label="Last Name:"
                            type="text"
                            value={user.lastName}
                            disabled={true}
                        />
                        <div>
                        <Button
                            className="edit-button"
                            type="submit"
                            txt="Save"
                        />
                        <Button
                            className="edit-button"
                            type="button"
                            onClick={() => setIsEditing(!isEditing)}
                            txt="Cancel"
                        />
                        </div>
                    </form>
                </div>
            ) : (
                <div className="header">
                    <h1>Welcome back<br />{user.firstName + " " + user.userName + "!"}</h1>
                    <Button
                        className="edit-button"
                        type="button"
                        onClick={() => setIsEditing(!isEditing)}
                        txt="Edit Name"
                    />
                </div>
            )}
        </div>
    )
            }
  
  export default FormUserName