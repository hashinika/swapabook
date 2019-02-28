import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const MainScreen = () => (
  <View style={styles.container}>
    <LoginStatusMessage />
    <AuthButton />
    
    <Text style={styles.welcome}>
      Screen A
    </Text>
    <Text style={styles.instructions}>
      This is great
    </Text>
    <Button
      onPress={() => navigation.dispatch({ type: 'Home' })}
      title="SwipeComponent"
    />
    <Button
      onPress={() => navigation.dispatch({ type: 'ScannerComponent' })}
      title="Scanner Component"
    />
  </View>
);

MainScreen.navigationOptions = {
  title: 'Home Screen',
};

export default MainScreen;