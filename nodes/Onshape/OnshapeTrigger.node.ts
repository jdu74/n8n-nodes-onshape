import {
	IHookFunctions,
	IWebhookFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeType,
	INodeTypeDescription,
	IWebhookResponseData,
} from 'n8n-workflow';

import { apiRequest } from './GenericFunctions';

import {
	snakeCase,
} from 'change-case';


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
			description: 'occurs when a translation request is completed'
		},
		{
			value: 'onshape.model.lifecycle.metadata',
			name: 'Part/Element Metadata Modified',
			description: 'occurs when part or element metadata is modified'
		},
		{
			value: 'onshape.model.lifecycle.createversion',
			name: 'Document Version Created',
			description: 'occurs when a new version of a document is created'
		},
		{
			value: 'onshape.model.lifecycle.createworkspace',
			name: 'New Workspace Created',
			description: 'occurs when a new workspace is created'
		},
		{
			value: 'onshape.model.lifecycle.createelement',
			name: 'New Element Created',
			description: 'occurs when a new element is created'
		},
		{
			value: 'onshape.model.lifecycle.deleteelement',
			name: 'Element Deleted',
			description: 'occurs when an element is deleted'
		},
		{
			value: 'onshape.document.lifecycle.statechange',
			name: 'Document State Changed',
			description: 'occurs when an document changes state'
		},
		{
			value: 'onshape.model.lifecycle.changed.externalreferences',
			name: 'Eexternal Reference Changed',
			description: 'occurs when an external reference changes'
		},
		{
			value: 'onshape.document.lifecycle.created',
			name: 'Document Created',
			description: 'occurs when a document is created'
		},
		{
			value: 'onshape.revision.created',
			name: 'Revision Created',
			description: 'Occurs when a revision is created'
		},
		{
			value: 'onshape.comment.create',
			name: 'Document Comment created',
			description: 'Occurs when a comment is created in a document'
		},
		{
			value: 'onshape.comment.update',
			name: 'Document Comment updated',
			description: 'Occurs when a comment is updated in a document'
		},
		{
			value: 'onshape.comment.delete',
			name: 'Document Comment deleted',
			description: 'Occurs when a comment is deleted in a document'
		},
	];
	lstEventsWorkflowGroup = [
		{
			value: 'onshape.workflow.transition',
			name: 'Revision/Release Package transitions',
			description: 'Occurs when a revision or release package transitions through workflow states'
		},
	];

	description: INodeTypeDescription = {
		displayName: 'Onshape Trigger',
		name: 'onshapeTrigger',
		icon: 'file:onshape.svg',
		group: ['trigger'],
		version: 1,
		subtitle: '={{$parameter["event"]}}',
		description: 'Handle Onshape events via webhooks',
		defaults: {
			name: 'Onshape Trigger',
		},
		inputs: [],
		outputs: ['main'],
		credentials: [
			{
				name: 'onshapeApiKeys',
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
				name: 'onshapeOAuth2',
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
				description: 'Method of authentication.',
			},
			{
				displayName: 'Path',
				name: 'path',
				type: 'string',
				default: '',
				placeholder: 'webhook',
				required: true,
				description: 'The path to listen to.',
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
				],
			},
			{
				displayName: "clientId",
				name: "clientId",
				description: "clientId",
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
				description: "idType",
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
				description: "companyId",
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
				displayName: "companyId ",
				name: "companyId ",
				description: "companyId ",
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
				description: "documentId",
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
				description: "documentId",
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
