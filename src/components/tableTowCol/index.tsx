/* eslint-disable no-undef */
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Row, Col } from "react-bootstrap";
import { TableTowRowProps } from "../../types";

const TableTowCol: React.FC<TableTowRowProps> = ({
	rows,
	columns,
	Model,
	options,
	pageName,
	rebutEnable,
}): JSX.Element => {
	const [ofValue, setOfValue] = useState<string>("");
	return (
		<div className="vh-100 mt-2">
			<Container>
				<Row>
					<Col>
						<h2 className="fw-bold text-success">{pageName}</h2>
						<Model
							options={options}
							table={pageName}
							rebutEnable={rebutEnable}
							filterOf={setOfValue}
						/>
					</Col>
				</Row>
				<Row>
					<Col style={{ minHeight: "23rem", minWidth: "26rem" }}>
						<DataGrid
							rows={rows}
							columns={columns}
							pageSize={40}
							rowsPerPageOptions={[10]}
							filterModel={{
								items: [
									{
										columnField: "of",
										operatorValue: "contains",
										value: ofValue,
									},
								],
							}}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default TableTowCol;
