import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './edit_screen.styles';

import AddFormInputs from '../add_phone_screen/add_phone.data';

import Form from '../../components/form';
import AddImageButtons from '../../components/buttons/add_image_buttons';
import ImageDisplay from '../../components/image_display';
import ImageServer from '../../components/image_server';

import {usePhoneContext} from '../../context/phone_context';

const EditScreen = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState(false);
  const [changePhoto, setChangePhote] = useState(false);

  const {selectedPhone, updatePhoneWithImage, updatePhoneWithOutImage} = usePhoneContext();

  const onSubmit = async (data) => {
    if (!image && changePhoto) {
      setImageError(true);
      return;
    }

    let resUpdate;

    if (changePhoto) {
      const {fileName, uri, type} = image;
      const phoneData = {
        phone: data,
        oldPhoto: selectedPhone.image,
        file: {
          filename: fileName,
          uri,
          type,
        },
      };
      resUpdate = await updatePhoneWithImage(phoneData);
    } else {
      const phoneData = {
        ...selectedPhone,
        ...data,
      };
      resUpdate = await updatePhoneWithOutImage(phoneData);
    }
    if (resUpdate) {
      navigation.goBack();
    }
  };

  const onSelectImage = (data) => {
    setImageError(false);
    if (data?.assets && data.assets[0]) {
      setImage(data.assets[0]);
      return;
    }
    setImage(null);
  };

  const onChangePicture = () => {
    setImageError(false);
    setImage(null);
  };

  const onPressChangePhone = () => setChangePhote(!changePhoto);

  return (
    <ScrollView>
      <View style={styles.container}>
        {!changePhoto && (
          <>
            <View style={styles.imgServer}>
              <ImageServer imageUrl={selectedPhone.image} />
            </View>
            <TouchableOpacity onPress={onPressChangePhone}>
              <Text style={styles.changeText}>Change Image</Text>
            </TouchableOpacity>
          </>
        )}
        {changePhoto && (
          <>
            <TouchableOpacity onPress={onChangePicture} disabled={image ? false : true}>
              <View style={[styles.imgBorder, image && styles.selected]}>
                {!image && <Text>Add Image*</Text>}
                {!image && <AddImageButtons onSelect={onSelectImage} cntrStyle={styles.buttons} btnStyle={styles.btnText} />}
                {image && <ImageDisplay imageUrl={image.uri} />}
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressChangePhone}>
              <Text style={styles.changeText}>Keep Original Image</Text>
            </TouchableOpacity>
          </>
        )}
        {imageError && <Text style={styles.imageError}>Image is required</Text>}
        {selectedPhone && <Form submitText={'Save'} onSubmit={onSubmit} defaultValues={selectedPhone} components={AddFormInputs} />}
      </View>
    </ScrollView>
  );
};

export default EditScreen;
