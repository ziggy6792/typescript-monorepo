/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { SSTConfig } from 'sst';
import { commonConfig } from '@ts-monorepo/common';
import { AuthStack } from './stacks/AuthStack';
import { ApiStack } from './stacks/ApiStack';

import { NextApp } from './stacks/NextApp';

export default {
  config(_input) {
    return {
      name: commonConfig.PROJECT_NAME,
      region: 'ap-southeast-1',
      stage: 'dev',
    };
  },
  stacks(app) {
    app.stack(AuthStack).stack(NextApp);
    app.stack(ApiStack);
  },
} satisfies SSTConfig;
