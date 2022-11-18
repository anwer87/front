/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { modelInitialState } from "../../../types";

const initialState: modelInitialState = {
	showModel: false,
};

const modelSlice = createSlice({
	name: "model",
	initialState,
	reducers: {
		setShow: (state, action) => {
			state.showModel = action.payload.showModel;
		},
	},
});

export const { setShow } = modelSlice.actions;
export default modelSlice.reducer;
