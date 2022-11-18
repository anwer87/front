/* eslint-disable no-undef,no-nested-ternary */
import React from "react";
import { NavLink } from "react-router-dom";
import jwtDecode from "jwt-decode";
import {
	CDBSidebar,
	CDBSidebarMenuItem,
	CDBSidebarContent,
	CDBSidebarMenu,
	// @ts-ignore
} from "cdbreact";
import { userTypeRoute } from "../../util";

const SideBar: React.FC = (): JSX.Element => {
	const activeStyle = {
		textDecoration: "underline",
		textDecorationColor: "#fff",
		textDecorationThickness: "2px",
	};
	// const roles = "";
	const user = JSON.parse(localStorage.getItem("user") || "{}");

	if (user?.access_token) {
		// @ts-ignore
		const { role } = jwtDecode(user.access_token);
		// roles = role;
		if (role === userTypeRoute.admin) {
			return (
				<div className="d-flex vh-100 overflow-auto">
					<CDBSidebar
						style={{ width: "15rem" }}
						backgroundColor="#001C55"
					>
						<CDBSidebarContent className="sidebar-content">
							<CDBSidebarMenu>
								<NavLink to="/dashboard">
									<CDBSidebarMenuItem>
										<strong>1-Gestion Des comptes</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/upload"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>2-Mettre à jour</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/recap"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>3-Table Récapitulatif</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/operation"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										{/* eslint-disable-next-line react/no-unescaped-entities */}
										<strong>
											4-Table D&apos;opérations
										</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/demontage"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>5-Table De Démontage</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/ensemble"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>6-Table De S-Ensemble</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/zinguage"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>
											7-Table De Sous-traitants
										</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/blocage"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>8-Table De Blocage</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/montage"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>9-Table De Montage</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/export"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									{/* eslint-disable-next-line react/no-unescaped-entities */}
									<CDBSidebarMenuItem>
										<strong>10-Table D&apos;export</strong>
									</CDBSidebarMenuItem>
								</NavLink>
							</CDBSidebarMenu>
						</CDBSidebarContent>
					</CDBSidebar>
				</div>
			);
		}
		if (role === userTypeRoute.demontage) {
			return (
				<div className="d-flex vh-100 overflow-auto">
					<CDBSidebar
						style={{ width: "15rem" }}
						backgroundColor="#001C55"
					>
						<CDBSidebarContent className="sidebar-content">
							<CDBSidebarMenu>
								<NavLink
									to="/dashboard"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>1-Table De Démontage</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/recap"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>2-Table Récapitulatif</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/operation"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										{/* eslint-disable-next-line react/no-unescaped-entities */}
										<strong>
											3-Table D&apos;opérations
										</strong>
									</CDBSidebarMenuItem>
								</NavLink>
							</CDBSidebarMenu>
						</CDBSidebarContent>
					</CDBSidebar>
				</div>
			);
		}
		if (role === userTypeRoute.export) {
			return (
				<div className="d-flex vh-100 overflow-auto">
					<CDBSidebar
						style={{ width: "15rem" }}
						backgroundColor="#001C55"
					>
						<CDBSidebarContent className="sidebar-content">
							<CDBSidebarMenu>
								<NavLink
									to="/dashboard"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									{/* eslint-disable-next-line react/no-unescaped-entities */}
									<CDBSidebarMenuItem>
										<strong>1-Table D&apos;export</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/operation"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										{/* eslint-disable-next-line react/no-unescaped-entities */}
										<strong>
											2-Table D&apos;opérations
										</strong>
									</CDBSidebarMenuItem>
								</NavLink>
							</CDBSidebarMenu>
						</CDBSidebarContent>
					</CDBSidebar>
				</div>
			);
		}
		if (role === userTypeRoute.sous_ensemble) {
			return (
				<div className="d-flex vh-100 overflow-auto">
					<CDBSidebar
						style={{ width: "15rem" }}
						backgroundColor="#001C55"
					>
						<CDBSidebarContent className="sidebar-content">
							<CDBSidebarMenu>
								<NavLink
									to="/dashboard"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>1-Table De S-Ensemble</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/recap"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>2-Table Récapitulatif</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/operation"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										{/* eslint-disable-next-line react/no-unescaped-entities */}
										<strong>
											3-Table D&apos;opérations
										</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/zinguage"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>
											4-Table De Sous-traitants
										</strong>
									</CDBSidebarMenuItem>
								</NavLink>
							</CDBSidebarMenu>
						</CDBSidebarContent>
					</CDBSidebar>
				</div>
			);
		}
		if (role === userTypeRoute.production) {
			return (
				<div className="d-flex vh-100 overflow-auto">
					<CDBSidebar
						style={{ width: "15rem" }}
						backgroundColor="#001C55"
					>
						<CDBSidebarContent className="sidebar-content">
							<CDBSidebarMenu>
								<NavLink
									to="/dashboard"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>1-Table Récapitulatif</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/operation"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										{/* eslint-disable-next-line react/no-unescaped-entities */}
										<strong>
											2-Table D&apos;opérations
										</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/ensemble"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>3-Table De S-Ensemble</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/zinguage"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>
											4-Table De Sous-traitants
										</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/blocage"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>5-Table De Blocage</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/montage"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>6-Table De Montage</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/export"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									{/* eslint-disable-next-line react/no-unescaped-entities */}
									<CDBSidebarMenuItem>
										<strong>7-Table D&apos;export</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/demontage"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>8-Table De Démontage</strong>
									</CDBSidebarMenuItem>
								</NavLink>
							</CDBSidebarMenu>
						</CDBSidebarContent>
					</CDBSidebar>
				</div>
			);
		}
		if (role === userTypeRoute.montage) {
			return (
				<div className="d-flex vh-100 overflow-auto">
					<CDBSidebar
						style={{ width: "15rem" }}
						backgroundColor="#001C55"
					>
						<CDBSidebarContent className="sidebar-content">
							<CDBSidebarMenu>
								<NavLink
									to="/dashboard"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>1-Table De Montage</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/blocage"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>2-Table De Blocage</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/recap"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										<strong>3-Table Récapitulatif</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/operation"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									<CDBSidebarMenuItem>
										{/* eslint-disable-next-line react/no-unescaped-entities */}
										<strong>
											4-Table D&apos;opérations
										</strong>
									</CDBSidebarMenuItem>
								</NavLink>
								<NavLink
									to="/dashboard/export"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
								>
									{/* eslint-disable-next-line react/no-unescaped-entities */}
									<CDBSidebarMenuItem>
										<strong>5-Table D&apos;export</strong>
									</CDBSidebarMenuItem>
								</NavLink>
							</CDBSidebarMenu>
						</CDBSidebarContent>
					</CDBSidebar>
				</div>
			);
		}
	}

	return <div>error</div>;
};

export default SideBar;
