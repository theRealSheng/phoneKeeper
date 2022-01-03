import React from 'react';
import {View, SafeAreaView} from 'react-native';

import styles from './App.style';

import Navigation from './src/ui/navigation';
import ContextProviders from './src/ui/context/context_providers';
import ContainerScreen from './src/ui/screens/container_screen';

const App = () => {
  return (
    <SafeAreaView>
      <ContextProviders>
        <View style={styles.container}>
          <ContainerScreen>
            <Navigation />
          </ContainerScreen>
        </View>
      </ContextProviders>
    </SafeAreaView>
  );
};

export default App;
