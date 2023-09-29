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
          callbackUrls,
          logoutUrls,
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
