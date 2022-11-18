import React, { useState } from "react";
import { useMutation } from "react-query";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AddUpdateUserForm } from "../../form";
import { messageBody } from "../../../lib";
import { AddUpdateUserProps } from "../../../types";

const AddNewUserModel: React.FC<AddUpdateUserProps> = ({
	api,
	// endPoint,
	showState,
	stateChanger,
	modelTitle,
}) => {
	const [userName, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [role, setRole] = useState<string>("");
	const [matricule, setMatricule] = useState<string>("");

	const caller = useMutation(api, {
		onSuccess: () => {
			stateChanger(!showState);
			messageBody({
				errorType: "success",
				message: "added",
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
		caller.mutate(inputData);
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
					idLabel={false}
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

export default AddNewUserModel;
