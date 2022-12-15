import {
	ICredentialType,
	INodeProperties,
	NodePropertyTypes,
} from 'n8n-workflow';

export class OnshapeOAuth2Api implements ICredentialType {
	name = 'onshapeOAuth2Api';
	extends = [
		'oAuth2Api',
	];
	displayName = 'Onshape OAuth2 API';
	properties: INodeProperties[] = [
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: 'https://oauth.onshape.com/oauth/authorize',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: 'https://oauth.onshape.com/oauth/token',
			required: true,
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Auth URI Query Parameters',
			name: 'authQueryParameters',
			type: 'hidden',
			default: '',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
	];
}
