import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { // initialisation du state 
        email: "",
        firstName: "",
        lastName: "",
        userName: "",
    },
    reducers: {
        setProfileUser: (state, action) => {
            const stateProfil = action.payload.stateProfil.body;
            state.email = stateProfil.email;
            state.firstName = stateProfil.firstName;
            state.lastName = stateProfil.lastName;
            state.userName = stateProfil.userName;
        },
        setEditName: (state, action) => {
            state.userName = action.payload;
        },
    },
})

export const { setProfileUser,setEditName } = userSlice.actions
export default userSlice.reducer