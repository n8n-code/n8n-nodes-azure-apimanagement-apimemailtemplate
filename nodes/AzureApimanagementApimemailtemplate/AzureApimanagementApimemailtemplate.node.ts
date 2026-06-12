import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApimanagementApimemailtemplate implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Apimanagement Apimemailtemplate',
                name: 'N8nDevAzureApimanagementApimemailtemplate',
                icon: { light: 'file:./azure-apimanagement-apimemailtemplate.png', dark: 'file:./azure-apimanagement-apimemailtemplate.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Use REST APIs to manage Azure API Management Email Templates.',
                defaults: { name: 'Azure Apimanagement Apimemailtemplate' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApimanagementApimemailtemplateApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
