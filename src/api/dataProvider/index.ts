import { AxiosResponse } from "axios";
import { axios, excelParser } from "../../lib";
import { DataProviderOptionsProps } from "../../types";

const dataProvider: DataProviderOptionsProps = {
	getAllUserData: async (): Promise<AxiosResponse<any, any>> => {
		const response = await axios.get("/users").then((res) => res.data);
		return response;
	},
	getAllProductionData: async (): Promise<AxiosResponse<any, any>> => {
		const response = await axios.get("/production").then((res) => res.data);
		return response;
	},
	getAllOperation: async (): Promise<AxiosResponse<any, any>> => {
		const response = await axios
			.get("/traceability")
			.then((res) => res.data);
		return response;
	},
	update: async ({
		endPoint,
		id,
		data,
	}): Promise<AxiosResponse<any, any>> => {
		const responce = await axios
			.patch(endPoint + id, data)
			.then((res) => res.data);
		return responce;
	},
	delete: async ({ endPoint, id }): Promise<AxiosResponse<any, any>> => {
		const response = await axios
			.delete(endPoint + id)
			.then((res) => res.data);
		return response;
	},
	create: async ({ endpoint, data }): Promise<AxiosResponse<any, any>> => {
		console.log(data);
		const response = await axios
			.post(endpoint, data)
			.then((res) => res.data);
		return response;
	},
	createUser: async (data: object): Promise<AxiosResponse<any, any>> => {
		const response = await axios
			.post("/users/createUser", data)
			.then((res) => res.data);
		return response;
	},
	// @ts-ignore
	_export: async (data): Promise<void> => {
		const responce = await axios
			.post("/files/export", data, { responseType: "blob" })
			.then((res) => {
				const href = URL.createObjectURL(res.data);
				const link = document.createElement("a");
				link.href = href;
				link.setAttribute("download", "file.xlsx");
				document.body.appendChild(link);
				link.click();

				// clean up "a" element & remove ObjectURL
				document.body.removeChild(link);
				URL.revokeObjectURL(href);
			});
		return responce;
	},
	_import: async ({ table, file }): Promise<AxiosResponse<any, any>> => {
		const responce = await excelParser(file).then(
			async (data: any) =>
				// eslint-disable-next-line no-return-await
				await axios
					.post(`/files/import/${table}`, data)
					.then((res) => res.data)
		);
		return responce;
	},
};

export default dataProvider;
