/* eslint-disable no-undef */
import React from "react";
import { Form } from "../../components";

import work from "../../assets/images/management-les-apports-de-la-crise-1280x720.jpg";

const Login: React.FC = (): JSX.Element => (
	<div id="login-container">
		<img id="login-container-background" src={work} alt="skyImg" />

		<div className="login-form">
			<h1 className="login-header ms-2 mt-2 text-center text-capitalize">
				PMI GPAO-Pm Industries
			</h1>
			<Form />
		</div>
	</div>
);
export default Login;
