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

export class OnshapeThumbnailV1 implements INodeType {

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
			operation === 'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/s/{sz}');

		const items = this.getInputData();
		const returnData: IDataObject[] = [];
		const length = items.length as number;
		for (let i = 0; i < length; i++) {
			try {
				const iNodeRequest = parseParameters.call(this, i);

				if (isImage) {
					Object.assign(iNodeRequest.headers, { Accept: 'application/json,text/html,application/xhtml+xml,application/xml,text/*;q=0.9, image/*;q=0.8, */*;q=0.7' })
				}

				var url_string = ''
				if (operation === 'GET /thumbnails/d/{did}/w/{wid}/e/{eid}/s/{sz}') {
					const isUrl = this.getNodeParameter('isUrl', i)
					if (isUrl) {
						const urlSplit = (this.getNodeParameter('url-string', i) as string).split('?');
						url_string = urlSplit[0] + '/s/' +  (this.getNodeParameter('sz-string(path)', i) as string)
						const url = new URL(url_string);
						iNodeRequest.query = Object.entries(url.searchParams);
					}
				}

				const responseData = await apiRequest.call(
					this,
					iNodeRequest.method, iNodeRequest.path,
					iNodeRequest.body, iNodeRequest.query,
					iNodeRequest.headers, url_string, (isImage) ? { encoding: null } : {}
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
