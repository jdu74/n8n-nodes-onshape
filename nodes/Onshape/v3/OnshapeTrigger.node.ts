import {
	IHookFunctions,
	INodeTypeBaseDescription,
	IWebhookFunctions,
} from 'n8n-workflow';

import {
	IDataObject,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
} from 'n8n-workflow';

import { apiRequest } from './GenericFunctions';

export class OnshapeTrigger implements INodeType {

	lstEventsAppGroup = [
		{
			value: 'onshape.user.lifecycle.updateappsettings',
			name: 'Application Settings Modified',
			description: 'Occurs when user application settings are modified'
		}
	];
	lstEventsDocumentGroup = [
		{
			value: 'onshape.model.lifecycle.changed',
			name: 'Model Changed',
			description: 'Occurs when a change to a model has been made'
		},
		{
			value: 'onshape.model.translation.complete',
			name: 'Translation Request Completed',
			description: 'Occurs when a translation request is completed'
		},
		{
			value: 'onshape.model.lifecycle.metadata',
			name: 'Part/Element Metadata Modified',
			description: 'Occurs when part or element metadata is modified'
		},
		{
			value: 'onshape.model.lifecycle.createversion',
			name: 'Document Version Created',
			description: 'Occurs when a new version of a document is created'
		},
		{
			value: 'onshape.model.lifecycle.createworkspace',
			name: 'New Workspace Created',
			description: 'Occurs when a new workspace is created'
		},
		{
			value: 'onshape.model.lifecycle.createelement',
			name: 'New Element Created',
			description: 'Occurs when a new element is created'
		},
		{
			value: 'onshape.model.lifecycle.deleteelement',
			name: 'Element Deleted',
			description: 'Occurs when an element is deleted'
		},
		{
			value: 'onshape.document.lifecycle.statechange',
			name: 'Document State Changed',
			description: 'Occurs when an document changes state'
		},
		{
			value: 'onshape.model.lifecycle.changed.externalreferences',
			name: 'Eexternal Reference Changed',
			description: 'Occurs when an external reference changes'
		},
		{
			value: 'onshape.document.lifecycle.created',
			name: 'Document Created',
			description: 'Occurs when a document is created'
		},
		{
			value: 'onshape.revision.created',
			name: 'Revision Created',
			description: 'Occurs when a revision is created'
		},
		{
			value: 'onshape.comment.create',
			name: 'Document Comment Created',
			description: 'Occurs when a comment is created in a document'
		},
		{
			value: 'onshape.comment.update',
			name: 'Document Comment Updated',
			description: 'Occurs when a comment is updated in a document'
		},
		{
			value: 'onshape.comment.delete',
			name: 'Document Comment Deleted',
			description: 'Occurs when a comment is deleted in a document'
		},
	];
	lstEventsWorkflowGroup = [
		{
			value: 'onshape.workflow.transition',
			name: 'Revision/Release Package Transitions',
			description: 'Occurs when a revision or release package transitions through workflow states'
		},
	];
	lstEventsLifecycleGroup = [
		{
			value: 'webhook.ping',
			name: 'Webhook Ping',
			description: 'Occurs either in response to a request by an application to call a registered webhook, or as a post-registration validation initiated by Onshape'
		},
		{
			value: 'webhook.register',
			name: 'Webhook Register',
			description: 'Occurs in response to a notification registration API call'
		},
		{
			value: 'webhook.unregister',
			name: 'Webhook UnRegister',
			description: 'Occurs in response to a notification deregistation API call'
		},
	];
	versionDescription: INodeTypeDescription = {
		displayName: 'Onshapetrigger Trigger',
		name: 'onshapeTrigger',
		icon: 'file:onshape.svg',
		group: ['trigger'],
		version: 3,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Handle Onshape events via webhooks',
		defaults: {
			name: 'OnshapeTrigger',
		},
		inputs: [],
		outputs: ['main'],
		credentials:
			[
				{
					name: 'onshapeApiKeysApi',
					required: true,
					displayOptions: {
						show: {
							authentication: [
								'apiKeys',
							],
						},
					},
				},
				{
					name: 'onshapeOAuth2Api',
					required: true,
					displayOptions: {
						show: {
							authentication: [
								'oAuth2',
							],
						},
					},
				},
			],
		webhooks: [
			{
				name: 'default',
				isFullPath: true,
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: '={{$parameter["path"]}}',
			},
		],
		properties: [
			{
				displayName: 'Authentication',
				name: 'authentication',
				type: 'options',
				options: [
					{
						name: 'ApiKeys',
						value: 'apiKeys',
					},
					{
						name: 'OAuth2',
						value: 'oAuth2',
					},
				],
				default: 'apiKeys',
			},
			{
				displayName: 'Path',
				name: 'path',
				type: 'hidden',
				default: '',
				placeholder: 'webhook',
				required: true,
				description: 'The path to listen to',
			},
			{
				displayName: 'Event',
				name: 'event',
				type: 'options',
				required: true,
				default: '',
				options: [
					...this.lstEventsAppGroup,
					...this.lstEventsDocumentGroup,
					...this.lstEventsWorkflowGroup,
					...this.lstEventsLifecycleGroup
				],
			},
			{
				displayName: "clientId",
				name: "clientId",
				type: "string",
				default: "",
				displayOptions: {
					show: {
						event: ['onshape.user.lifecycle.updateappsettings'],
					},
				},
			},
			{
				displayName: "companyId/documentId",
				name: "idType",
				description: 'Whether IdType',
				type: "boolean",
				default: true,
				displayOptions: {
					show: {
						event: [
							...this.lstEventsDocumentGroup.filter(e => e.value !== 'onshape.document.lifecycle.statechange').map(e => e.value),
						],
					},
				},
			},
			{
				displayName: "companyId",
				name: "companyId",
				type: "string",
				default: "",
				displayOptions: {
					show: {
						event: [
							...this.lstEventsWorkflowGroup.map(e => e.value),
						],
					},
				},
			},
			{
				displayName: 'companyId',
				name: 'companyId',
				type: "string",
				default: "",
				displayOptions: {
					show: {
						event: [
							...this.lstEventsDocumentGroup.filter(e => e.value !== 'onshape.document.lifecycle.statechange').map(e => e.value),
							...this.lstEventsWorkflowGroup.map(e => e.value),
						],
						idType: [false]
					},
				},
			},
			{
				displayName: "documentId",
				name: "documentId",
				type: "string",
				default: "",
				displayOptions: {
					show: {
						event: [
							...this.lstEventsDocumentGroup.filter(e => e.value !== 'onshape.document.lifecycle.statechange').map(e => e.value)
						],
						idType: [true]
					},
				},
			},
			{
				displayName: "documentId",
				name: "documentId",
				type: "string",
				default: "",
				displayOptions: {
					show: {
						event: ['onshape.document.lifecycle.statechange']
					},
				},
			},

		],
	};

	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			...this.versionDescription,
		};
	}

	// @ts-ignore
	webhookMethods = {
		default: {
			async checkExists(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				const webhookUrl = this.getNodeWebhookUrl('default');
				const event = this.getNodeParameter('event') as string;
				//@ts-ignore
				const b = getId.call(this, event)
				const eventDesc = event + '-' + Object.keys(b)[0] + ':' + Object.values(b)[0];

				const webhooks = await apiRequest.call(this, 'GET', '/webhooks');
				for (const webhook of webhooks?.items) {
					if (webhook.url === webhookUrl && webhook.description === eventDesc && webhook.events.includes(event)) {
						webhookData.webhookId = webhook.id;
						return true;
					}
				}
				return false;
			},
			async create(this: IHookFunctions): Promise<boolean> {
				const webhookUrl = this.getNodeWebhookUrl('default');
				const webhookData = this.getWorkflowStaticData('node');
				const event = this.getNodeParameter('event') as string;
				const body: IDataObject = {
					url: webhookUrl,
					events: [event],
					options: { collapseEvents: true }
				};

				//@ts-ignore
				const b = getId.call(this, event)
				body[Object.keys(b)[0]] = Object.values(b)[0] as string
				body.description = event + '-' + Object.keys(b)[0] + ':' + Object.values(b)[0];
				const webhook = await apiRequest.call(this, 'POST', '/webhooks', body);
				webhookData.webhookId = webhook.id;
				return true;
			},
			async delete(this: IHookFunctions): Promise<boolean> {
				const webhookData = this.getWorkflowStaticData('node');
				try {
					await apiRequest.call(this, 'DELETE', `/webhooks/${webhookData.webhookId}`);
				} catch (error) {
					return false;
				}
				delete webhookData.webhookId;
				return true;
			},
		},
	};

	async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {
		const req = this.getRequestObject();
		return {
			workflowData: [
				this.helpers.returnJsonArray(req.body),
			],
		};
	}

}

export function getId(this: IWebhookFunctions, event: string) {
	const result: any = {}
	switch (event) {
		case 'onshape.document.lifecycle.statechange': {
			result.documentId = this.getNodeParameter('documentId');
			break;
		}
		case 'onshape.user.lifecycle.updateappsettings': {
			result.clientId = this.getNodeParameter('clientId');
			break;
		}
		case 'onshape.workflow.transition': {
			result.companyId = this.getNodeParameter('companyId');
			break;
		}
		default: {
			const idType = this.getNodeParameter('idType');
			idType ? result.documentId = this.getNodeParameter('documentId') : this.getNodeParameter('companyId');
		}
	}
	return result;
}
