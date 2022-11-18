import { configureStore } from "@reduxjs/toolkit";
import { userReducer, modelReducer } from "../features";

const store = configureStore({
	reducer: {
		user: userReducer,
		model: modelReducer,
	},
});

export default store;
