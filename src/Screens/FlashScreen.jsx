import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import React, {useCallback, useEffect, useRef} from 'react';
import logo from '../assets/OIP.jpg';
import metaLogo from '../assets/Meta-Logo.png';
import {color} from '../Color';
import {useUser} from './UserProvider';
import {useFocusEffect} from '@react-navigation/native';

const FlashScreen = ({navigation}) => {
  const {user} = useUser();
  useFocusEffect(
    React.useCallback(() => {
      let timer = setTimeout(() => {
        if (user) {
          navigation.navigate('MainScreen');
        } else {
          navigation.navigate('Login');
        }
      }, 3000);

      return () => clearTimeout(timer); // Cleanup timeout
    }, [user, navigation]),
  );

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const animate = useCallback(() => {
    // Start the animation
    Animated.loop(
      Animated.sequence([
        // Fade in
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        // Fade out
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 3, // The animation sequence will run 3 times
      },
    ).start();
  }, [fadeAnim]);

  useFocusEffect(
    React.useCallback(() => {
      animate();
    }, [animate]),
  );

  return (
    <View style={styles.container}>
      <View style={styles.subContaine}>
        <Image source={logo} style={styles.logoStyle} />
        <Animated.Text style={[styles.test, {opacity: fadeAnim}]}>
          Facebook
        </Animated.Text>
      </View>
      <View style={styles.metaContainer}>
        <Image source={metaLogo} style={styles.metaLogo} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
  logoStyle: {
    width: 50,
    height: 50,

    borderRadius: 25,
  },
  test: {
    fontSize: 20,
    top: 10,
    fontWeight: '600',
    color: color.primaryColor,
  },
  subContaine: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '80%',
  },

  metaLogo: {
    width: 50,
    height: 10,
  },
  metaContainer: {},
});
export default FlashScreen;
