/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { SSTConfig } from 'sst';
import { ApiStak } from './stacks/ApiStack';
import { AuthStack } from './stacks/AuthStack';
import { CdkApiStack } from './stacks/CdkApiStack';

import { NextApp } from './stacks/NextApp';

const _bla = 1;

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
    app.stack(CdkApiStack);
  },
} satisfies SSTConfig;
