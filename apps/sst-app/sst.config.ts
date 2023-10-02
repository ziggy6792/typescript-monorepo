/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { SSTConfig } from 'sst';

import path from 'path';

export default {
  config(_input) {
    return {
      name: 'ttx-ui',
      region: 'ap-southeast-1',
      stage: 'dev',
    };
  },
  stacks(app) {
    console.log('deploy');
  },
} satisfies SSTConfig;
