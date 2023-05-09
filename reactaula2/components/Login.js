import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import Style from '../styles/styles'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
    // Aqui você pode adicionar sua lógica de autenticação
  }

  return (
    <View style={Style.container}>
      <TextInput
        style={Style.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={Style.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        color="black"
        title="Entrar"
        onPress={handleLogin}
      />
    </View>
  );
};



export default Login;