import { StackContext } from 'sst/constructs';
import { aws_lambda as lambda, aws_apigateway as apiGateway } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';

export function CdkApiStack({ stack }: StackContext) {
  const functionName = 'lambda-api';

  const apiLambda = new lambda.Function(stack, functionName, {
    functionName,
    description: functionName,
    memorySize: 256,
    timeout: cdk.Duration.seconds(30),
    runtime: lambda.Runtime.NODEJS_18_X,
    handler: 'packages/lambda-api/dist/index.handler',
    code: lambda.Code.fromDockerBuild(process.env.PROJECT_CWD!, {
      buildArgs: {
        PACKAGE_NAME: '@ts-monorepo/api',
      },
    }),
  });

  const api = new apiGateway.LambdaRestApi(stack, 'endpoint', {
    handler: apiLambda,
  });

  stack.addOutputs({
    url: api.url,
  });
}
