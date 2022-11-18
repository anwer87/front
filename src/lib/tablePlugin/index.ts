import { SelectedDataProps } from "../../types";

const modelChangeContainer =
	(
		// eslint-disable-next-line no-unused-vars
		callBack: (arg0: any[]) => any,
		// eslint-disable-next-line no-unused-vars
		callBack2: (arg0: any[]) => any,
		selected: Iterable<unknown> | null | undefined,
		data: Array<SelectedDataProps>
	) =>
	(selection: Array<any>): any => {
		// TODO: fix some issue here
		const selectionSetData = new Set(selection);
		const selectionSet = new Set(selected);
		if (selection.length > 1) {
			const result = selection.filter((s) => !selectionSet.has(s));
			callBack2(result);
			callBack([]);
		} else {
			callBack2(selection);
		}
		const resultData = data.filter((row) => selectionSetData.has(row.id));
		callBack(resultData);
	};

export default modelChangeContainer;
