import { useState } from 'react'
import { View, Text, TouchableHighlight, TextInput, Alert, StyleSheet } from 'react-native'
import auth from '@react-native-firebase/auth';

const Auth = ({ navigation }: any) => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const signup = () => {
    if (userName != '' && password != '') {
      auth()
        .createUserWithEmailAndPassword(userName, password)
        .then(res => {
          console.log(res);
          Alert.alert('User created successfully, You can login now');
        })
        .catch(err => {
          console.log(err);
          Alert.alert(err.message);
        });
    } else {
      Alert.alert('Both fields are required');
    }
  };
  const login = () => {
    if (userName != '' && password != '') {
    auth()
      .signInWithEmailAndPassword(userName, password)
      .then(res => {
        console.log(res);
        Alert.alert('Login successfully');
        navigation.navigate('Home');
      })
      .catch(err => {
        console.log(err);
        Alert.alert(err.message);
      });
    }
    else{
      Alert.alert('Both fields are required');
    }

      setUserName('')
      setPassword('')
  };

  return (
    <View
      style={styles.container}>
      <Text style={styles.headingText}>
        Login/Sign up
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        onChangeText={setUserName}
        value={userName}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <View style={{ flexDirection: 'row' }}>
        <TouchableHighlight
          onPress={signup}
          style={styles.authBtn}>
          <Text>Sign up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={login}
          style={styles.authBtn}>
          <Text>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default Auth


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: { fontSize: 20, marginBottom: 20, fontWeight: 'bold' },
  input: {
    backgroundColor: 'grey',
    width: '80%',
    marginBottom: 20,
    paddingLeft: 10,
  },
  authBtn: {
    backgroundColor: 'grey',
    width: 80,
    height: 40,
    marginTop: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
})