import { OAuthScope } from 'aws-cdk-lib/aws-cognito';
import { Cognito, StackContext } from 'sst/constructs';

export function AuthStack({ stack, app }: StackContext) {
  const callbackUrls = ['http://localhost:3000/api/auth/callback/cognito'];
  const logoutUrls = ['http://localhost:3000/api/auth/callback/cognito'];
  const auth = new Cognito(stack, 'Auth', {
    login: ['email'],
    cdk: {
      userPoolClient: {
        generateSecret: true,
        oAuth: {
          flows: { authorizationCodeGrant: true },
          callbackUrls,
          logoutUrls,
          scopes: [OAuthScope.EMAIL, OAuthScope.PROFILE],
        },
      },
    },
  });

  auth.cdk.userPool.addDomain('CognitoDomain', {
    cognitoDomain: {
      domainPrefix: app.name,
    },
  });

  return {
    auth,
  };
}
