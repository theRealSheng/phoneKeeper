import RNFetchBlob from 'rn-fetch-blob';

import {Settings} from '../constants/setttings';

const CreateFormDataImage = (details) => {
  const {filename, uri} = details.file;
  const file = !Settings.isIos ? uri : decodeURIComponent(uri.replace('file://', ''));
  let formData = [];
  formData.push({name: 'file', data: RNFetchBlob.wrap(file), filename});
  formData.push({name: 'name', data: filename});
  Object.keys(details).map((key) => {
    if (key !== 'file') {
      formData.push({name: key, data: typeof details[key] === 'string' ? details[key] : JSON.stringify(details[key])});
    }
  });
  return formData;
};

export {CreateFormDataImage};
