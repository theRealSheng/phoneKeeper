import React, {useState, useCallback, useRef} from 'react';
import {View, FlatList, ScrollView, RefreshControl, TouchableOpacity, Text} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './main_screen.style';

import PhoneCard from '../../components/phone_card';

import {usePhoneContext} from '../../context/phone_context';

const MainScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [hideScroll, setHideScroll] = useState(false);

  const addButtonRef = useRef(null);

  const {phoneList, refreshPhoneList, onSetSelectedPhone, deletePhone} = usePhoneContext();

  const onPressAddPhone = () => {
    setHideScroll(true);
    addButtonRef?.current?.play();
    setTimeout(() => {
      addButtonRef?.current?.reset();
      navigation.navigate('AddPhoneScreen');
      setHideScroll(false);
    }, 500);
  };

  const onRefresh = useCallback(() => {
    refreshPhoneList();
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderAddButton = (absolute = false) => {
    return (
      <TouchableOpacity testID={'main_screen.add-button'} onPress={onPressAddPhone} style={!absolute ? styles.add : styles.addAbsolute}>
        <LottieView ref={addButtonRef} style={styles.lottie} source={require('../../assets/lottie/add_new.json')} speed={4} />
      </TouchableOpacity>
    );
  };

  if (!phoneList?.length) {
    return (
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={styles.noItemContainer}>
          {renderAddButton()}
          {!hideScroll && (
            <View style={styles.pull}>
              <LottieView style={styles.lottie} autoPlay loop source={require('../../assets/lottie/down_arrow.json')} />
            </View>
          )}
        </View>
      </ScrollView>
    );
  }

  const onPressDelete = (id, photoId) => deletePhone(id, photoId);

  const onPressEdit = (phone) => {
    onSetSelectedPhone(phone);
    setTimeout(() => {
      navigation.navigate('EditScreen');
    }, 200);
  };

  const onPressView = (phone) => {
    onSetSelectedPhone(phone);
    setTimeout(() => {
      navigation.navigate('DetailScreen');
    }, 200);
  };

  const renderItem = ({item}) => (
    <PhoneCard phone={item} onPressDelete={onPressDelete} onPressEdit={onPressEdit} onPressView={onPressView} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        style={styles.flatList}
        data={phoneList}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        ListHeaderComponent={<Text style={styles.header}>Phone List</Text>}
      />
      {renderAddButton(true)}
    </View>
  );
};

export default MainScreen;
