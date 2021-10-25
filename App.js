import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import LogInSignUp from './screens/LogInSingUp';


const App = () => {
  return (
    <NavigationContainer>
      <LogInSignUp />
    </NavigationContainer>
  );
};

export default App;
