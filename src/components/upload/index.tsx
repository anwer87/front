import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UploadFormLayout } from "../../layout";
import { ImportForm, ExportTable } from "../form";
import { NormalProps } from "../../types";

// eslint-disable-next-line no-undef
const UploadContainer: React.FC<NormalProps> = (): JSX.Element => (
	<Container className="mt-1 h-50">
		<Row className="h-100">
			<Col>
				<UploadFormLayout>
					<ImportForm />
				</UploadFormLayout>
			</Col>
			<Col>
				<UploadFormLayout>
					<ExportTable />
				</UploadFormLayout>
			</Col>
		</Row>
		<Row>
			<Col />
		</Row>
	</Container>
);

export default UploadContainer;
