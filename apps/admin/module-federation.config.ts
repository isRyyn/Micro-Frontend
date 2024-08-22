import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'admin',
  exposes: {
    './Module': 'apps/admin/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
