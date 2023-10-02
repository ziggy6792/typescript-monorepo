/* eslint-disable no-restricted-imports */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */

import { getNestApp } from '@ts-monorepo/api';

const buildLocalServer = async () => {
  const app = await getNestApp();
  await app.listen(4000);
};

export default buildLocalServer;
