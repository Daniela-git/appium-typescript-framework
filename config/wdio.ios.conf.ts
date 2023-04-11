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
      'appium:platformName': 'ios',
      'appium:platformVersion': '14.5',
      'appium:deviceName': 'iPhone11ios14',
      'appium:automationName': 'XCUITest',
      // 'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk')
      'appium:app': path.join(process.cwd(), './app/ios/MVCTodo.app'),
    }
    // {
      //   'appium:platformName': 'ios',
      //   'appium:platformVersion': '16.4',
      //   'appium:deviceName': 'iPhone 14',
      //   'appium:automationName': 'XCUITest',
      //   // 'appium:app': path.join(process.cwd(), 'app/android/ApiDemos-debug.apk')
      //   'appium:app': path.join(process.cwd(), 'app/ios/UIKitCatalog.app'),
    // }
  ]
}
