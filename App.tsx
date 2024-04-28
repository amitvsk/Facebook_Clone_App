import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View, StyleSheet, Text } from 'react-native';
// import auth from '@react-native-firebase/auth';
import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import MainScreen from './src/Screens/MainScreen';

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import FlashScreen from './src/Screens/FlashScreen';
import { UserProvider } from './src/Screens/UserProvider';
import Chat from './src/Screens/Chat';
import ChatFriend from './src/Componets/ChatFriend';
// import '@react-native-firebase/firestore';

const RNfirebaseConfig = {
  apiKey: "AIzaSyB0NLSfcwYNdsRiFMJSPY0qr_hQTozy2eE",
  authDomain: "facebook-clone-27325.firebaseapp.com",
  projectId: "facebook-clone-27325",
  storageBucket: "facebook-clone-27325.appspot.com",
  messagingSenderId: ".....",
  appId: "......"
};

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(RNfirebaseConfig )
} else {
    app = firebase.app()
}


const auth = firebase.auth();

function App(): React.JSX.Element {
  const Stack = createStackNavigator();


 

  return (
    <UserProvider>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Flash" component={FlashScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="ChatFriend" component={ChatFriend} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
