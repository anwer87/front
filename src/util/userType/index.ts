import { UserRouteType } from "../../types";

const userType: Array<string> = [
	"Admin",
	"chef d'equipe demontage",
	"chef d'equipe sous-ensemble",
	"chef d'equipe montage",
	"chef production",
	"agent d'export",
];

const userTypeRoute: UserRouteType = {
	admin: userType[0],
	demontage: userType[1],
	sous_ensemble: userType[2],
	montage: userType[3],
	production: userType[4],
	export: userType[5],
};

export { userType, userTypeRoute };
