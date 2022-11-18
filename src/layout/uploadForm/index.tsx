import React from "react";
import { NormalProps } from "../../types";

// eslint-disable-next-line no-undef
const UploadFormLayout: React.FC<NormalProps> = ({ children }): JSX.Element => (
	<div className="container d-flex justify-content-center align-items-center h-100">
		{children}
	</div>
);

export default UploadFormLayout;
