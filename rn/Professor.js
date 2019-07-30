import { Alert, Button, Text, View, StyleSheet, Image } from 'react-native';
import React, { Component } from 'react';
import DropDown, {Select, Option, OptionList} from 'react-native-selectme';

export default class Professor extends React.Component {
  constructor(props) {
    super(props);

    this.state={
        aula: ''
      };
    
      }

_getOptionList(){
  return this.refs['OPTIONLIST'];
}

_aula(escolha){
  this.setState({
    ...this.State,
    aula: escolha
  });
}
      render(){
      return ( 
<View style={{flex: 1, justifyContent:'center',alignItems:'center' }}>

<Select 
width={250}
ref='SELECT1'
optionListRef={this._getOptionList.bind(this)}
defaultValue="Aulas "
onSelect={this._aula.bind(this)}>
<Option> Rosa </Option>
</Select>
<Text>Selecionado : {this.state.aula}</Text>

<OptionList ref="OPTIONLIST"/>
 </View>
);
}
}