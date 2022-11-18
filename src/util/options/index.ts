import { dataProvider } from "../../api";
import { TableOptionsProp } from "../../types";

const userOptions: TableOptionsProp = {
	api: {
		addNew: dataProvider.createUser,
		delete: dataProvider.delete,
		Update: dataProvider.update,
	},
	endPoints: {
		addNew: "/users/createUser",
		delete: "/users/delete/",
		UpDate: "/users/update/",
	},
};

const traceOptions: TableOptionsProp = {
	api: {
		addNew: dataProvider.create,
		delete: dataProvider.delete,
		Update: dataProvider.update,
	},
	endPoints: {
		addNew: "/traceability/create",
		delete: "/traceability/delete/",
		UpDate: "/traceability/update/",
	},
};

// eslint-disable-next-line import/prefer-default-export
export { userOptions, traceOptions };
