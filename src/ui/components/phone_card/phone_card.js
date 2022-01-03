import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './phone_card.styles';

import ImageServer from '../image_server';

const PhoneCard = ({phone, onPressView, onPressEdit, onPressDelete}) => {
  const {_id, name, image} = phone;
  const editRef = useRef(null);
  const viewRef = useRef(null);
  const deleteRef = useRef(null);

  const onDelete = () => {
    deleteRef?.current?.play();
    onPressDelete(_id, image);
    setTimeout(() => {
      deleteRef?.current?.reset();
    }, 500);
  };

  const onEdit = () => {
    editRef?.current?.play();
    onPressEdit(phone);
    setTimeout(() => {
      editRef?.current?.reset();
    }, 500);
  };

  const onView = () => {
    viewRef?.current?.play();
    onPressView(phone);
    setTimeout(() => {
      viewRef?.current?.reset();
    }, 200);
  };

  return (
    <View key={_id} style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.img}>
        <ImageServer imageUrl={image} />
      </View>
      <View style={styles.options}>
        <TouchableOpacity onPress={onDelete} style={styles.lottieWrapper}>
          <LottieView ref={deleteRef} style={styles.lottie} source={require('../../assets/lottie/delete.json')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onEdit} style={styles.lottieWrapper}>
          <LottieView ref={editRef} style={styles.lottie} source={require('../../assets/lottie/edit.json')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onView} style={styles.lottieWrapper}>
          <LottieView ref={viewRef} style={styles.lottie} source={require('../../assets/lottie/view.json')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhoneCard;
