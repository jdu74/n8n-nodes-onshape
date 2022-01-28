import { INodeProperties } from "n8n-workflow";

export const getLatestInDocumentDescription: INodeProperties[] = [
	{
		name: 'did-string(path)',
		displayName: 'did',
		description: 'did - string (path)',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'Insertable',
				],
				operation: [
					'GET /api/insertables/d/{did}/latest',
				],
			},
		},
	},
	{
		displayName: 'additionalFields',
		name: 'additionalFields',
		description: 'additionalFields - fixedCollection',
		type: 'fixedCollection',
		default: '',
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'Insertable',
				],
				operation: [
					'GET /api/insertables/d/{did}/latest',
				],
			},
		},
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'metadataValues',
				displayName: 'Metadata',
				default: '',
				values: [
					{
						displayName: 'betaCapabilityIds',
						name: 'betaCapabilityIds-array(query)',
						description: 'betaCapabilityIds - array (query)',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: '',
						options: [
							{
								displayName: 'betaCapabilityIdsProperties',
								name: 'betaCapabilityIdsProperties',
								values: [
									{
										name: 'betaCapabilityIds',
										displayName: 'betaCapabilityIds',
										description: 'betaCapabilityIds - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						name: 'includeParts-boolean(query)',
						displayName: 'includeParts',
						description: 'includeParts - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeSurfaces-boolean(query)',
						displayName: 'includeSurfaces',
						description: 'includeSurfaces - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeSketches-boolean(query)',
						displayName: 'includeSketches',
						description: 'includeSketches - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeReferenceFeatures-boolean(query)',
						displayName: 'includeReferenceFeatures',
						description: 'includeReferenceFeatures - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeAssemblies-boolean(query)',
						displayName: 'includeAssemblies',
						description: 'includeAssemblies - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeFeatureStudios-boolean(query)',
						displayName: 'includeFeatureStudios',
						description: 'includeFeatureStudios - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeBlobs-boolean(query)',
						displayName: 'includeBlobs',
						description: 'includeBlobs - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'allowedBlobMimeTypes-string(query)',
						displayName: 'allowedBlobMimeTypes',
						description: 'allowedBlobMimeTypes - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'excludeNewerFSVersions-boolean(query)',
						displayName: 'excludeNewerFSVersions',
						description: 'excludeNewerFSVersions - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'maxFeatureScriptVersion-integer(query)',
						displayName: 'maxFeatureScriptVersion',
						description: 'maxFeatureScriptVersion - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						name: 'includePartStudios-boolean(query)',
						displayName: 'includePartStudios',
						description: 'includePartStudios - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeFeatures-boolean(query)',
						displayName: 'includeFeatures',
						description: 'includeFeatures - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeMeshes-boolean(query)',
						displayName: 'includeMeshes',
						description: 'includeMeshes - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeWires-boolean(query)',
						displayName: 'includeWires',
						description: 'includeWires - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeFlattenedBodies-boolean(query)',
						displayName: 'includeFlattenedBodies',
						description: 'includeFlattenedBodies - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeApplications-boolean(query)',
						displayName: 'includeApplications',
						description: 'includeApplications - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'allowedApplicationMimeTypes-string(query)',
						displayName: 'allowedApplicationMimeTypes',
						description: 'allowedApplicationMimeTypes - string (query)',
						type: 'string',
						default: '',
					},
					{
						name: 'includeCompositeParts-boolean(query)',
						displayName: 'includeCompositeParts',
						description: 'includeCompositeParts - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeFSTables-boolean(query)',
						displayName: 'includeFSTables',
						description: 'includeFSTables - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeFSComputedPartPropertyFunctions-boolean(query)',
						displayName: 'includeFSComputedPartPropertyFunctions',
						description: 'includeFSComputedPartPropertyFunctions - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeVariables-boolean(query)',
						displayName: 'includeVariables',
						description: 'includeVariables - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						name: 'includeVariableStudios-boolean(query)',
						displayName: 'includeVariableStudios',
						description: 'includeVariableStudios - boolean (query)',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
	},
];
