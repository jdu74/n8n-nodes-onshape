import { INodeProperties } from "n8n-workflow";

export const getLatestInDocumentDescription: INodeProperties[] = [
	{
		displayName: 'did',
		name: 'did-string(path)',
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
					'GET /insertables/d/{did}/latest',
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
					'GET /insertables/d/{did}/latest',
				],
			},
		},
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
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
										displayName: 'betaCapabilityIds',
										name: 'betaCapabilityIds',
										description: 'betaCapabilityIds - string',
										type: 'string',
										default: '',
									},
								],
							},
						],
					},
					{
						displayName: 'includeParts',
						name: 'includeParts-boolean(query)',
						description: 'includeParts - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeSurfaces',
						name: 'includeSurfaces-boolean(query)',
						description: 'includeSurfaces - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeSketches',
						name: 'includeSketches-boolean(query)',
						description: 'includeSketches - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeReferenceFeatures',
						name: 'includeReferenceFeatures-boolean(query)',
						description: 'includeReferenceFeatures - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeAssemblies',
						name: 'includeAssemblies-boolean(query)',
						description: 'includeAssemblies - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeFeatureStudios',
						name: 'includeFeatureStudios-boolean(query)',
						description: 'includeFeatureStudios - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeBlobs',
						name: 'includeBlobs-boolean(query)',
						description: 'includeBlobs - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'allowedBlobMimeTypes',
						name: 'allowedBlobMimeTypes-string(query)',
						description: 'allowedBlobMimeTypes - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'excludeNewerFSVersions',
						name: 'excludeNewerFSVersions-boolean(query)',
						description: 'excludeNewerFSVersions - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'maxFeatureScriptVersion',
						name: 'maxFeatureScriptVersion-integer(query)',
						description: 'maxFeatureScriptVersion - integer (query)',
						type: 'number',
						default: 0,
					},
					{
						displayName: 'includePartStudios',
						name: 'includePartStudios-boolean(query)',
						description: 'includePartStudios - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeFeatures',
						name: 'includeFeatures-boolean(query)',
						description: 'includeFeatures - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeMeshes',
						name: 'includeMeshes-boolean(query)',
						description: 'includeMeshes - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeWires',
						name: 'includeWires-boolean(query)',
						description: 'includeWires - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeFlattenedBodies',
						name: 'includeFlattenedBodies-boolean(query)',
						description: 'includeFlattenedBodies - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeApplications',
						name: 'includeApplications-boolean(query)',
						description: 'includeApplications - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'allowedApplicationMimeTypes',
						name: 'allowedApplicationMimeTypes-string(query)',
						description: 'allowedApplicationMimeTypes - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: 'includeCompositeParts',
						name: 'includeCompositeParts-boolean(query)',
						description: 'includeCompositeParts - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeFSTables',
						name: 'includeFSTables-boolean(query)',
						description: 'includeFSTables - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeFSComputedPartPropertyFunctions',
						name: 'includeFSComputedPartPropertyFunctions-boolean(query)',
						description: 'includeFSComputedPartPropertyFunctions - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeVariables',
						name: 'includeVariables-boolean(query)',
						description: 'includeVariables - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'includeVariableStudios',
						name: 'includeVariableStudios-boolean(query)',
						description: 'includeVariableStudios - boolean (query)',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'allowedBlobExtensions',
						name: 'allowedBlobExtensions-string(query)',
						description: 'allowedBlobExtensions - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
	},
];
