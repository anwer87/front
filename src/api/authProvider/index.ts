/* eslint-disable no-return-await */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { AxiosResponse } from "axios";
import { axios } from "../../lib";
import { AuthProviderProps } from "../../types";

const authProvider: AuthProviderProps = {
	login: async (data): Promise<AxiosResponse<any, any>> => {
		const response = await axios.post("/auth/signIn", data);
		return response;
	},
	logout: () => {
		localStorage.removeItem("user");
		return Promise.resolve();
	},
	checkAuth: () =>
		localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
	checkError: (error) => {
		const { status } = error;
		if (status === 401 || status === 403) {
			localStorage.removeItem("user");
			return Promise.reject();
		}
		return Promise.resolve();
	},
	getIdentity: () => {
		try {
			const { userName, role, matricule } = JSON.parse(
				localStorage.getItem("user") || "{}"
			);
			return Promise.resolve({ userName, role, matricule });
		} catch (error) {
			return Promise.reject(error);
		}
	},
	getPermissions: () => {
		const { role } = JSON.parse(localStorage.getItem("user") || "{}");
		return role ? Promise.resolve(role) : Promise.reject();
	},
};

export default authProvider;
