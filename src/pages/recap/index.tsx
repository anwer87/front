/* eslint-disable no-undef */
// @ts-nocheck
import React from "react";
import { useQuery } from "react-query";
import { Table } from "../../components";
import { dataProvider } from "../../api";
import { traceOptions, recapTableCol } from "../../util";

const Recap: React.FC = (): JSX.Element => {
	// eslint-disable-next-line no-return-await
	const { data } = useQuery(
		["production"],
		dataProvider.getAllProductionData,
		{
			enabled: true,
			refetchInterval: 2000,
			refetchIntervalInBackground: true,
		}
	);

	return (
		<div>
			<Table
				rows={data}
				columns={recapTableCol}
				data={data}
				options={traceOptions}
				pageName="RECAP"
			/>
		</div>
	);
};

export default Recap;
