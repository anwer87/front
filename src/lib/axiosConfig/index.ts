import Axios from "axios";

function authHeader() {
	const user = JSON.parse(localStorage.getItem("user") || "{}");
	if (user && user.access_token) {
		return {
			"Content-Type": "application/json",
			Accept: "application/json",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
			Authorization: `Bearer ${user.access_token}`,
		};
	}
	return {
		"Content-Type": "application/json",
		Accept: "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	};
}

const axios = Axios.create({
	baseURL: "http://localhost:3500/api",
	headers: authHeader()
});

export default axios;
