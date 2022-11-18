import { GridColDef } from "@mui/x-data-grid";
import type { AxiosResponse } from "axios";
import { store } from "../redux";
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

export interface NormalProps {
	children?: JSX.Element[] | JSX.Element;
}

interface DeleteProps {
	endPoint: string;
	id: number;
}

export type loginProps = {
	userName: string;
	password: string;
};

type getIdentityProps = {
	id?: string;
	userName?: string;
	role?: string;
	matricule?: string;
	error?: string;
};

export interface AuthProviderProps {
	login: (data: loginProps) => Promise<AxiosResponse<any, any>>;
	logout: () => Promise<void>;
	checkError: (error: any) => Promise<void>;
	checkAuth: () => Promise<void>;
	getIdentity: () => Promise<getIdentityProps>;
	getPermissions: () => Promise<any>;
}

interface UpdateData extends DeleteProps {
	data: object;
}

interface CreateProps {
	endpoint: string;
	data: object;
}

interface ExportProps {
	table: string;
}

interface ImportProps extends ExportProps {
	file: Blob | undefined;
}

export interface DataProviderOptionsProps {
	createUser: (data: CreateProps) => Promise<AxiosResponse<any, any>>;
	getAllUserData: () => Promise<AxiosResponse<any, any>>;
	getAllProductionData: () => Promise<AxiosResponse<any, any>>;
	getAllOperation: () => Promise<AxiosResponse<any, any>>;
	update: (data: UpdateData) => Promise<AxiosResponse<any, any>>;
	delete: (data: DeleteProps) => Promise<AxiosResponse<any, any>>;
	create: (data: CreateProps) => Promise<AxiosResponse<any, any>>;
	_import: (data: ImportProps) => Promise<AxiosResponse<any, any>>;
	_export: (data: ExportProps) => Promise<AxiosResponse<any, any>>;
}

export interface MessagesProps extends NormalProps {
	errorType: "danger" | "success" | "warning" | "info";
	message: any;
	extra?: any;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type userInitialState = {
	userName: string;
	access_token: string;
	role:
		| "Admin"
		| "chef d'equipe demontage"
		| "chef d'equipe sous-ensemble"
		| "chef d'equipe montage"
		| "chef production"
		| "agent d'export"
		| "";
	matricule: string;
	reducers?: any;
};

export interface SelectorStateProps {
	user: userInitialState;
}

export type modelInitialState = {
	showModel: boolean;
};

interface ModelDataProps {
	id?: string | number;
	api: (data: DeleteProps) => Promise<AxiosResponse<any, any>>;
	endPoint: string;
	item?: string;
}

type TableOptionsPropApi = {
	delete: (data: DeleteProps) => Promise<AxiosResponse<any, any>>;
	addNew: (data: CreateProps) => Promise<AxiosResponse<any, any>>;
	Update: (data: UpdateData) => Promise<AxiosResponse<any, any>>;
};

type TableOptionsPropEndPoints = {
	delete: string;
	addNew: string;
	UpDate: string;
};

export interface TableOptionsProp {
	api: TableOptionsPropApi;
	endPoints: TableOptionsPropEndPoints;
}

export interface ModelProps extends NormalProps {
	id?: any;
	options: TableOptionsProp;
	data?: object;
	filterOf?: React.Dispatch<React.SetStateAction<string>>;
	filterLot?: React.Dispatch<React.SetStateAction<string>>;
	table?: string;
	rebutEnable?: boolean;
}

export interface AddItemFormProps extends ModelProps {
	filterOf: React.Dispatch<React.SetStateAction<string>>;
	filterLot: React.Dispatch<React.SetStateAction<string>>;
	table?: string;
}

export interface TableProps extends NormalProps {
	rows: Array<object>;
	columns: GridColDef[];
	Model: React.FC<ModelProps>;
	options: TableOptionsProp;
}

type productionDataProps = {
	id: number;
	of: number;
	lot: string;
	produit: string;
	reference: string;
	reference_sorea: string;
	reference_eai: string;
	status_of: string;
	flux: string;
	date_de_commande: string;
	qte_bdee: string;
	qte_recu: string;
	ecr_brut: string;
	ecr_net: string;
	taux_de_rebut: string;
	observation_prod: string;
	demontage: string;
	reste_a_demonter: string;
	sous_ensemble: string;
	rebut_sous_ens: string;
	montage: string;
	rebut_montage: string;
	export: string;
	rebut_export: string;
	reste_a_Exporter: string;
	bloquage: string;
	zingueur: string;
};

export interface TableTowRowProps extends TableProps {
	data: productionDataProps;
	varC: string;
	pageName: string;
	rebutEnable: boolean;
}

export interface DeleteModelProps extends ModelDataProps {
	showState: boolean;
	stateChanger: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SelectedDataProps {
	id: string;
	userName: string;
	role: string;
	matricule: string;
}

export interface UpdateUserProps extends DeleteModelProps {
	data: SelectedDataProps;
	modelTitle?: string;
}

export interface AddUpdateUserProps extends DeleteModelProps {
	data?: SelectedDataProps;
	modelTitle?: string;
}

export interface UpdateAddUserFormProps {
	userName: string;
	password: string;
	role: string;
	matricule: string;
	idLabel: boolean;
	id?: string;
	setUserName: React.Dispatch<React.SetStateAction<string>>;
	setPassword: React.Dispatch<React.SetStateAction<string>>;
	setRole: React.Dispatch<React.SetStateAction<string>>;
	setMatricule: React.Dispatch<React.SetStateAction<string>>;
}

export interface UserRouteType {
	admin: string;
	demontage: string;
	sous_ensemble: string;
	montage: string;
	production: string;
	export: string;
}

export interface AddItemsFormProps {
	of: string;
	lot: string;
	prepare: string;
	comment: string;
	rebut: string;
	emp: string;
}
