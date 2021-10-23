import React from 'react';
import {StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import LogInSignUp from './screens/LogInSingUp';


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <LogInSignUp  />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
