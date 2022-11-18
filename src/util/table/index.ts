import { GridColDef } from "@mui/x-data-grid";

/**
 * @About Table Col Names
 * */

const userTableCol: GridColDef[] = [
	{
		field: "id",
		headerName: "ID",
		width: 250,
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
		headerClassName: "fw-bold",
	},
	{
		field: "userName",
		headerName: "user Name",
		width: 250,
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
		headerClassName: "fw-bold",
	},
	{
		field: "role",
		headerName: "Role",
		width: 250,
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
		headerClassName: "fw-bold",
	},
	{
		field: "matricule",
		headerName: "Matricule",
		width: 290,
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
		headerClassName: "fw-bold",
	},
];

const commenTitle: GridColDef[] = [
	{
		field: "of",
		headerName: "N°Of",
		headerClassName: "data_grid_bg_color-cat1 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	}, // green
	{
		field: "lot",
		headerName: "Lot",
		headerClassName: "data_grid_bg_color-cat1 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "produit",
		headerName: "Produit",
		headerClassName: "data_grid_bg_color-cat1 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	}, // red
	{
		field: "reference",
		headerName: "Référence",
		headerClassName: "data_grid_bg_color-cat1 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "reference_sorea",
		headerName: "Référence.S",
		headerClassName: "data_grid_bg_color-cat1 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "status_of",
		headerName: "Statut Of",
		headerClassName: "data_grid_bg_color-cat1 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "flux",
		headerName: "Flux",
		headerClassName: "data_grid_bg_color-cat1 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "date_de_commande",
		headerName: "Date De Cmd",
		headerClassName: "data_grid_bg_color-cat1 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
		type: "date",
	},
	{
		field: "qte_bdee",
		headerName: "Qté Cmd",
		headerClassName: "data_grid_bg_color-cat1 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "rebut_total",
		headerName: "Rebut total",
		headerClassName: "data_grid_bg_color-cat2 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "ecr_brut",
		headerName: "Ecr.Brut",
		headerClassName: "data_grid_bg_color-cat2 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "ecr_net",
		headerName: "Ecr.Net",
		headerClassName: "data_grid_bg_color-cat2 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "taux_de_rebut",
		headerName: "Taux De Rebut",
		headerClassName: "data_grid_bg_color-cat2 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "observation_prod",
		headerName: "Observation Prod",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
];

const demontageTableCol: GridColDef[] = [
	...commenTitle,
	{
		field: "demontage",
		headerName: "Démontage",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
];

const exportTableCol: GridColDef[] = [
	...commenTitle,
	{
		field: "Export",
		headerName: "Export",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "reste_a_Exporter",
		headerName: "Reste à Exporter",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
];

const ensembleTableCol: GridColDef[] = [
	...commenTitle,
	{
		field: "sous_ensemble",
		headerName: "Sous-Ensemble",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "rebut_sous_ens",
		headerName: "Rebut Sous-Ens",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
];

const zingueurTableCol: GridColDef[] = [
	...commenTitle,
	{
		field: "zingueur",
		headerName: "S-Traitants",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
];

const montageTableCol: GridColDef[] = [
	...commenTitle,
	{
		field: "montage",
		headerName: "Montage",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "rebut_montage",
		headerName: "Rebut Montage",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
];

const bloquageTableCol: GridColDef[] = [
	...commenTitle,
	{
		field: "bloquage",
		headerName: "Bloquage",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
];

const recapTableCol: GridColDef[] = [
	...commenTitle,
	{
		field: "demontage",
		headerName: "Démontage",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "reste_a_demonter",
		headerName: "Reste à démonter",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "sous_ensemble",
		headerName: "Sous-Ensemble",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "rebut_sous_ens",
		headerName: "Rebut Sous-Ens",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "montage",
		headerName: "Montage",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "rebut_montage",
		headerName: "Rebut Montage",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "export",
		headerName: "Export",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "rebut_export",
		headerName: "Rebut Export",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "reste_a_exporter",
		headerName: "Reste à Exporter",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "bloquage",
		headerName: "Bloquage",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "zingueur",
		headerName: "Zingueur",
		headerClassName: "data_grid_bg_color-cat3 fw-bold",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
];

const opeTableCol: GridColDef[] = [
	{
		field: "of",
		headerName: "OF",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "emp",
		headerName: "EMP",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "lot",
		headerName: "LOT",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "prepare",
		headerName: "PREPARE",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "rebut",
		headerName: "REBUT",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "table",
		headerName: "TABLE",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "comment",
		headerName: "COMMENTAIRE",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "userName",
		headerName: "UTILISATEUR",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
	{
		field: "matricule",
		headerName: "MATRICULE",
		headerAlign: "center",
		align: "center",
	},
	{
		field: "date_doperation",
		headerName: "DATE",
		headerAlign: "center",
		align: "center",
		cellClassName: "fw-bold",
	},
];

export {
	userTableCol,
	demontageTableCol,
	exportTableCol,
	ensembleTableCol,
	zingueurTableCol,
	montageTableCol,
	bloquageTableCol,
	recapTableCol,
	opeTableCol,
};
