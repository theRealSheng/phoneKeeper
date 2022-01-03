import React, {useEffect} from 'react';
import {KeyboardAvoidingView} from 'react-native';

import styles from './container_screen.styles';

import {Settings} from '../../../common/constants/setttings';

import {useUIContext} from '../../context/ui_context';

import AnimatedWrapper from '../../components/animation_wrapper';

// Screen to handle overlay visualizations
const ContainerScreen = ({children}) => {
  const {loading, message, setMessage, errorMessage, setErrorMessage, deleteSuccess, setDeleteSuccess} = useUIContext();

  useEffect(() => {
    let timer;
    if (message !== null) {
      timer = setTimeout(() => {
        setMessage(null);
      }, 3000);
    }

    if (errorMessage !== null) {
      timer = setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }

    if (deleteSuccess !== null) {
      timer = setTimeout(() => {
        setDeleteSuccess(null);
      }, 3000);
    }
    return () => timer && clearTimeout(timer);
  }, [message, setMessage, errorMessage, setErrorMessage, deleteSuccess, setDeleteSuccess]);

  return (
    <KeyboardAvoidingView behavior={Settings.isIos ? 'padding' : 'height'} style={styles.container}>
      <AnimatedWrapper
        showAnimation={message}
        title={message}
        source={require('../../assets/lottie/success.json')}
        containerStyle={styles.lottieContainer}
        style={styles.successLottie}
        textStyle={styles.successText}
      >
        <AnimatedWrapper
          showAnimation={errorMessage}
          title={errorMessage}
          source={require('../../assets/lottie/failed.json')}
          containerStyle={styles.lottieContainer}
          style={styles.successLottie}
          textStyle={styles.failedText}
        >
          <AnimatedWrapper
            showAnimation={deleteSuccess}
            title={deleteSuccess}
            source={require('../../assets/lottie/delete.json')}
            containerStyle={styles.lottieContainer}
            style={styles.successDeleteLottie}
            textStyle={styles.failedText}
          >
            <AnimatedWrapper showAnimation={loading} source={require('../../assets/lottie/loading.json')}>
              {children}
            </AnimatedWrapper>
          </AnimatedWrapper>
        </AnimatedWrapper>
      </AnimatedWrapper>
    </KeyboardAvoidingView>
  );
};

export default ContainerScreen;
