import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  Image
} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { styles } from "./styles"
import { isValidEmail } from "../../utils"
import { Icons } from "../../config"

const LoginScreen: React.FC = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigation = useNavigation<any>();

  const onLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
    const result = login(email, password);
    if (result.success) {
      navigation.navigate("HomeScreen")
    } else {
      Alert.alert('Error', result.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />

      <View>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => setShowPassword(!showPassword)}>
          <Image
            style={styles.img}
            source={!showPassword ? Icons.hideEye : Icons.showEye}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.loginbtn}
        onPress={onLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SignupScreen")
        }}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
