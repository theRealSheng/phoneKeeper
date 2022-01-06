#### Phone Keeper
The app is allows to keep track of mobile data.

### Set up environment
Please follow the instructions at the following link and install depending on the operating system you are using.

https://reactnative.dev/docs/environment-setup

### How to run
The current config is pointing to prod so you do not have to run local server.

If you want to run the local server, change the "selectedServer" in src => common => debug_config to "local".

Please git clone https://github.com/theRealSheng/phone-server for running local server and follow the instruction in the repo.

Run following command at root level project
1. yarn/npm install to install dependencies. 
2. cd ios && pod install
3. yarn ios or yarn android ****

**IMPORTANT**: If you decided to run the server locally, for Android you will have to run the command "yarn android_dev" to order to map the ports.

### Run E2E testing
Change the "selectedServer" in src => common => debug_config to "prod" in order to test again server remote server. Otherwise, if you wish to use "local", please run the server with "yarn start".

## IOS
Install brew if you don't have it. => https://brew.sh/

brew tap wix/brew
brew install applesimutils

GO TO: .detoxrs.json file at root level.

Change the "device" key in devices => simulator => device and change to simulator of choice.

1. Build IOS project - yarn build_test_ios/build_test_ios_release
2. Run test command - yarn test_ios/test_ios_release

## Android
IMPORTANT: At this moment Detox DOES NOT React Native 0.66.

It will not work for now.
