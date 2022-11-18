/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "../../../types";

const initialState: userInitialState = {
	role: "",
	access_token: "",
	matricule: "",
	userName: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.role = action.payload.role;
			state.access_token = action.payload.access_token;
			state.matricule = action.payload.matricule;
			state.userName = action.payload.userName;
		},
	},
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
