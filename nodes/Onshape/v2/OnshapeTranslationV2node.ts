import {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeBaseDescription,
	INodeTypeDescription,
} from 'n8n-workflow';

import { apiRequest } from '../GenericFunctions';
import { versionDescription } from './actions/versionTranslationDescription';
// import { loadOptions } from './methods';
import { parseParameters } from '../generateRequest';

export class OnshapeTranslationV2 implements INodeType {

	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			...versionDescription,
		};
	}

	//methods = { loadOptions };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: IDataObject[] = [];
		const length = items.length as number;
		for (let i = 0; i < length; i++) {
			try {
				const iNodeRequest = parseParameters.call(this, i);
				const responseData = await apiRequest.call(
					this,
					iNodeRequest.method,
					iNodeRequest.path,
					iNodeRequest.body,
					iNodeRequest.query,
					iNodeRequest.headers
				);
				if (Array.isArray(responseData)) {
					returnData.push.apply(returnData, responseData as IDataObject[]);
				} else {
					returnData.push(responseData as IDataObject);
				}
			} catch (error: any) {
				if (this.continueOnFail()) {
					returnData.push({ error: error.message });
					continue;
				}
				throw error;
			}
		}
		return [this.helpers.returnJsonArray(returnData)];
	}
}
