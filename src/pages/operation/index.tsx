/* eslint-disable no-undef */
// @ts-nocheck
import React from "react";
import { useQuery } from "react-query";
import { Table } from "../../components";
import { dataProvider } from "../../api";
import { opeTableCol, traceOptions } from "../../util";

const Operation: React.FC = (): JSX.Element => {
	// eslint-disable-next-line no-return-await
	const { data } = useQuery(["operation"], dataProvider.getAllOperation, {
		enabled: true,
		refetchInterval: 2000,
		refetchIntervalInBackground: true,
	});

	return (
		<div>
			<Table rows={data} columns={opeTableCol} options={traceOptions} />
		</div>
	);
};

export default Operation;
