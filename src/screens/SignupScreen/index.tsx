import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image
} from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { isValidEmail } from "../../utils"
import { Icons } from "../../config"

const SignupScreen: React.FC = () => {
  const { signup } = useContext(AuthContext);

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigation = useNavigation<any>();

  const onSignup = () => {
    if (!name || !email || !password) {
      Alert.alert('Login Error', 'Please fill all fields');
      return;
    }
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
    if (password?.length < 6) {
      Alert.alert('Error', 'Password length must be more than 6 characters');
      return;
    }

    const result = signup(name, email, password);

    if (result.success) {
      Alert.alert('Success', result.message);
      navigation.navigate("LoginScreen")
    } else {
      Alert.alert('Error', "Try again");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

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

      <Button title="Create Account" onPress={onSignup} />
      <View style={styles.loginBtnContainer}>
      <Button title="Go to Login"
        onPress={() => {
          navigation.navigate("LoginScreen")
        }}
      />
        </View>
    </View>
  );
};

export default SignupScreen;