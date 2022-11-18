import React, { useState } from "react";
import {
	Button,
	Form,
	FormControl,
	FormGroup,
	FormLabel,
	FormSelect,
} from "react-bootstrap";
import { useMutation } from "react-query";
import { NormalProps } from "../../../../types";
import { dataProvider } from "../../../../api";
import { messageBody } from "../../../../lib";

// eslint-disable-next-line no-undef
const ImportForm: React.FC<NormalProps> = (): JSX.Element => {
	const [tableName, setTable] = useState<string>("production");
	const [fileName, setFile] = useState<Blob>();
	// eslint-disable-next-line no-underscore-dangle
	const api = useMutation(dataProvider._import, {
		onSuccess() {
			messageBody({ errorType: "success", message: "Uploaded" });
		},
		onError(error) {
			console.log(error);
			messageBody({ errorType: "warning", message: "error" });
		},
	});

	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
				api.mutate({ table: tableName, file: fileName });
			}}
		>
			<h2 className="mb-3">Importer le fichier</h2>
			<FormGroup className="mb-3" controlId="ImportFormSelectTable">
				<FormSelect
					onChange={(item) => setTable(item.target.value)}
					onBlur={(item) => setTable(item.target.value)}
					value={tableName}
				>
					<option value="production">Production</option>
				</FormSelect>
			</FormGroup>
			<FormGroup className="mb-3" controlId="importFormFile">
				<FormLabel>Select file</FormLabel>
				<FormControl
					onChange={(e) => {
						// @ts-ignore
						const file = e.target.files;
						// @ts-ignore
						if (file && file[0]) setFile(file[0]);
					}}
					onBlur={(e) => {
						// @ts-ignore
						const file = e.target.files;
						// @ts-ignore
						if (file && file[0]) setFile(file[0]);
					}}
					type="file"
					accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
				/>
			</FormGroup>
			<Button type="submit">Importer</Button>
		</Form>
	);
};

export default ImportForm;
