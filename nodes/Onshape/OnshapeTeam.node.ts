import { INodeTypeBaseDescription, IVersionedNodeType, VersionedNodeType } from 'n8n-workflow';

import { OnshapeTeamV1 } from './v1/OnshapeTeamV1node';
import { OnshapeTeamV2 } from './v2/OnshapeTeamV2node';
import { OnshapeTeam as OnshapeTeamV3 } from './v3/OnshapeTeamnode';

export class OnshapeTeam extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'OnshapeTeam',
			name: 'onshapeteam',
			icon: 'file:onshape.svg',
			group: ['output'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'undefined',
			defaultVersion: 3
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new OnshapeTeamV1(baseDescription),
			2: new OnshapeTeamV2(baseDescription),
			3: new OnshapeTeamV3(baseDescription),
		};

		super(nodeVersions, baseDescription);

	}
}
