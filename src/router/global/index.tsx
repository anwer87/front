import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../private";
import { Login } from "../../pages";

// eslint-disable-next-line no-undef
const Router: React.FC = (): JSX.Element => (
	<Routes>
		<Route path="/" element={<Login />} />
		<Route path="/dashboard/*" element={<PrivateRoute />} />
	</Routes>
);

export default Router;
