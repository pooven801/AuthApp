import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const HomeScreen: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  const navigation = useNavigation<any>();
  const userdata = useSelector((state: RootState) => state.auth.data);

  const logoutAction = () => {
    logout()
    navigation.navigate("LoginScreen")
  }

  return (
    <View style={styles.container}>
      <Text>Welcome, {userdata?.name}</Text>
      <Text>{userdata?.email}</Text>
      <View style={styles.loginBtnContainer}>
        <Button title="Logout" onPress={logoutAction} />
      </View>
    </View>
  );
};

export default HomeScreen;