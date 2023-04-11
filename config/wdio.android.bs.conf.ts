import { sharedConfig } from "./wdio.shared.conf.ts"
import type { Options } from '@wdio/types'

import dotenv from 'dotenv'
dotenv.config()

export const config: Options.Testrunner = {
  ...sharedConfig,

  // BrowserStack Credential
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  hostname: 'hub.browserstack.com',

  specs: [
    '../test/specs/android/**/*.ts'
  ],
  services: [
    [
      'browserstack',
      {
        app: 'bs://b6f450d4c44f319d95d8c92849417b5956af81ea',
        buildIdentifier: "${BUILD_NUMBER}",
        browserstackLocal: true
      },
    ]
  ],
  capabilities: [
    {
      'bstack:options': { 
        deviceName: 'Samsung Galaxy S22 Ultra',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        platformVersion: '12.0',
        platformName: 'android',
      }
    },
  ],
  commonCapabilities: {
    'bstack:options': {
      projectName: "BrowserStack Sample",
      buildName: "bstack-demo",
      debug: true,
      networkLogs: true
    }
  },
  maxInstances: 10,
}
