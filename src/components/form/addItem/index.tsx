/* eslint-disable react/jsx-props-no-spreading,no-nested-ternary */
import React, { useEffect, useState } from "react";
import {
	Row,
	Col,
	Form,
	Button,
	FormGroup,
	FormLabel,
	FormControl,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import jwtDecode from "jwt-decode";
import { messageBody } from "../../../lib";

import { AddItemFormProps, AddItemsFormProps } from "../../../types";

const AddItemForm: React.FC<AddItemFormProps> = ({
	table,
	options,
	rebutEnable,
	// filterLot,
	filterOf,
	// eslint-disable-next-line no-undef
}): JSX.Element => {
	const [globalUserName, setUserName] = useState<string>("");
	const [gMatricule, setMatricule] = useState<string>("");
	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user") || "{}");
		if (user?.access_token) {
			// @ts-ignore
			const { userName, matricule } = jwtDecode(user.access_token);
			setMatricule(matricule);
			setUserName(userName);
		}
	}, []);
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<AddItemsFormProps>();

	filterOf(watch("of", ""));
	const api = useMutation(options.api.addNew, {
		onSuccess() {
			messageBody({ errorType: "success", message: "Article ajouté" });
		},
		onError(error) {
			console.log(error);
			messageBody({
				errorType: "warning",
				// @ts-ignore
				message: `${error.response.data.message}`,
			});
		},
	});

	return (
		// @ts-ignore*
		<Form
			onSubmit={handleSubmit(
				({ of, emp, lot, prepare, rebut, comment }) => {
					api.mutate({
						endpoint: options.endPoints.addNew,
						data: {
							of,
							emp,
							lot,
							prepare,
							rebut,
							comment,
							userName: globalUserName,
							matricule: gMatricule,
							table,
						},
					});
				}
			)}
		>
			<Row className="w-50">
				<Col>
					<FormGroup controlId="of">
						<FormLabel className="fw-bold">
							Order de Fabrication
						</FormLabel>
						<FormControl
							type="number"
							inputMode="numeric"
							min="0"
							placeholder="Order de Fabrication"
							{...register("of", { required: true })}
						/>
					</FormGroup>
				</Col>
				<Col>
					<FormGroup controlId="lot">
						<FormLabel className="fw-bold">N°Lot</FormLabel>
						<FormControl
							type="text"
							placeholder="LOT"
							{...register("lot", { required: true })}
						/>
					</FormGroup>
				</Col>
				<Col>
					<FormGroup controlId="emp">
						<FormLabel className="fw-bold">Emp</FormLabel>
						<FormControl
							type="text"
							placeholder="Emp"
							{...register("emp", { required: true })}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row className="w-50">
				<Col>
					<FormGroup controlId="Rebut">
						<FormLabel className="fw-bold">Rebut</FormLabel>
						<FormControl
							type="number"
							inputMode="numeric"
							min="0"
							placeholder="Rebut"
							disabled={rebutEnable}
							{...register("rebut")}
						/>
					</FormGroup>
				</Col>
				<Col>
					<FormGroup controlId="prepare">
						<FormLabel className="fw-bold">
							Quaniité Préparer
						</FormLabel>
						<FormControl
							type="number"
							placeholder="Quaniité Préparer"
							{...register("prepare", { required: true })}
						/>
					</FormGroup>
				</Col>
				<Col>
					<FormGroup controlId="comment">
						<FormLabel className="fw-bold">Commentaire</FormLabel>
						<FormControl
							type="text"
							placeholder="Commentaire"
							{...register("comment")}
						/>
					</FormGroup>
				</Col>
			</Row>
			<Row className="my-2">
				<Col className="d-flex justify-content-end">
					<Button type="submit">Envoyer</Button>
				</Col>
			</Row>
			{errors.of
				? messageBody({
						errorType: "warning",
						message: "of is empty",
				  })
				: errors.emp
				? messageBody({
						errorType: "warning",
						message: "emp is empty",
				  })
				: errors.lot
				? messageBody({
						errorType: "warning",
						message: "lot is empty",
				  })
				: errors.prepare
				? messageBody({
						errorType: "warning",
						message: "prepare is empty",
				  })
				: null}
		</Form>
	);
};

export default AddItemForm;
