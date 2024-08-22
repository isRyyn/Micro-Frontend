import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'user',
  exposes: {
    './Module': 'apps/user/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
