import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {isTablet, getVersion, getBuildNumber, getDeviceId} = DeviceInfo;

const Settings = {
  isTablet: isTablet(),
  isIos: Platform.OS === 'ios',
  versionAndBuildNumAndPlatform: `${getVersion()}-${getBuildNumber()}-${Platform.OS}`,
  version: getVersion(),
  deviceId: getDeviceId(),
  server: 'local',
};

export {Settings};
