/* eslint-disable no-undef */
import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import jwtDecode from "jwt-decode";
import { authProvider } from "../../api";
import logo from "../../assets/images/PMI-Logo.png";

const NavBar: React.FC = (): JSX.Element => {
	const { logout } = authProvider;
	const user = JSON.parse(localStorage.getItem("user") || "{}");
	let usern = "";
	if (user?.access_token) {
		// @ts-ignore
		const { userName } = jwtDecode(user.access_token);
		usern = userName;
	}
	const navigate = useNavigate();
	return (
		<Navbar>
			<Container fluid>
				<Navbar.Brand>
					<img
						src={logo}
						alt="logo"
						style={{ maxHeight: "1.625rem" }}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="ms-auto my-2  my-lg-0 justify-content-end"
						style={{ maxHeight: "6.25rem" }}
						navbarScroll
					>
						<Navbar.Text className="me-2 text-light">
							Connecté en tant que: {usern}
						</Navbar.Text>
						<Button
							size="sm"
							variant="secondary"
							onClick={async () => {
								await logout().then(() => navigate("/"));
							}}
						>
							Déconnecter
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
