import React, { useState } from "react";
import { useMutation } from "react-query";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AddUpdateUserForm } from "../../form";
import { messageBody } from "../../../lib";
import { UpdateUserProps } from "../../../types";

const UpdateUserModel: React.FC<UpdateUserProps> = ({
	api,
	endPoint,
	showState,
	stateChanger,
	modelTitle,
	data,
}) => {
	const [userName, setUsername] = useState<string>(data?.userName);
	const [password, setPassword] = useState<string>("");
	const [role, setRole] = useState<string>(data?.role);
	const [matricule, setMatricule] = useState<string>(data?.matricule);

	const caller = useMutation(api, {
		onSuccess: () => {
			stateChanger(!showState);
			messageBody({
				errorType: "success",
				message: "updated",
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

	const inputData = {
		userName,
		password,
		role,
		matricule,
	};
	// eslint-disable-next-line no-void
	const onSubmit = () => {
		// @ts-ignore
		caller.mutate({ endPoint, inputData });
	};

	return (
		<Modal
			show={showState}
			size="lg"
			onHide={() => stateChanger(!showState)}
		>
			<Modal.Header closeButton>
				<Modal.Title>{modelTitle}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<AddUpdateUserForm
					matricule={matricule}
					password={password}
					role={role}
					userName={userName}
					setMatricule={setMatricule}
					setPassword={setPassword}
					setRole={setRole}
					setUserName={setUsername}
					idLabel
					id={data?.id}
				/>
			</Modal.Body>
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

export default UpdateUserModel;
