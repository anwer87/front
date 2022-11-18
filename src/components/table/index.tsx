/* eslint-disable no-undef */
import React, { useState, useMemo } from "react";
import { DataGrid, GridRowId } from "@mui/x-data-grid";
import { Container, Row, Col } from "react-bootstrap";
import { modelChangeContainer } from "../../lib";
import { TableProps, SelectedDataProps } from "../../types";

const Table: React.FC<TableProps> = ({
	rows,
	columns,
	Model,
	options,
}): JSX.Element => {
	const [selected, setSelected] = useState<GridRowId[]>();
	const [selectedData, setSelectedData] = useState<Array<SelectedDataProps>>(
		[]
	);
	let data: SelectedDataProps | undefined;

	const modelChange = modelChangeContainer(
		setSelectedData,
		setSelected,
		selected,
		// @ts-ignore
		rows
	);

	useMemo(() => {
		if (selectedData.length !== 0) {
			data = selectedData.pop();
		}
	}, [selectedData]);

	return (
		<div className="vh-100 mt-2">
			<Container>
				<Row>
					<Col style={{ minHeight: "35rem", minWidth: "26rem" }}>
						<DataGrid
							// @ts-ignore
							rows={rows}
							columns={columns}
							pageSize={40}
							selectionModel={selected}
							rowsPerPageOptions={[40]}
							checkboxSelection
							onSelectionModelChange={modelChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						{Model ? (
							<Model
								id={data?.id}
								options={options}
								data={data}
							/>
						) : null}
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Table;
