import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import VectorIcon from '../VectorIcon';
import {color} from '../Color';
import logo from '../assets/OIP.jpg';
import metaLogo from '../assets/Meta-Logo.png';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Signup = ({navigation}) => {
  const [displayName, setfullname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [Password, setpassword] = useState('');
  const [cPassword, setcpassword] = useState('');



  const register = async () => {
    if (!email || !Password) return Alert.alert('Please fill the blank');
    if (Password !== cPassword) return Alert.alert('Confirm Password did not match');
  
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, Password);
      const user = userCredential.user;
      
      // Update the user's profile with displayName
      await user.updateProfile({
        displayName: displayName,
      });
  
      // Save additional user information in Firestore
      await firestore().collection('users').doc(user.uid).set({
        username: displayName,
        phoneNumber: phone,
        email: email, // Optional, since it's already in the auth profile
      });
  
      Alert.alert('User account created & user info saved to Firestore');
      navigation.navigate('Login');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      } else {
        console.error(error);
      }
    }
  };
  
  return (
    <View style={style.container}>
      <View style={style.subCatainer}>
        <Image source={logo} style={style.LogoStyle} />
        <TextInput
          placeholder="Full Name"
          value={displayName}
          onChangeText={text => setfullname(text)} // Use onChangeText
          style={style.inputBox}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setemail(text)} // Use onChangeText
          style={style.inputBox}
        />
            <TextInput
          placeholder="Mobile number"
          value={phone}
          onChangeText={text => setphone(text)} // Use onChangeText
          style={style.inputBox}
        />
        <TextInput
          placeholder="Password"
          value={Password}
          onChangeText={text => setpassword(text)} // Use onChangeText
          style={style.inputBox}
        />
        <TextInput
          placeholder="Confirm Password"
          value={cPassword}
          onChangeText={text => setcpassword(text)} // Use onChangeText
          style={style.inputBox}
        />

        <TouchableOpacity style={style.loginButton} onPress={register}>
          <Text style={style.login}>Create Account</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
         <Text style={style.forgetPwd}>Forget Password?</Text>
      </TouchableOpacity> */}
      </View>

      <TouchableOpacity
        style={style.Account}
        onPress={() => navigation.navigate('Login')}>
        <Text style={style.newAccount}> Already have an account</Text>
      </TouchableOpacity>
      <Image source={metaLogo} style={style.meta} />
    </View>
  );
};
const style = StyleSheet.create({
  LogoStyle: {
    height: 50,
    width: 50,
    marginVertical: '20%',
    borderRadius: 25,
  },
  container: {
    padding: 16,
    height: '100%',
    color: color.grey,
  },
  subCatainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    borderWidth: 1,
    borderColor: color.borderGrey,
    padding: 10,
    borderRadius: 12,
    width: '95%',
    marginTop: 12,
    color: color.primaryColor,
  },
  loginButton: {
    marginTop: 12,
    backgroundColor: color.primaryColor,
    width: '95%',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  login: {
    color: color.white,
    fontWeight: '500',
    fontSize: 15,
  },
  forgetPwd: {
    color: color.grey,
    fontWeight: '400',
    fontSize: 14,
    marginTop: 15,
  },
  Account: {
    borderColor: color.primaryColor,
    borderWidth: 1,
    borderRadius: 12,
    width: '95%',
    padding: 10,
    alignItems: 'center',
    marginTop: '35%',
  },
  newAccount: {
    color: color.primaryColor,
    fontSize: 14,
    fontWeight: '500',
  },
  meta: {
    width: 50,
    height: 20,
    marginTop: 5,

    justifyContent: 'center',
    marginLeft: '40%',
  },
});
export default Signup;
