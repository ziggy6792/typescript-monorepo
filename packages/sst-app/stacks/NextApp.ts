import path from 'path';
import { NextjsSite, Stack } from 'sst/constructs';

export function NextApp({ stack }: { stack: Stack }): void {
  const site = new NextjsSite(stack, 'next-app', {
    path: path.join(require.resolve('@typescript-backend-cdk-starter/next-app'), '..'),
    buildCommand: 'yarn open:next:build',
    bind: [],
    environment: {},
  });

  stack.addOutputs({
    url: site.url,
  });
}
