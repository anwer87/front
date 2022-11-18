/* eslint-disable no-undef */
// @ts-nocheck
import React from "react";
import { useQuery } from "react-query";
import { AddItemForm, TableTowCol } from "../../components";
import { dataProvider } from "../../api";
import { traceOptions, montageTableCol } from "../../util";

const Montage: React.FC = (): JSX.Element => {
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
			<TableTowCol
				rows={data}
				columns={montageTableCol}
				data={data}
				Model={AddItemForm}
				options={traceOptions}
				pageName="TABLE DE MONTAGE"
			/>
		</div>
	);
};

export default Montage;
