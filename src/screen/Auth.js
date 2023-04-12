import { useState } from 'react'
import { View, Text, TouchableHighlight, TextInput, Alert, StyleSheet, StatusBar } from 'react-native'
import auth from '@react-native-firebase/auth';
import { COLOR } from '../const/Color';

const Auth = ({ navigation }: any) => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  //signup
  const signup = () => {
    if (userName != '' && password != '') {
      auth()
        .createUserWithEmailAndPassword(userName, password)
        .then(res => {
          console.log(res);
          Alert.alert('User created successfully, You can login now');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            Alert.alert('That email address is invalid!');
          }

        });
    } else {
      Alert.alert('Both fields are required');
    }
  };

  //login
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
    else {
      Alert.alert('Both fields are required');
    }

    setUserName('')
    setPassword('')
  };

  return (
    <View
      style={styles.container}>
      <StatusBar backgroundColor={COLOR.black} barStyle={'default'} />
      <Text style={styles.headingText}>
        Login/Sign up
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        onChangeText={setUserName}
        value={userName}
        placeholder="Email"
        placeholderTextColor={COLOR.lightGrey}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor={COLOR.lightGrey}
      />
      <View style={{ flexDirection: 'row' }}>
        <TouchableHighlight
          onPress={signup}
          style={styles.authBtn}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={login}
          style={styles.authBtn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default Auth


const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.black,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: { fontSize: 20, marginBottom: 20, fontWeight: 'bold', color: COLOR.white },
  input: {
    backgroundColor: COLOR.grey,
    width: '80%',
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: '500',
    color: COLOR.white
  },
  authBtn: {
    backgroundColor: COLOR.grey,
    width: 80,
    height: 40,
    marginTop: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: COLOR.lightGrey,
    fontSize: 14,
    fontWeight: '700'
  }
})