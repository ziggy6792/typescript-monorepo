import { StackContext, Function, Api, ApiGatewayV1Api } from 'sst/constructs';
import { aws_lambda as lambda, aws_apigateway as apiGateway } from 'aws-cdk-lib';

export function ApiStak({ stack }: StackContext) {
  // Create auth provider
  const myFunction = new Function(stack, 'MyFunction', {
    runtime: 'container',
    handler: process.env.PROJECT_CWD,
  });

  //  const bla = new ApiGatewayV1Api(stack, 'Api', {

  //  })

  const api = new Api(stack, 'Api', {
    routes: {
      // 'GET /{proxy+}': myFunction,
      $default: myFunction,
    },
  });

  // const api = new apiGateway.LambdaRestApi(this, utils.getConstructName('endpoint'), {
  //   handler: myFunction.cd,
  // });

  stack.addOutputs({
    url: api.url,
  });
}
