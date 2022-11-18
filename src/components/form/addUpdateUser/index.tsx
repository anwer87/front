import React from "react";
import Form from "react-bootstrap/Form";
import uuid from "react-uuid";
import { userType } from "../../../util";
import { UpdateAddUserFormProps } from "../../../types";

const AddUpdateUserForm: React.FC<UpdateAddUserFormProps> = ({
	userName,
	password,
	role,
	matricule,
	setUserName,
	setPassword,
	setRole,
	setMatricule,
	idLabel,
	id
}) => (
	<Form>
		{idLabel ? (
			<Form.Group className="mb-3" controlId="userid">
				<Form.Label>ID</Form.Label>
				<Form.Control
					type="text"
					placeholder={id}
					disabled
				/>
			</Form.Group>
		) : null}
		<Form.Group className="mb-3" controlId="usernameinput">
			<Form.Label>user name</Form.Label>
			<Form.Control
				type="text"
				placeholder="user name"
				value={userName}
				autoFocus
				onChange={(input) => setUserName(input.target.value)}
				onBlur={(input) => setUserName(input.target.value)}
			/>
		</Form.Group>
		<Form.Group className="mb-3" controlId="passwordinput">
			<Form.Label>password</Form.Label>
			<Form.Control
				type="text"
				placeholder="password"
				value={password}
				onChange={(input) => setPassword(input.target.value)}
				onBlur={(input) => setPassword(input.target.value)}
			/>
		</Form.Group>
		<Form.Group className="mb-3" controlId="matricule">
			<Form.Label>matricule</Form.Label>
			<Form.Control
				type="text"
				placeholder="matricule"
				value={matricule}
				onChange={(input) => setMatricule(input.target.value)}
				onBlur={(input) => setMatricule(input.target.value)}
			/>
		</Form.Group>
		<Form.Group controlId="roleinput">
			<Form.Label>Role</Form.Label>
			<Form.Select
				aria-label="roleinput"
				onChange={(item) => setRole(item.target.value)}
				onBlur={(item) => setRole(item.target.value)}
				value={role}
			>
				{userType.map((type) => (
					<option value={type} aria-label="roleinput" key={uuid()}>
						{type}
					</option>
				))}
			</Form.Select>
		</Form.Group>
	</Form>
);

export default AddUpdateUserForm;
