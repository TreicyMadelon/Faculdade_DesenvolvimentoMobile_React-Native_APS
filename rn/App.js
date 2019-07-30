import React, { Component } from 'react';
import { Alert, Button, TextInput, View, TouchableHighlight, StyleSheet, Image } from 'react-native';
import Avaliar from './Avaliar';
import { StackNavigator } from 'react-navigation'; 

export class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={{uri:'https://i.imgur.com/3JB6vAj.png'}}
        />
        <TextInput
          value={this.state.username}
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Matrícula'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          underlineColorAndroid='rgba(0,0,0,0)'
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Senha'}
          secureTextEntry={true}
          style={styles.input}
        />
   
        <View style={[{ width: "30%", margin: 10, backgroundColor: "#F5FF2B" }]}>
          <Button
            
            title="Logar"
            color="#FFDA3B"
            onPress={()=>{this.props.navigation.navigate('Avaliar');}}
          />
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: '#B4B5AC',
    marginBottom: 10,
  },

});

export default StackNavigator (
    {   Login:Login,
        Avaliar:Avaliar
    },{
        initialRouteName:'Login'
    }
)

