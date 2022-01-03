import React, {useEffect} from 'react';

import AsyncStorageService from '../../../common/services/async_storage.service';

import {usePhoneContext} from '../../context/phone_context';

const LaunchScreen = ({navigation}) => {
  const {onSetPhoneList} = usePhoneContext();

  useEffect(() => {
    const hidrate = async () => {
      const savedData = await AsyncStorageService.get('list');
      if (savedData) {
        onSetPhoneList(JSON.parse(savedData));
      }
      navigation.navigate('MainScreen');
    };
    hidrate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default LaunchScreen;
