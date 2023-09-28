/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { SSTConfig } from 'sst';

import { NextApp } from './stacks/NextApp';

export default {
  config(_input) {
    return {
      name: 'open-next-tj-nm',
      region: 'ap-southeast-1',
    };
  },
  stacks(app) {
    app.stack(NextApp);
  },
} satisfies SSTConfig;
