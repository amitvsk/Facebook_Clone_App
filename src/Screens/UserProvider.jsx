import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    let getUser = async () => {
      let data = await AsyncStorage.getItem('user');
      if (data) {
        setUser(JSON.parse(data));
      }
    };
    getUser();
  }, []);

  const logout=async()=>{
    await AsyncStorage.removeItem("user");
    setUser(null)
  }

  const logInUser=async(data)=>{
    setUser(data)
    await AsyncStorage.setItem("user",JSON.stringify(data));
  }
  return <UserContext.Provider value={{user,logout,logInUser}}>{children}</UserContext.Provider>;
};
