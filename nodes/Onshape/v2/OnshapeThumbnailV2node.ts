import {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeBaseDescription,
	INodeTypeDescription,
} from 'n8n-workflow';

import { apiRequest } from '../GenericFunctions';
import { versionDescription } from './actions/versionThumbnailDescription';
// import { loadOptions } from './methods';
import { parseParameters } from '../generateRequest';
import { URL } from 'url';

export class OnshapeThumbnailV2 implements INodeType {

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

		const isImage = (operation === 'GET /thumbnails/d/{did}/w/{wid}/s/{sz}' ||
			operation === 'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/ac/{cid}/s/{sz}' ||
			operation === 'GET /thumbnails/d/{did}/{wv}/{wvid}/e/{eid}/s/{sz}');
		const items = this.getInputData();
		const returnData: IDataObject[] = [];
		const length = items.length as number;
		for (let i = 0; i < length; i++) {
			try {
				const iNodeRequest = parseParameters.call(this, i);

				if (isImage) {
					Object.assign(iNodeRequest.headers, { Accept: 'application/json,text/html,application/xhtml+xml,application/xml,text/*;q=0.9, image/*;q=0.8, */*;q=0.7' })
				}

				const responseData = await apiRequest.call(
					this,
					iNodeRequest.method, iNodeRequest.path,
					iNodeRequest.body, iNodeRequest.query,
					iNodeRequest.headers, '', (isImage) ? { encoding: null } : {}
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

		if (!isImage)
			return [this.helpers.returnJsonArray(returnData)]
		else {
			const binary: any = await Promise.all(returnData.map(async (el: any) => {
				return { json: {}, binary: { thumbnail: await this.helpers.prepareBinaryData(Buffer.from(el)) } };
			}));
			return [binary]
		}

	}
}
