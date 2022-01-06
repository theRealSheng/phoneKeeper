import React, {createContext, useState} from 'react';
import _ from 'lodash';

import {
  GetPhoneLisUseCase,
  CreatePhoneUseCase,
  DeletePhoneUseCase,
  UpdatePhoneWithImageUseCase,
  UpdatePhoneseCase,
} from '../../../core/phones/domain/use_cases';

import {useUIContext} from '../ui_context';

import AsyncStorageService from '../../../common/services/async_storage.service';

export const PhoneContext = createContext(null);

export const usePhoneContext = () => {
  const context = React.useContext(PhoneContext);
  if (!context) {
    throw new Error('usePhoneContext must be used within an PhoneContextProvider');
  }
  return context;
};

const PhoneContextProvider = ({children}) => {
  const [phoneList, setPhoneList] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);

  const onSetPhoneList = (list) => setPhoneList(list);
  const {setLoading, setErrorMessage, setMessage, setDeleteSuccess} = useUIContext();

  const refreshPhoneList = async () => {
    setLoading(true);
    try {
      const res = await GetPhoneLisUseCase();
      if (res?.data) {
        setPhoneList(_.orderBy(res.data, ['name'], ['asc']));
        AsyncStorageService.set('list', JSON.stringify(res.data));
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    } catch (e) {
      setLoading(false);
      console.warn('PhoneContextProvidere: refreshPhoneList', e);
    }
  };

  const addNewPhone = async (phoneData) => {
    setLoading(true);
    const newPhone = await CreatePhoneUseCase(phoneData);
    if (newPhone) {
      setMessage('Successfully added!');
      const newList = _.orderBy([...phoneList, newPhone], ['name'], ['asc']);
      setPhoneList(newList);
      AsyncStorageService.set('list', JSON.stringify(newList));
      setLoading(false);
      return true;
    } else {
      setErrorMessage('Upload failed, please try again');
    }
    setLoading(false);
    return false;
  };

  const deletePhone = async (phoneId, photoId) => {
    setLoading(true);
    const success = await DeletePhoneUseCase(phoneId, photoId);
    if (success) {
      setDeleteSuccess('Successfully delete!');
      const newList = _.orderBy([...phoneList.filter((item) => item._id !== phoneId)], ['name'], ['asc']);
      setPhoneList(newList);
      AsyncStorageService.set('list', JSON.stringify(newList));
      setLoading(false);
      return true;
    }
    setErrorMessage('Delete failed, please try again');
    setLoading(false);
    return false;
  };

  const updatePhoneWithImage = async (phoneData) => {
    setLoading(true);
    const updatePhone = await UpdatePhoneWithImageUseCase(phoneData);
    if (updatePhone) {
      setMessage('Successfully updated!');
      const parseList = phoneList.map((item) => {
        if (item._id === updatePhone._id) {
          return updatePhone;
        }
        return item;
      });
      const newList = _.orderBy([...parseList], ['name'], ['asc']);
      setPhoneList(newList);
      AsyncStorageService.set('list', JSON.stringify(newList));
      setLoading(false);
      return true;
    } else {
      setErrorMessage('Update failed, please try again');
    }
    setLoading(false);
    return false;
  };

  const updatePhoneWithOutImage = async (phoneData) => {
    const updatePhone = await UpdatePhoneseCase(phoneData);
    if (updatePhone) {
      setMessage('Successfully updated!');
      const parseList = phoneList.map((item) => {
        if (item._id === updatePhone._id) {
          return updatePhone;
        }
        return item;
      });
      const newList = _.orderBy([...parseList], ['name'], ['asc']);
      setPhoneList(newList);
      AsyncStorageService.set('list', JSON.stringify(newList));
      setLoading(false);
      return true;
    } else {
      setErrorMessage('Update failed, please try again');
    }
    setLoading(false);
    return false;
  };

  const onSetSelectedPhone = (phone) => {
    setSelectedPhone(phone);
  };

  return (
    <PhoneContext.Provider
      value={{
        phoneList,
        onSetPhoneList,
        refreshPhoneList,
        addNewPhone,
        selectedPhone,
        onSetSelectedPhone,
        deletePhone,
        updatePhoneWithImage,
        updatePhoneWithOutImage,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export {PhoneContextProvider};
