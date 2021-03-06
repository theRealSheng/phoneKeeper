import {PhoneReposiory} from '../../data/repositories/phone_repositories';

const UpdatePhoneseCase = async (phoneData) => {
  try {
    const res = await PhoneReposiory.updatePhone(phoneData);
    if (res) {
      return res.data;
    }
  } catch (e) {
    return false;
  }
};

export {UpdatePhoneseCase};
