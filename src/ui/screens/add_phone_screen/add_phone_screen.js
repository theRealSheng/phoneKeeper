import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import styles from './add_phone_screen.styles';

import AddFormInputs from './add_phone.data';

import Form from '../../components/form';
import AddImageButtons from '../../components/buttons/add_image_buttons';
import ImageDisplay from '../../components/image_display';

import {usePhoneContext} from '../../context/phone_context';

const defaultValuesForm = {
  name: '',
  manufacturer: '',
  description: '',
  color: '',
  price: '',
  screen: '',
  processor: '',
};

const AddPhoneScreen = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState(false);

  const {addNewPhone} = usePhoneContext();

  const onSubmit = async (data) => {
    if (!image) {
      setImageError(true);
      return;
    }

    const {fileName, uri, type} = image;
    const phoneData = {
      phone: data,
      file: {
        filename: fileName,
        uri,
        type,
      },
    };
    const added = await addNewPhone(phoneData);
    if (added) {
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={onChangePicture} disabled={image ? false : true}>
          <View style={[styles.imgBorder, image && styles.selected]}>
            {!image && <Text>Add Image*</Text>}
            {!image && <AddImageButtons onSelect={onSelectImage} cntrStyle={styles.buttons} btnStyle={styles.btnText} />}
            {image && <ImageDisplay imageUrl={image.uri} />}
          </View>
        </TouchableOpacity>
        {imageError && <Text style={styles.imageError}>Image is required</Text>}
        <Form onSubmit={onSubmit} defaultValues={defaultValuesForm} components={AddFormInputs} />
      </View>
    </ScrollView>
  );
};

export default AddPhoneScreen;
