/* eslint-disable no-undef */
// @ts-nocheck
import React from "react";
import { useQuery } from "react-query";
import { Table, ModelContainer } from "../../components";
import { dataProvider } from "../../api";
import { userTableCol, userOptions } from "../../util";

const Users: React.FC = (): JSX.Element => {
	// eslint-disable-next-line no-return-await
	const { data } = useQuery(["users"], dataProvider.getAllUserData, {
		enabled: true,
		refetchInterval: 10000,
		refetchIntervalInBackground: true,
	});

	return (
		<div>
			<Table
				rows={data}
				columns={userTableCol}
				Model={ModelContainer}
				options={userOptions}
			/>
		</div>
	);
};

export default Users;
