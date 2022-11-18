import React from "react";
import { useMutation } from "react-query";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { messageBody } from "../../../lib";
import { DeleteModelProps } from "../../../types";

const DeleteModel: React.FC<DeleteModelProps> = ({
	id,
	api,
	endPoint,
	item,
	showState,
	stateChanger,
}) => {
	const caller = useMutation(api, {
		onSuccess: () => {
			stateChanger(!showState);
			messageBody({
				errorType: "success",
				message: "Deleted",
			});
		},
		// eslint-disable-next-line no-unused-vars
		onError: ({ status }) => {
			messageBody({
				errorType: "warning",
				message: "unknown error",
			});
		},
	});

	// eslint-disable-next-line no-void
	const onSubmit = () => {
		// @ts-ignore
		caller.mutate({ endPoint, id });
	};

	return (
		<Modal show={showState} onHide={() => stateChanger(!showState)}>
			<Modal.Header closeButton>
				<Modal.Title>Delete Item</Modal.Title>
			</Modal.Header>
			<Modal.Body>`do you want delete item :{item}`</Modal.Body>
			<Modal.Footer>
				<Button
					variant="secondary"
					onClick={() => stateChanger(!showState)}
				>
					Close
				</Button>
				<Button variant="primary" onClick={() => onSubmit()}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default DeleteModel;
