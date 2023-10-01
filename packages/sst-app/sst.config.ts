/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { SSTConfig } from 'sst';
import { ApiStak } from './stacks/ApiStack';
import { AuthStack } from './stacks/AuthStack';

import { NextApp } from './stacks/NextApp';

export default {
  config(_input) {
    return {
      name: 'tj-sst',
      region: 'ap-southeast-1',
      stage: 'dev',
    };
  },
  stacks(app) {
    // app.stack(AuthStack).stack(NextApp);
    app.stack(ApiStak);
  },
} satisfies SSTConfig;
