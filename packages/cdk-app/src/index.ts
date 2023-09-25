/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */
/* eslint-disable no-new */
import path from 'path';
import * as cdk from 'aws-cdk-lib';

import * as config from 'src/config';
import DeploymentStack from './stacks/deployment-stack';

const app = new cdk.App();

console.log(path.join(require.resolve('@typescript-backend-cdk-starter/next-app'), '..'));

const stack = new DeploymentStack(app, `typescript-backend-cdk-starter`, {
  env: {
    account: config.AWS_ACCOUNT_ID,
    region: config.AWS_REGION,
  },
});
