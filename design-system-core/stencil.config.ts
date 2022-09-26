import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'designSystemCore',
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    react({
      componentCorePackage: '@leouo/design-system-core',
      proxiesFile: '../design-system-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist'
    }
  ],
};
