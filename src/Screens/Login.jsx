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
import metaLogo from '../assets/Meta-Logo.png'

const Login = ({navigation}) => {
  const [email, setemail] = useState('');
  const [Password, setpassword] = useState('');
 const loginUser=()=>{
  if(!email) return Alert.alert("Please enter your mobile number or email");
  if(!Password) return Alert.alert("Please enter your password");
  return navigation.navigate("MainScreen");
 }
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
        <VectorIcon
        name="arrow-back"
        type="Ionicons"
        color={color.black}
        size={20}
      />
      </TouchableOpacity>
      
      <View style={style.subCatainer}>
        <Image source={logo} style={style.LogoStyle} />
        <TextInput
          placeholder="Mobile number or email"
          value={email}
          onChange={email => setemail(email)}
          style={style.inputBox}
        />
        <TextInput
          placeholder="Password"
          value={Password}
          onChange={Password => setpassword(Password)}
          style={style.inputBox}
        />
        <TouchableOpacity style={style.loginButton} onPress={()=>loginUser()}>
          <Text style={style.login}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
           <Text style={style.forgetPwd}>Forget Password?</Text>
        </TouchableOpacity>
       
      </View>
     
      <TouchableOpacity style={style.Account} onPress={()=>navigation.navigate("Signup")}>
        <Text style={style.newAccount}> Create new account</Text>
      </TouchableOpacity>
      <Image source={metaLogo} style={style.meta}/>
     
    </View>
  );
};
const style = StyleSheet.create({
  LogoStyle: {
    height: 50,
    width: 50,
    marginVertical: '20%',
    borderRadius:25
  },
  container: {
    padding: 16,
    height:"100%",
    color:color.grey
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
    color:color.primaryColor
  },
  loginButton:{
    marginTop:12,
    backgroundColor:color.primaryColor,
    width:'95%',
    padding:10,
    borderRadius:12,
    alignItems:"center",
   
  },
  login:{
    color:color.white,
    fontWeight:"500",
    fontSize:15
  },
  forgetPwd:{
    color:color.grey,
    fontWeight:"400",
    fontSize:14,
    marginTop:15

  },
  Account:{
    borderColor:color.primaryColor,
    borderWidth:1,
    borderRadius:12,
    width:"95%",
    padding:10,
    alignItems:"center",
    marginTop:"35%"
  },
  newAccount:{
    color:color.primaryColor,
    fontSize:14,
    fontWeight:"500"
  },
  meta:{
    width:50,
    height:20,
    marginTop:5,
    
    justifyContent:'center',
    marginLeft:"40%"

  }
});
export default Login;
