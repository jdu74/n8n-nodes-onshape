import {
	ICredentialType,
	INodeProperties,
	NodePropertyTypes,
} from 'n8n-workflow';

export class OnshapeApiKeys implements ICredentialType {
	name = 'onshapeApiKeys';
	displayName = 'OnShape API Keys';
	documentationUrl = 'onshape';
	properties: INodeProperties[] = [
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			default: '',
		},
	];
}
