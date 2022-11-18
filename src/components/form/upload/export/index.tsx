import React, { useState } from "react";
import { Button, Form, FormGroup, FormSelect } from "react-bootstrap";
import { useMutation } from "react-query";
import { dataProvider } from "../../../../api";
import { NormalProps } from "../../../../types";
import { messageBody } from "../../../../lib";

// eslint-disable-next-line no-undef
const ExportTable: React.FC<NormalProps> = (): JSX.Element => {
	const [tableName, setTable] = useState<string>("traceability");
	// eslint-disable-next-line no-underscore-dangle
	const api = useMutation(dataProvider._export, {
		onSuccess() {
			messageBody({ errorType: "success", message: "Generated" });
		},
		onError(error) {
			console.log(error);
			messageBody({ errorType: "warning", message: "error" });
		},
	});
	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				api.mutate({ table: tableName });
			}}
		>
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			<h2 className="mb-3">Tableau d'exportation</h2>
			<FormGroup className="mb-3" controlId="ImportFormSelectTable">
				<FormSelect
					onChange={(item) => setTable(item.target.value)}
					onBlur={(item) => setTable(item.target.value)}
					value={tableName}
				>
					<option value="production">Production</option>
					<option value="traceability">Traceability</option>
				</FormSelect>
			</FormGroup>
			<Button type="submit">Exporter</Button>
		</Form>
	);
};

export default ExportTable;
