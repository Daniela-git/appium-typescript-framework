
# APPIUM ( With WebDriverIO )
#### the example code of the first section is in this repository: https://github.com/cposada23/appium-webdriverio

## What is Appium 
- Open source automation framework for native, hybrid and mobile web apps in Android, iOS and Windows apps
- Wraps the vendor provider framework into a WebDriver api
- iOS: XCUITest
- Android: UIAutomator
- Windows: WinAppDriver

***What is  WebDriverIO***? is a Javascript automation framework, that lets you automate web apps in different browsers and OS. It also supports automation for mobile applications in iOS and Android. Is really easy to get started with it, you just need node js installed and run the following commands:
```bash
    npm i -D @wdio/cli
    npx wdio config --yes
    npx wdio run
```
   

## Installing All the things

####  NodeJS:
>Recomended using a tool like nvm. If you are using mac follow the steps here: https://github.com/nvm-sh/nvm

> Verify that you have the following in you bash profile or zshrc file. To know what type of profile you are using, in a terminal run ***echo $0***
> if your terminal echoed zsh the file that you need to look is  **_~/.zshrc_**, if you don't have it, create it and paste what you see down below
> If your terminal is bash then the file you should look is -   **_~/.bash_profile_**

    export NVM_DIR="$HOME/.nvm"
	[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
	[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

> Use the LTS version of node

Useful commands for nvm
```bash
    // Install the lts version
    nvm install node
    // List all node version taht you have
    nvm list
    // Use a version of node
    nvm use <node version>
```
#### Install Java JDK
> You can use this page to download the latests sdks: https://adoptium.net/
> Follow this page for more details on how to setup java in mac: https://mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/

After you installed the sdk, you need to set the JAVA_HOME variable in your profile ( if mac in your .zshrc or .bash_profile (read nvm installation ) or windows in your env variables )

> On mac to check where is java installed you can run the following command **_ /usr/libexec/java_home _**. You'll need this to set JAVA_HOME variable

Mac users: on your .zshrc file add the following:

    export JAVA_HOME=$(/usr/libexec/java_home)

> Now, check the java installation by running ***java --version*** on your terminal

#### Install Android Studio
> Download it from here: https://developer.android.com/studio

> Setup ANDROID_HOME 

Setting up ANDROID_HOME depend again on the Operating system and type of terminal you are using, On windows take not of the installation path of android studio and set up the environment variables) 
On mac add the following to your terminal profile (.zshrc or .bash_profile )

    export ANDROID_HOME=/Users/$USER/Library/Android/sdk
    export PATH=$ANDROID_HOME/platform-tools:$PATH
    export PATH=$ANDROID_HOME/tools:$PATH
    export PATH=$ANDROID_HOME/tools/bin:$PATH
    export PATH=$ANDROID_HOME/emulator:$PATH
    export ANDROID_SDK=/Users/$USER/Library/Android/sdk
    export ANDROID_SDK_ROOT=/Users/$USER/Library/Android/sdk/
    export PATH=$ANDROID_SDK/emulator:$ANDROID_SDK/tools:$PATH

Then in a terminal ( make sure you source the file ***source ~/.zshrc*** ) run the following command to test that everything got installed correctly: ***adb devices*** - should return list of devices attached

#### Setup android emulator
- Open android studio and open the device manager
- Create new device 
- Select the system image ( This will be the android version )
- Give it a name
- Start the simulator ( with the play like button ) to make sure that everything is set up correctly

#### Appium 

> To install version 2: ***npm i -g appium@next***
> More info here: https://www.npmjs.com/package/appium
> Check the version with: ***appium -v***

Install Appium drivers
> appium driver install xcuitest

> appium driver install uiautomator2

check the drivers installation with ***appium driver list*** 

#### Appium Server
> Install it from here https://github.com/appium/appium-desktop/releases/tag/v1.22.3-4

***OR Preferred way***
> Run Appium server in the terminal like this `appium -p 4724 --allow-cors`


#### Appium Inspector
The inspector is a tool to get the selector of the elements to be able to interact with them, something similar on using the Chrome or Firefox inspection tool to get the web Elements identifiers
> Download it from here: https://github.com/appium/appium-inspector/releases

>1.  **Remote Port:** Update port to  `4724`  and run Appium server on the same port as well by doing  `appium -p 4724`
>2.  **Remote Path:** Set the path to  `/wd/hub/`  instead of  `/` if using the Appium server from the Appium desktop or `/`  instead of  `/wd/hub/` if running Appium server from the terminal.


#### Appium Doctor
>This tool helps us verify if everything is setup correctly, install it by running: ***`npm i -g appium-doctor`***

Run ***`appium-doctor --android`*** to check all the installation

#### WebDriverIO setup

Create a new folder for the project and in the root run ***`npm init wdio`*** 

>use the following configuration when prompted
>
    ? Where should your tests be launched? local - for e2e testing of web and mobile applications
    ? Where is your automation backend located? On my local machine
    ? Which framework do you want to use? Mocha (https://mochajs.org/)
    ? Do you want to use a compiler? No!
    ? Do you want WebdriverIO to autogenerate some test files? No
    ? Which reporter do you want to use? spec
    ? Do you want to add a service to your test setup? appium
    ? Do you want me to run `npm install` Yes
    
All configuration can be found here: ***wdio.conf.js***
> WebDriverIO Config for Android:

> To run the test, you'll need the APK for you app, in this example we will put the APK in this folder **app/android/ApiDemos-debug.apk**

In the wdio.conf.js do the following 
Add the import for the node module path: 
```typescript
    const  path = require('path');
```
Look for the capabilities section and replace it with the following:
```typescript
    capabilities: [{
	    'appium:platformName':  'Android',
	    'appium:platformVersion':  '12.0', // this is the version that you choose when creating the emulator
	    'appium:deviceName':  'Pixel 4 API 30', // The AVD name that you used when creating the device
	    'appium:automationName':  'UIAutomator2',
	    'appium:app':  path.join(process.cwd(), 'app/android/ApiDemos-debug.apk') // This is the path to the APK File
    }],
```

# Common Assertions and Actions

## Assertions
> ***Element is displayed:*** `expect($('<element selector'>)).toBeDisplayed();`

> ***Element to have text:*** `expect($('<element selector'>)).toHaveText("<replace expected text>");`

> ***Element to contain text:*** `expect($('<element selector'>)).toContain("<replace expected text>");`

> ***Array to Equal Array:*** `await  expect(actualList).toEqual(expectedList);`

> ***Element to exist:*** `expect($('<element selector'>)).toBeExisting();`


## Actions
> ***Finding an element***:  `$('<replace Element selector>');`

> ***Finding multiple elements***:  `$$('<replace common Elements selector>');`

> ***Click On element***:  `$('<replace Element selector>').click();`

> ***Filling an input***:  `$('<replace Element selector>').setValue('<replace with value>');`

> ***Add Value to a textField***:  `$('<replace Element selector>').addValue('<replace with value>');`

> ***Start activity:*** `await  driver.startActivity(currentPackage,${currentPackage}${currentActivity});`

>***Get Alert text:*** `await  driver.getAlertText() `

>***Accept Alert:*** `await  driver.acceptAlert() `

>***Dismiss Alert:*** `await  driver.dismissAlert() `

>***Go back:*** `await  driver.back() `


# Android

## Running test on Android ( remember to add the capabilities listed in the previous step )


> Things to take in consideration: install Appium at project level and the drivers, same commands than in the Appium section but this time at project level ( in the root of the framework )

Create a new sample spec to test that everything works correctly: ***test/specs/sample.js***  and paste the following:
```typescript
    describe('Sample', () => {
	    it('Sample test', async () => {
		    await  driver.pause();
	    });
    });
```

Run the sample test ( Remember to have the emulator open and running ) ***npx wdio***
>If you get an error similar to this -
`The file is being treated as ES module...`
You can resolve that by making the following changes -
>1.  remove  `"type:module"`  from the package.json file
>2.  change  `export const config`  to  `exports.config`  in wdio.conf.js

> If you get an error like this: 
> Error: "ts-node/esm/transpile-only 'resolve'" did not call the next hook in its chain and did not explicitly signal a short circuit.
> Run this : ***npm i -D typescript ts-node***

> If you get an error like this:
> Unable to find an active device or emulator with OS 12.0
> There is a problem in the capabilities, review them according to what you picked up while creating the emulator

## Using Appium Inspector
1. make sure you have installed Appium Server and Appium Inspector

> Suggestion: Create a new virtual device for manual testing with a different android version than the one that you use in the automation, that's because WebDriverIO looks for the Android version and sometimes it will use this new emulator instead of the other one

2. in the Appium Inspector change the port to a different one from the one you use in the automation, change it to ***4724*** and click start server
3. In the Appium inspector make sure that in the ***Remote Path*** you have ***/wb/hub/*** and in the port the port that you set up in the previous step for the Appium server In my case: ***4724***
4. In the Appium Inspector you need to add the capabilities to connect to the emulator: 
```json
    {
	     "platformName": "Android",
	     "appium:platformVersion": "< Replace with the android version that you chose when creating the emulator >",
	     "appium:deviceName": "< The device name you chose when creating the emulator >",
	     "appium:automationName": "UiAutomator2",
	     "appium:app": "< Replace with the full path to the APK that you are using >"
    }
```
5. Click Start Session. you should see in the Appium inspector the application that is running in the emulator. There you can inspect the elements to get the proper id to interact with them in the automation.



## Finding Elements and interacting with Elements (Android)

You can fin elements by different types of attributes

- Xpath
- Accessibility ID ( This is the preferred option to go with because you can use the same one in both Android and iOS )
- Id
- Resource Id
- index
- Class
- Text
- UiAutomator


#### Finding and interacting with elements by Accessibility id
To find an element by accessibility id you use the **~** symbol

> Example code: finding an element, then click on it and then assert that an element is visible
```typescript
    describe('Android ELements Tests', () => {
	    it('Find element by accessibility id', async () => {
		    // Find element by accessibility id
		    const  appOption = await  $('~App');
		    // Click on the element
		    await  appOption.click();
		    // Assertion
		    const  actionBar = await  $('~Action Bar');
		    await  expect(actionBar).toBeExisting();
	    });
    });
```
#### Finding and interacting with elements by class Name
```typescript
    it.only('Find element by class Name', async () => {
	    const  className = await  $('android.widget.TextView');
	    console.log(className);
	    await  expect(className).toHaveText("API Demos")
    });
```
#### Finding and interacting with elements by X-Path
```typescript
    it('Find elements by Xpath', async () => {
	    // xpath - (//tagname[@attribute=value])
	    await  $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
	    // find by resourceId
	    await  $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

	    // find by text
	    await  $('//android.widget.TextView[@text="Command two"]').click();
	    // find by class - assertion
	    const  textAssertion = await  $('//android.widget.TextView');
	    await  expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });
```
#### Finding Elements with UiAutomator

More info Here:
- https://webdriver.io/docs/selectors/#android-uiautomator
- https://developer.android.com/reference/androidx/test/uiautomator/UiSelector
- https://appium.io/docs/en/writing-running-appium/android/uiautomator-uiselector/

```typescript
    it('Find elements by UIAutomator', async () => {
        // find by text contains
        await $('android=new UiSelector().textContains("Alert")').click();
    });
```
#### Finding multiple elements


you use $ to find single element and $$ to find multiple elements
```typescript
    it('Find multiple elements', async () => {
        const  expectedList = [
		    'API Demos', "Access'ibility",
		    'Accessibility', 'Animation',
		    'App', 'Content',
		    'Graphics', 'Media',
		    'NFC', 'OS',
		    'Preference', 'Text',
		    'Views'
	    ]
	    const  actualList = []
	    // find multiple elements
	    const  textList = await  $$('android.widget.TextView');
	    // loop through them
	    for (const  element  of  textList) {
		    actualList.push(await  element.getText());
	    }
	    // assert the list
	    await  expect(actualList).toEqual(expectedList);
    });
```
#### Working with text fields
```typescript
    it.only('Working with text field', async () => {
	    // access the auto complete screen
	    await  $('~Views').click();
	    await  $('//*[@text="Auto Complete"]').click();
	    await  $('//*[@content-desc="1. Screen Top"]').click();
	    // enter the country name
	    const  textField = await  $('//*[@resource-id="io.appium.android.apis:id/edit"]');
	    await  textField.addValue('Canada');
	    // verify the country name
	    await  expect(textField).toHaveText('Canada');
    });
```
## App Package and app Activity
- appPackage: technical name of the app, provided by the developers (Top level package under which the app code resides) . Ex: 'com.google.android.youtube'
- appActivity: Certain screen or functionality of the application. EX: MainActivity, AlertDialog

***Why take this in consideration ?*** 
1.	 Access a Screen directly
2.	Save time in the automation script by not going through multiple pages, this decrease the change of having flaky tests

#### How to go directly to a particular activity:
1. You have to know the activity name, for this:
	- In the Appium inspector, go to the page that you want ( In the app that we are woking in this repository, lets say we wan to start our test in the App / Alert Dialogs screen )
	- Once you are in the correct page, in Appium inspector in the middle upper section, click commands. Then click where it says "***Select Action Group***" and select ***Device***. In the new select that gets added after you click Device, click it and select ***Android Activity***. Once you clicked it, a popup will appear with the current activity name.... In our case is " ***.app.AlertDialogSamples*** "
	- I need also the package name combined with the activity name to be able to access that screen. To get the package name, close the popup that was opened in the previous step, and click in the button that says ***current package***. In this example the package is: " ***io.appium.android.apis*** " 

Example code:
```typescript
    it.only('Access an Activity directly', async () => {
	    // access activity
	    await  driver.startActivity("io.appium.android.apis", "io.appium.android.apis.app.AlertDialogSamples");
	    // pause 3s
	    await  driver.pause(3000);
	    // assertion
	    await  expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    });
```
## Scrolling (Android)

We can make use of `UiAutomator` driver to do this kind of actions
> UiScrollable is a `[UiCollection]` and provides support for searching for items in scrollable layout elements. This class can be used with horizontally or vertically scrollable controls.
> See: https://developer.android.com/reference/androidx/test/uiautomator/UiScrollable

>We need to make sure that the element is scrollable or not, this line takes care of it: `UiScrollable(new UiSelector().scrollable(true))` then we can perform different actions on the scrollable elements like the ones below

#### Scroll to end
Scrolls to the end of a scrollable layout element. The end can be at the bottom-most edge in the case of vertical controls, or the right-most edge for horizontal controls
```typescript
await $(`android=new UiScrollable(
		new UiSelector().scrollable(true)
	).scrollToEnd(1,5)`
);
```

#### Scroll text in into view
Performs a forward scroll action on the scrollable layout element until the text you provided is visible, or until swipe attempts have been exhausted 
```typescript
await  $(`android=new UiScrollable(
			new UiSelector().scrollable(true)
		).scrollTextIntoView("Secure Surfaces")`
);
```
#### Horizontal Scroll
You use the `.setAsHorizontalList()` method
> Horizontal Scrolling `await  $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');`

### Scrolling Exercise 
With the App from the repo, do the following
- Access the date widget
	- view -> Date Widgets -> Dialog ( You can use the activity name to access to it )
- Get the current date
- Click on "Change the date"
- Scroll Horizontally to the right
- Pick the 10th date from the month
- Click Ok Button 
- Assert the date is updated

Solution:
```typescript
    it.only('Scrolling in date pickers', async () => {
	    const  currentActivity = '.view.DateWidgets1';
	    const  currentPackage = 'io.appium.android.apis';
	    // Start the activity
	    await  driver.startActivity(currentPackage, `${currentPackage}${currentActivity}`);
	    // Get the current date
	    const  currentDate = await  $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
	    console.log(`Current date: "${currentDate}`);
	    // Click the change the date button using accesibility id
	    const  changeDateButton = await  $('~change the date');
	    await  changeDateButton.click();
	    // Horizontal scrolling
	    await  $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
	    // Select the 10th day
	    await  $('//*[@text="10"]').click();
	    await  $('//*[@resource-id="android:id/button1"]').click();
	    // Assert
	    const  updatedDate = await  $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]').getText();
	    console.log(`Updated Date: ${updatedDate}`);
	    await  expect(updatedDate).not.toEqual(currentDate);
    });
```
## Handle Permissions 

Sometimes the app needs some permissions to access some of the devices functionality, like the camera or access to the gallery... This is one way to handle those.  ( To follow this change the APK to: ` 'appium:app':  path.join(process.cwd(), 'app/android/ColorNote+Notepad.apk') ` in the ***wdio.conf.js*** )

> In the example app for this section, when you first open the app, it will prompt you to allow for access to Photos, media and files on your device.

Add this line in the capabilities to handle the permissions: `'appium:autoGrantPermissions':  true`

## Page Objects
Page object is a design patter that creates an object repository to store all the web elements selectors, this to reduce code duplication and improving the maintainability of the tests.
In this case the page object is a simple class where we save all the elements of a page 

Ex: Edit Note Page 
```typescript
class  EditNoteScreen {
	get  firstNote() {
		return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
	}
	get  moreIcon() {
		return  $('~More');
	}

	get  deleteIcon() {
		return  $('//*[@text="Delete"]');
	}

	get  navIcon() {
		return  $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
	}

	get  trashCanItem() {
		return  $('//*[@text="Trash Can"]');
	}
}
module.exports = new  EditNoteScreen();
```


# iOS 
> You'll need a mac
## Things to install
- XCode -> app Store 
- Xcode Command Line Tools
	- In the a terminal: `xcode-select --install`
- Carthage: Dependency manager for macOS & iOS
	- Use a tool like brew: `brew install carthage`
- iOS deploy: Install and debug iOS apps from the command line. Designed to work on un-jailbroken devices.  `brew install ios-deploy`

> After Installing all the tools, run Appium doctor to check that everything is good `appium-doctor --ios`. If all checkmarks are green you should be good to go

>Remember to install the driver for iOS ( Both at project level and global ) `appium driver install xcuitest` 

> Verify the drivers with: `appium driver list`

**Setup the capabilities in `wdio.conf.js`**
> To check the iOS version that you want to use, open xcode -> window -> devices and simulators. Pick the version of the simulator/device you want to use
```json
{
  "platformName": "ios",
  "appium:platformVersion": "<ReplaceWithiOSVersion>",
  "appium:deviceName": "<ReplaceWithDeviceName>",
  "appium:automationName": "XCUITest",
  "appium:app": "<ReplaceWithPathToAPP>"
}
```
Create a sample spec file and run it to check that everything works
> The first time it will take a while, and maybe ask you to accept some permissions
> Recommended: Run in a different simulator than the one you are using for the automation


## Finding Elements and interacting with Elements (iOS)

You can find the elements using the selectors listed below:

- ***Accessibility ID***: Remember, this is the preferred way because it allows for cross-platform compatibility ( You can use the same selector for iOS and Android )
- ***tag name***, Usually the tag name is not unique, multiple objects can have the same tag name. There are multiple types like:
	- Layout, textView, Button	
- ***X-path*** Example: `//*[@name="Alert Views"]` Learn more about Xpath here: http://www.sidar.org/recur/desdi/traduc/es/xml/xpath.html
- ***class chain*** You can say its similar to x-path but is more flexible because it gives you more ways to search for an element on the screen. You have to be explicit that you are going to use class chain using: `*-ios class chain* ` like this: `await  $('-ios class chain:<replace with the class chain>')`. Examples:
	- > learn more about this here: https://github.com/facebookarchive/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules
	- `XCUIElementTypeWindow/XCUIElementTypeButton[3]`  - select the third child button of the first child window element
	- `XCUIElementTypeWindow/XCUIElementTypeAny[3]`  - select the third child (of any type) of the first child window
	- ``XCUIElementTypeWindow[`name CONTAINS[cd] "blabla"`]``  - select all windows, where name attribute starts with "blabla" or "BlAbla" [cd means case insensitive] 

- ***predicate string***: Similar to class chains but shorter in the way you write it, using predicate strings you can select elements by different attributes like: name, value, label, type, enabled, visible... etc. You have to be explicit that you are going to use predicate string using `-ios predicate string:<replace with predicate string>`. Examples:
	- > learn more about this here: https://github.com/facebookarchive/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules
	- `type == 'XCUIElementTypeButton' AND value BEGINSWITH[c] 'bla' AND visible == 1`

#### Finding and interacting with elements by Accessibility id
```typescript
it('find element by accessibility id', async () => {
	await  $('~Alert Views').click();
	await  $('~Simple').click();
	await  expect(await  driver.getAlertText())
				.toContain("A Short Title Is Best");
});
```
#### Finding and interacting with elements by tag Name
```typescript
it('find by tag name', async () => {
	// single element
	console.log(await  $('XCUIElementTypeStaticText').getText());
	// multiple elements
	const  textEls = await  $$('XCUIElementTypeStaticText');
	for (const  element  of  textEls) {
		console.log(await  element.getText());
	}
});
```
#### Finding and interacting with elements by xpath
```typescript
it('find element by xpath', async () => {
	// xpath - (//tagname[@attribute=value])
	// await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click();
	// await $('//XCUIElementTypeStaticText[@label="Simple"]').click();
	await  $('//*[@name="Alert Views"]').click();
	await  $('//*[@label="Simple"]').click();
	await  expect(await  driver.getAlertText()).toContain("A Short Title Is Best");
});
```
#### Finding and interacting with elements by class chain
```typescript
it('find element by class chain', async () => {
	// const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
	const  alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
	await  $(`-ios class chain:${alertText}`).click();
	await  $('//*[@label="Simple"]').click();
	await  expect(await  driver.getAlertText()).toContain("A Short Title Is Best");
});
```
#### Finding and interacting with elements by predicate string
```typescript
it('find element by predicate string', async () => {
	// const alertText = 'label == "Alert Views"';
	const  alertText = 'value BEGINSWITH[c] "alert"';
	await  $(`-ios predicate string:${alertText}`).click();
	await  $('//*[@label="Simple"]').click();
	await  expect(await  driver.getAlertText()).toContain("A Short Title Is Best");
});
```
#### Exercise  (Using the example app)
1. Access the default search bar in : search -> default -> default search bar
2. Enter some text
3. Validate that the text is there
4. Clear the text using the x button on the right of the input
5. Verify the input is empty

Solution
```typescript
it('Exercise: Enter text in the search field', async () => {
	await  $('~Search').click(); // Click search in the home menu
	await  $('~Default').click(); // Click default in the following menu
	await  $('//XCUIElementTypeSearchField').addValue("I love this course!"); fill the input
	await  expect($('//XCUIElementTypeSearchField')).toHaveAttr("value"); assert the input has a value
	await  $('~Clear text').click(); click the x button
	await  expect($('//XCUIElementTypeSearchField')).not.toHaveAttr("value"); // Validate the input is empty
});
```

#### Working with alerts
The same as Android alerts 
- await  driver.getAlertText()
- await driver.dismissAlert()

#### Working with Scrollable elements
 ```typescript
// Execute scroll on the screen
await  driver.execute('mobile: scroll', {direction:  "down" });
// Get the element you want to scroll
const  redPicker = await  $('~Red color component value');
// Scroll the element down
await  driver.execute(
	'mobile: scroll', 
	{ element:  redPicker.elementId, direction:  "down" }
);
// Scroll the element up
await  driver.execute(
	'mobile: scroll', 
	{ element:  redPicker.elementId, direction:  "up" }
);
``` 

#### Installing a different version of iOS
> Sometimes you'll need an specific version of iOS, in the example app: MVCTodo.app we will need iOS 14.5 installed so we can run the test

To install a new iOS version open Xcode and:
-  go to Widows -> Devices And Simulators -> simulators.  
- Then in the list click the plus button to create a new simulator
- Click the select for the OS Version and click Download more simulator runtimes
- On platform tab, click the plus button to search for the new runtime - select iOS
- Search for the desired runtime and install it 
> Use this new run time to create a new simulator
 

# Framework
Clone this repository for all the code: https://github.com/cposada23/appium-typescript-framework

#### Recommended  folder structure
- app // Here we put the different APK files 
- test
	- Screen Objects
	- specs
	- utils
	- data


#### AutoCompletion ( Skip this if you want to use typescript): 

> In vs-code editor create a jsconfig.json
```json
     {
	    "compilerOptions": {
		    "types": [
			    "node",
			    "@wdio/globals/types",
			    "@wdio/mocha-framework"
		    ],
		    "module": "commonjs"
	    },
	    "exclude": ["node_modules"]
    }
```

> More info here: https://webdriver.io/docs/autocompletion/

 #### Babel ( Skip this if you want to use typescript)
 > Some times you need to setup a compiler to be able to use next-generation JS features
> Instuctions about babel here: https://webdriver.io/docs/babel/

## Set up typescript ( RECOMMENDED)

> You can follow webdriver.io instructions here: https://webdriver.io/docs/typescript/

1. Install typescript and ts-node as dev dependencies `npm i typescript ts-node -D`
2. Rename `wdio.conf.js` -> `wdio.conf.ts`
3. Add auto compile options to the wdio.conf.ts file ( see documentation )
4. Rename all js files to .ts

tsconfig.json
```json
    {
	    "compilerOptions": {
	    "allowImportingTsExtensions": true,
	    "noEmit": true,
	    "moduleResolution": "node",
	    "module": "ESNext",
	    "types": [
		    "node",
		    "@wdio/globals/types",
		    "expect-webdriverio",
		    "@wdio/mocha-framework",
		    "@wdio/appium-service"
	    ],
	    "target": "ES2015",
	    "esModuleInterop": true
	    },
	    "include": [
		    "**/*.ts"
	    ],
	    "exclude": ["node_modules"]
    }
```

#### Setup a Linter
> https://www.npmjs.com/package/eslint-plugin-wdio

Create a file .eslintrc.cjs and paste the following:
```typescript
    module.exports = {
		extends: ["plugin:wdio/recommended", 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
		parser:  '@typescript-eslint/parser',
		plugins: ['@typescript-eslint', 'wdio'],
		root:  true,
	};
```
Install the dependencies: 
> `npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint eslint-plugin-wdio@latest`
> See: https://typescript-eslint.io/getting-started/


#### Shared configuration for Android and iOS

- Create a new folder `config` that will contain all the configuration of wdio
- Rename the file `wdio.conf.ts`to `wdio.shared.conf.ts`
	- The part that says `export  const  config: Options.Testrunner = {` change it to `export  const  sharedConfig: Options.Testrunner = {`
- Create two new files `wdio.android.conf.ts` and `wdio.ios.conf.js`
- In those two files import the `wdio.shared.conf.ts` and add the specific capabilities and specs for the correct platform `Android or iOS` 
- > See files in the repository for the code of these files 
- Add new scripts to the package json 
	- `"wdio:android": "wdio run ./config/wdio.android.conf.ts",`
	- `"wdio:ios": "wdio run ./config/wdio.ios.conf.ts"`


#### Implementing Hooks
Wdio has different hooks that you can implement, this can reduce the amount of code on the specs and make sure that the tests have all that it needs to run successfully.
- Before
- After
- Before Each
- After Each


## BrowserStack integration

BrowserStack is a paid service but you can have a free trial, create an account here: https://www.browserstack.com/

- Once you created the account, in the top look for `All Products -> App Automate`
- Upload the apps:
	- Click Upload app
	- select the app
	- Copy the path that they give you, something  like this: `bs://b6f450d4c44f319d95d8c92849417b5956af81ea` This will be the application path in the config file for BrowserStack.
- You'll need the access key for BrowserStack, so click on access keys and copy them somewhere, we will put this in an .env file that you should not upload to git 
- Install BrowserStack service running `npm i @wdio/browserstack-service -D`
	- > More info here: https://webdriver.io/docs/browserstack-service/
- Create in the config folder another file to store the BrowserStack configuration: `wdio.android.bs.conf.ts`
- Fill the capabilities according to the device name and os version
- Add this line to the scripts in the package.json: `"wdio:bs:android": "wdio run ./config/wdio.android.bs.conf.ts"` and run the test to see if everything works fine: `npm run wdio:bs:android`

> the wdio.android.bs.conf.ts should look something like this:
for more info access the quick start setup here: https://app-automate.browserstack.com/dashboard/v2/quick-start/setup-browserstack-wdio-service
```typescript
    import { sharedConfig } from  "./wdio.shared.conf.ts"
	import  type { Options } from  '@wdio/types'
	
	export  const  config: Options.Testrunner = {
		...sharedConfig,
		// BrowserStack Credential
		user:  process.env.BROWSERSTACK_USERNAME,
		key:  process.env.BROWSERSTACK_ACCESS_KEY,
		hostname:  'hub.browserstack.com',
		specs: [
		    '../test/specs/android/**/*.ts'
		],
		services: [
			[
				'browserstack',
				{
					app:  'bs://b6f450d4c44f319d95d8c92849417b5956af81ea',
					buildIdentifier:  "${BUILD_NUMBER}",
					browserstackLocal:  true
				},
			]
		],
		capabilities: [
			{
				'bstack:options': {
					deviceName:  'Samsung Galaxy S22 Ultra',
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					platformVersion:  '12.0',
					platformName:  'android',
				}
			},
		],
		commonCapabilities: {
			'bstack:options': {
				projectName:  "BrowserStack Sample",
				buildName:  "bstack-demo",
				debug:  true,
				networkLogs:  true
			}
		},
		maxInstances:  10,
	}

```
> Don't forget to secure your browser stack credentials, for this create a .env file in the root folder ( Remember to add this file to the .gitignore ). Then install the dotenv npm package `npm i dotenv`

#### .env file:
```properties
BROWSERSTACK_USERNAME=<replace with your username> 
BROWSERSTACK_ACCESS_KEY=<replace with your access key>
```
> add this to the file that you need to load the env variables
```typescript
import  dotenv  from  'dotenv'
dotenv.config()
```

## Github Actions Integration

> Create a new repository on github and push the changes there
 ### Add secrets to github
 - In your project, go to settings -> Secrets and variables -> Actions -> new repository secret
 - Setup both variables there `BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY`
 
 ### Creating the workflow
 > More info here: https://webdriver.io/docs/githubactions/

- Create a folder `.gihub/workflows` In there add a yam file: `ci.yaml`

this `ci.yaml` file has all the instructions on how to run the test in the github pipeline conting to BrowserStack . Here is some explanation on the yaml parts:

> You can read more here: https://docs.github.com/en/actions

`name`: give it any name that describes what you are doing in the pipeline
`on`: When to run the pipeline, there are different options. ex on push (Will run the pipeline each time you push some changes to the repository, no matter the branch) or on pull_request ( will run the pipeline when a PR is created )

`jobs`: Here you define the jobs that you want to run, you can have one to build and deploy the app, another one to run the test... etc
`runs-on`: Specify the machine where you want to run the pipeline 
`steps`: Define the steps for the given Job, you can have multiple steps like: one to clone the repo, another to install dependencies, another one to set up environment variables, another to run the test... etc

### Quick description on some of  the steps

   > this one checkout the code from the repository, making the code available for the action
```yaml
    - name: Checkout
    - uses: actions/checkout@v2
```
>This one setups node in the machine
```yaml
    - uses: actions/setup-node@v1 
    - with: 
    	  node-version: 18
```
> This one install all the dependencies listed in the package.json file
```yaml
    - name: Install 
      run: npm install
```
> This one runs the test, here we specify the script from the package.json that we want to run and we setup the env variables for BrowserStack
```yaml
    - name: Test
      env:
	      BROWSERSTACK_USERNAME: ${{ secrets.BROWSERSTACK_USERNAME }}
	      BROWSERSTACK_ACCESS_KEY: ${{ secrets.BROWSERSTACK_ACCESS_KEY }}
      run: npm run wdio:bs:android
```
> This one generate an artifact with the logs if the test fails, this to be able to see why it failed
```yaml
    - uses: actions/upload-artifact@v1 
      if: failure() 
      with: 
	      name: logs 
		  path: logs
```
#### cy.yaml
```yaml
    name: 'BrowserStack Test'
    on: [push, pull_request]
    jobs:
	    ubuntu-job:
		    name: 'BrowserStack Test on Ubuntu'
		    runs-on: ubuntu-latest  # Can be self-hosted runner also
		    steps:
			    - name: 'BrowserStack Env Setup'  # Invokes the setup-env action
			      uses: browserstack/github-actions/setup-env@master
			      with:
			        username: ${{ secrets.BROWSERSTACK_USERNAME }}
			        access-key: ${{ secrets.BROWSERSTACK_ACCESS_KEY }}
			    - name: 'BrowserStack Local Tunnel Setup'  # Invokes the setup-local action
			      uses: browserstack/github-actions/setup-local@master
			      with:
			        local-testing: start
			        local-identifier: random
			    - name: 'Checkout the repository'
			      uses: actions/checkout@v3
			    - uses: actions/setup-node@v3
			      with:
			        node-version: 18
			    - name: 'Installing dependencies'
			      run: npm install
			    - name: 'Running test on BrowserStack'  # Invokes the actual test script that would run on BrowserStack browsers
			      run: npm run wdio:bs:android
			    - name: 'BrowserStackLocal Stop'  # Terminating the BrowserStackLocal tunnel connection
			      uses: browserstack/github-actions/setup-local@master
			      with:
			        local-testing: stop
```
 
> Push the changes and in the actions tab see that it is running


## WebViews (Android)

A webView is basically a view that displays web pages or web content ( when you click a link for example ). It can either be a webObject or open a webBrowser

You'll need to configure the appium service to be able to use the chrome driver like this: in the wdio.andoid.conf.ts: 
```typescript
    services: [['appium', {
	    args: {
		    port:  4723,
		    relaxedSecurity:  true
	    }
    }]]
```
#### Accessing a webBrowser

For this you use the switchContext method like this: `await  driver.switchContext('WEBVIEW_chrome')`

#### Going back to the app
```typescript
await driver.switchContext('NATIVE_APP')
await driver.back()
```
 #### Accessing the Contexts in Appium Inspector
> IMPORTANT: run Appium in the terminal like this: `appium -p 4724 --allow-cors --allow-insecure chromedriver_autodownload`
-  Open the app in the Appium inspector, then in the top menu go to Commands and in the dropdown select Context
- Then for the subGroup select Context again
- Click `Get Current Context`  It will tell you the context that you are in
- The `Get Context List` Will give you the list of contexts that are available 


## WebViews (iOS)

#### Accessing embedded WebView
> For this example we are going to use the WebDriverIo example app, you can download it here https://github.com/webdriverio/native-demo-app/releases or take from the repository:

Use the same function `driver.switchContext('<Context>')`
Example:
```typescript
    it('Working with dynamic webview', async () => {
	    await  $('~Webview').click();
	    // wait until you get multiple context
	    await  driver.waitUntil(async () => {
		    const  contexts = await  driver.getContexts();
		    return  contexts.length  >  1;
	    },
	    { 
		    timeout:  30000, 
		    timeoutMsg:  'Timed out waiting for another context'
		});
	    // get all the contexts
	    const  contexts = await  driver.getContexts();
	    // switch to the webview context
	    await  driver.switchContext(
		    typeof  contexts[1] === 'string'? contexts[1] : contexts[1].id
	    );
	    // assertion
	    const  subtitleTxt = await  $('.hero__subtitle');
	    await  expect(subtitleTxt).toHaveTextContaining('automation');
	    // switch back to the native app
	    await  driver.switchContext('NATIVE_APP');
	    await  $('~Home').click()
	    // assertion
	    const  webdriverTxt = await  $('//*[@name="WEBDRIVER"]')
	    await  expect(webdriverTxt).toBeDisplayed()
    });
```
> Note: one of the issues when switching context into a embedded WebView instead of a  WebBrowser, is that the context identifier change dynamically, so you can not hard code it. You have to get the contexts list and then access the context that you want `context[contextPosition]`

> Note: In the code you'll see the use of wainUntil, this is a way to create a custom wait in WebdriverIO, by passing a function that return true or false. It will retry until the function returns true or trow an exception if  it reach the timeout.


## Allure Reporting
> https://webdriver.io/docs/allure-reporter/

Run `npm i @wdio/allure-reporter -D`

In the `wdio.shared.conf.ts` file copßy the following:
```typescript
    reporters: ['spec', ['allure', {
	    outputDir:  'allure-results',
	    disableWebdriverStepsReporting:  false,
	    disableWebdriverScreenshotsReporting:  false,
    }]],

```
Run one test, and see if the allure-results are generated in the folder ./allure-results/... To see the report you have to do the following:

- Intall allure command line: `npm i allure-commandline`
- Generate the report: `npx allure generate allure-results`
- Open the report `npx allure open`

> If you want to generate the allure report again after the first time, you'll need to run it like this: `npx allure generate allure-results --clean`

#### Add screenshots to the report on failure:

In wdio.shared.conf.ts add the following afterSpec hook:
```typescript
// eslint-disable-next-line @typescript-eslint/no-unused-vars
afterTest:  async  function(
	test, context, { error, result, duration, passed, retries }
) {
	if (error) {
		await  driver.takeScreenshot();
	}
},
```
> Remember  to have these two set to false `	    disableWebdriverStepsReporting:  false, disableWebdriverScreenshotsReporting:  false,` in the allure reporter options

You can see the screenshot in the step that failed...

> You can take screenshots where you want by using `await driver.takeScreenshot()`

#### Auto generating Allure Report
Add or extend the onComplete Hook in `wdio.shared.conf.ts`:
```typescript
onComplete:  function() {
	const  reportError = new  Error('Could not generate Allure report')
	const  generation = allure(['generate', 'allure-results', '--clean'])
	return  new  Promise<void>((resolve, reject) => {
		const  generationTimeout = setTimeout(
			() =>  reject(reportError),5000
		)
		generation.on('exit', function(exitCode) {
			clearTimeout(generationTimeout)
			if (exitCode !== 0) {
				return  reject(reportError)
			}
			console.log('Allure report successfully generated')
			resolve()
		})
	})
}
```
