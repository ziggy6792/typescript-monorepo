import { StackContext, Function, Api } from 'sst/constructs';

export function ApiStak({ stack }: StackContext) {
  // Create auth provider
  // const myFunction = new Function(stack, 'MyFunction', {
  //   runtime: 'container',
  //   handler: process.env.PROJECT_CWD,
  // });

  const api = new Api(stack, 'Api', {
    defaults: {
      function: {
        runtime: 'container',
        handler: process.env.PROJECT_CWD,
      },
    },
  });

  stack.addOutputs({
    url: api.url,
  });
}
