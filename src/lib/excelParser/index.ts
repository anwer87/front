import { read, utils } from "xlsx";

const excelParser = (file: Blob | undefined): Promise<object> =>
	new Promise<object>((resolve, reject) => {
		try {
			const reader = new FileReader();
			const rASB = !!reader.readAsBinaryString;

			reader.onload = (e) => {
				// @ts-ignore
				const bstr = e.target.result;
				const wb = read(bstr, {
					type: rASB ? "binary" : "array",
					bookVBA: true,
				});
				const wsname = wb.SheetNames[0];
				const ws = wb.Sheets[wsname];
				const data = utils.sheet_to_json(ws);
				// const serializedData = JSON.stringify(data)
				resolve(data);
			};
			if (rASB) {
				if (file) {
					reader.readAsBinaryString(file);
				}
			} else if (file) {
				reader.readAsArrayBuffer(file);
			}
		} catch (e) {
			reject(e);
		}
	});

export default excelParser;
