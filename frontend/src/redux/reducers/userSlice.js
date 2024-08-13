import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
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
    },
})

export const { setProfileUser } = userSlice.actions
export default userSlice.reducer