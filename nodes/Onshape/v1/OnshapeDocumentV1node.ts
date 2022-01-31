import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeBaseDescription,
	INodeTypeDescription,
} from 'n8n-workflow';

import { apiRequest } from '../GenericFunctions';
import { versionDescription } from './actions/versionDocumentDescription';
// import { loadOptions } from './methods';
import { parseParameters } from '../generateRequest';

export class OnshapeDocumentV1 implements INodeType {

	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			...versionDescription,
		};
	}

	//methods = { loadOptions };

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {

		const operation = this.getNodeParameter('operation', 0) as string;
		const isJson = !(operation === 'GET /api/documents/d/{did}/externaldata/{fid}');
		const items = this.getInputData();
		const returnData: IDataObject[] = [];
		const length = items.length as number;

		for (let i = 0; i < length; i++) {
			try {
				const iNodeRequest = parseParameters.call(this, i);
				const responseData = await apiRequest.call(
					this,
					iNodeRequest.method, iNodeRequest.path,
					iNodeRequest.body, iNodeRequest.query,
					iNodeRequest.headers, '', { json: isJson }
				);
				(Array.isArray(responseData)) ?
					returnData.push.apply(returnData, responseData as IDataObject[]) :
					returnData.push(responseData as IDataObject);
			} catch (error: any) {
				if (this.continueOnFail()) {
					returnData.push({ error: error.message });
					continue;
				}
				throw error;
			}
		}

		if (isJson)
			return [this.helpers.returnJsonArray(returnData)]
		else {
			const binary = await Promise.all(returnData.map(async (el: any) => {
				return { json: {}, binary: { ['data']: await this.helpers.prepareBinaryData(Buffer.from(el, 'utf-8'), 'data', 'text/plain') } };
			}));
			return [binary]
		}

	}
}
