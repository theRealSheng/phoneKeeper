// Simple React Native specific changes

import {Platform} from 'react-native';

import AsyncStorageService from '../services/async_storage.service';

import DebugConfig from './debug_config';

import {Settings} from '../constants/setttings';

const AppConfig = {
  selectedServer: __DEV__ ? DebugConfig.selectedServer : 'prod',
  servers: {
    prod: {
      api: '',
      public: '',
    },
    beta: {
      api: '',
      public: '',
    },
    local: {
      api: 'http://localhost:3000/',
      public: 'http://localhost:3000/',
    },
  },
  host: function () {
    return this.servers[this.selectedServer].api;
  },
  hostPublic: function () {
    return this.servers[this.selectedServer].public;
  },
  defaultHeaders: {
    'Device-Type': Platform.OS === 'ios' ? 1 : 2,
    'Build-Version': Settings.version,
  },
  authHeaders: (token = null) => {
    if (token === null) {
      token = AsyncStorageService.get('token');
      if (typeof token === 'undefined') {
        return {};
      }
    }
    const headers = {
      Authorization: 'JWT ' + token,
    };
    return headers;
  },
  developerMenuEnabled: __DEV__,
  stackTraceEnabled: false,
};

export default AppConfig;
