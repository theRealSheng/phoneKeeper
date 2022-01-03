import React from 'react';
import {ScrollView, View, Text} from 'react-native';

import styles from './detail_screen.styles';

import ImageServer from '../../components/image_server';

import {usePhoneContext} from '../../context/phone_context';

const DetailScreen = ({navigation}) => {
  const {selectedPhone} = usePhoneContext();
  const {image, manufacturer, description, color, price, screen, processor} = selectedPhone;

  const renderData = (title, data) => (
    <Text style={styles.key}>
      {title}: <Text style={styles.keyValue}>{data || 'Not provided'}</Text>
    </Text>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.img}>
          <ImageServer imageUrl={image} />
        </View>
        <View style={styles.data}>
          <Text style={styles.mainText}>Specifications:</Text>
          {renderData('Manufacturer', manufacturer)}
          {renderData('Description', description)}
          {renderData('Color', color)}
          {renderData('Price', price)}
          {renderData('Screen', screen)}
          {renderData('Processor', processor)}
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;
