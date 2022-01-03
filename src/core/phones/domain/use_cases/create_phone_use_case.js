import {PhoneReposiory} from '../../data/repositories/phone_repositories';

import {CreateFormDataImage} from '../../../../common/utils/create_form_data_image.util';

const CreatePhoneUseCase = async (phoneData) => {
  try {
    const body = CreateFormDataImage(phoneData);
    const res = await PhoneReposiory.createPhone(body);
    if (res) {
      return JSON.parse(res.data);
    }
  } catch (e) {
    return false;
  }
};

export {CreatePhoneUseCase};
