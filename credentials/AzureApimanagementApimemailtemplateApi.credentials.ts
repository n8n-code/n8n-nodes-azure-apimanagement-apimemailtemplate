import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApimanagementApimemailtemplateApi implements ICredentialType {
        name = 'N8nDevAzureApimanagementApimemailtemplateApi';

        displayName = 'Azure Apimanagement Apimemailtemplate API';

        icon: Icon = { light: 'file:../nodes/AzureApimanagementApimemailtemplate/azure-apimanagement-apimemailtemplate.png', dark: 'file:../nodes/AzureApimanagementApimemailtemplate/azure-apimanagement-apimemailtemplate.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Apimanagement Apimemailtemplate API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
