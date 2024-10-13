import Button from "@/components/Button";
import Colors from "@/constants/Colors";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";



const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const resetFields = () => {
    setEmail('');
    setPassword('');
  }

  const validateInput = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setErrors('');
    if(!email) {
      setErrors('Email is required');
      return false;
    }

    if(!emailRegex.test(email)) {
      setErrors('Wrong email format');
      return false;
    }
      
    if(!password) {
      setErrors('Password is required');
      return false;
    }
    return true;
  }

  const onSubmit = () => {
    if(!validateInput()) return;

    console.warn('adding product', email);

    resetFields()
  }

  const goToSignup = () => {
    router.push('./signup')
  }

  const handlePasswordInputChange = (password: string) => {
    setPassword(password.trim())
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Sign in'}} />

      <Text style={styles.label}>Email</Text>
      <TextInput 
        value={email}
        onChangeText={setEmail}
        placeholder="Email" 
        style={styles.input} 
      />

      <Text style={styles.label}>Password</Text>
      <TextInput 
        value={password}
        onChangeText={handlePasswordInputChange}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <Text style={styles.error}>{errors}</Text>
      <Button text="Sign in" onPress={onSubmit} />
      <Text onPress={goToSignup} style={styles.textButton}>Create an account</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  label: {
    color: 'gray',
    fontSize: 16,
  },
  error: {
    color: 'red'
  },
  textButton: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.light.tint,
    marginVertical: 10
  }
})

export default SigninScreen;