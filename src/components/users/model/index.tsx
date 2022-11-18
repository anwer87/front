import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { DeleteModel, AddNewUserModel, UpdateUserModel } from "../../models";
import { ModelProps } from "../../../types";

// eslint-disable-next-line no-unused-vars
const ModelContainer: React.FC<ModelProps> = ({ id, options, data }) => {
	const [showDelete, setShowDelete] = useState<boolean>(false);
	const [showNew, setShowNew] = useState<boolean>(false);
	const [showUpDate, setShowUpDate] = useState<boolean>(false);

	// fix button disable
	let disabled: boolean = true;
	if (typeof id !== "undefined") {
		disabled = false;
	}

	return (
		<Row className="mt-2">
			<Col>
				<Button
					onClick={() => setShowDelete(!showDelete)}
					disabled={disabled}
				>
					Delete
				</Button>
				<DeleteModel
					api={options.api.delete}
					id={id}
					endPoint={options.endPoints.delete}
					// @ts-ignore
					item={data?.userName}
					showState={showDelete}
					stateChanger={setShowDelete}
				/>
			</Col>
			<Col>
				<Button onClick={() => setShowNew(!showNew)}> Add new</Button>
				<AddNewUserModel
					// @ts-ignore
					api={options.api.addNew}
					endPoint={options.endPoints.addNew}
					showState={showNew}
					stateChanger={setShowNew}
					modelTitle="add new user"
				/>
			</Col>
			<Col>
				<Button
					onClick={() => setShowUpDate(!showUpDate)}
					disabled={disabled}
				>
					Update
				</Button>
				<UpdateUserModel
					// @ts-ignore
					api={options.api.Update}
					endPoint={options.endPoints.UpDate}
					showState={showUpDate}
					stateChanger={setShowUpDate}
					// @ts-ignore
					data={data}
					// @ts-ignore
					modelTitle={`update user ${data?.userName}`}
				/>
			</Col>
		</Row>
	);
};

export default ModelContainer;
