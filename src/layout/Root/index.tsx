/* eslint-disable no-undef */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavBar, SideBar } from "../../components";
import { NormalProps } from "../../types";

const RootLayout: React.FC<NormalProps> = ({ children }): JSX.Element => (
	<Container fluid className="px-0">
		<Row >
			<Col>
				<NavBar />
			</Col>
		</Row>
		<Row>
			<Col xs={6} md={2} className="px-0">
				<SideBar />
			</Col>
			<Col xs={12} md={10} className="px-0">
				{children}
			</Col>
		</Row>
	</Container>
);

export default RootLayout;
