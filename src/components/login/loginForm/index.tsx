import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../../redux/features";
import { authProvider } from "../../../api";
import { messageBody } from "../../../lib";
import { loginProps } from "../../../types";

// TODO: add errors
// eslint-disable-next-line no-undef
const Form: React.FC = (): JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<loginProps>();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { login } = authProvider;
	const api = useMutation(login, {
		onSuccess: ({ data }) => {
			dispatch(setUserData(data));
			localStorage.setItem("user", JSON.stringify(data));
			messageBody({
				errorType: "success",
				message: "Authentifié",
			});
			navigate("/dashboard");
		},
		onError: (error) => {
			// @ts-ignore
			if (error.response.status === 403) {
				messageBody({
					errorType: "info",
					message: "Vérifier le nom d'utilisateur ou le mot de passe",
				});
			} else {
				messageBody({
					errorType: "warning",
					message: "Erreur inconnue",
				});
			}
		},
	});
	return (
		// @ts-ignore
		<form
			onSubmit={handleSubmit(({ userName, password }) => {
				// eslint-disable-next-line no-alert
				api.mutate({ userName, password });
			})}
			className="d-flex flex-column justify-content-between form-p"
		>
			<label htmlFor="userName">
				<div className="d-flex flex-row align-items-center justify-content-between">
					<p className="mb-0 me-5 text-white label">
						Nom d&apos;utilisateur
					</p>
					<input
						type="text"
						placeholder="Nom d'utilisateur"
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...register("userName", { required: true })}
						className="form-control  input-op"
					/>
				</div>
			</label>

			<label htmlFor="password">
				<div className="d-flex flex-row align-items-center gap-5 justify-content-start">
					<p className="mb-0 me-4 text-white label">Mot de passe</p>
					<input
						type="password"
						placeholder="Mot de passe"
						autoComplete="true"
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...register("password", { required: true })}
						className="form-control input-op"
					/>
				</div>
			</label>
			<button className="btn btn-primary" type="submit">
				Connexion
			</button>
			{errors.userName
				? messageBody({
						errorType: "warning",
						message:
							"veuillez vérifier le champ du nom d'utilisateur",
				  })
				: null}
			{errors.password
				? messageBody({
						errorType: "warning",
						message:
							"veuillez vérifier le champ du nom mot de passe",
				  })
				: null}
		</form>
	);
};

export default Form;
