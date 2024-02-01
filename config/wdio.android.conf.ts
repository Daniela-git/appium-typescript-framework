import { sharedConfig } from './wdio.shared.conf.ts';
import path from 'path';
import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  ...sharedConfig,
  port: 4723,
  path: '/wd/hub',
  specs: [
    // '../test/specs/android/**/*.ts'
    '../test/specs/android/create-note.spec.ts',
  ],
  services: [],
  capabilities: [
    {
      'appium:platformName': 'Android',
      'appium:platformVersion': '11.0',
      'appium:deviceName': 'emulator',
      'appium:automationName': 'UiAutomator2',
      'appium:app': path.join(
        process.cwd(),
        './app/android/ApiDemos-debug.apk'
      ),
      // 'appium:app': path.join(
      //   process.cwd(),
      //   './app/android/ColorNoteNotepad.apk'
      // ),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      'appium:autoGrantPermissions': true,
    },
  ],
};
