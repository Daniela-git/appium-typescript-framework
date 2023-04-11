import { sharedConfig } from "./wdio.shared.conf.ts"
import path from 'path'
import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {
  ...sharedConfig,
  port: 4723,
  specs: [
    '../test/specs/**/*.ts'
  ],
  capabilities: [
    {
      'appium:platformName': 'Android',
      'appium:platformVersion': '11.0',
      'appium:deviceName': 'Pixel 4 API 30',
      'appium:automationName': 'UIAutomator2',
      // 'appium:app': path.join(process.cwd(), './app/android/ApiDemos-debug.apk')
      'appium:app': path.join(process.cwd(), './app/android/ColorNoteNotepad.apk'),
      'autoGrantPermissions': true,
    }
  ]
}
