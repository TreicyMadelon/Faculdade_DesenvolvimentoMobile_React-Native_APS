import React, { Component } from 'react';
import { Alert, Button, Text, View, StyleSheet, Image } from 'react-native';
import { Constants } from 'expo';
import { Rating, AirbnbRating } from 'react-native-ratings';


export default class Avaliar extends Component {
  constructor(props) {
    super(props);
    
      }

      render() {
      return ( 
      <View style={styles.container}>
        <Text style={styles.tite}>
          Avalição semestral
        </Text>

        <Text style={styles.paragraph}>
         Didática da aula 
        </Text>
         <AirbnbRating
          count={5}
          showRating
          fractions={5}
          reviews={["Péssimo", "Insatisfeito", "Razoável", "OK", "Ótimo"]}
          defaultRating={3}
          size={40}
        />

         <Text style={styles.paragraph}>
         Material proposto
        </Text>
         <AirbnbRating
          count={5}
          showRating
          fractions={5}
          reviews={["Péssimo", "Insatisfeito", "Razoável", "OK", "Ótimo"]}
          defaultRating={3}
          size={40}
        />

         <Text style={styles.paragraph}>
         Resolução de dúvidas
        </Text>
         <AirbnbRating
          count={5}
          showRating
          fractions={5}
          reviews={["Péssimo", "Insatisfeito", "Razoável", "OK", "Ótimo"]}
          defaultRating={3}
          size={40}
        />


         <Text style={styles.paragraph}>
         Obrigada por sua avaliação! 
        </Text>
       
      </View> );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
  },
  tite: {
    fontSize: 24,
    textAlign: 'center',
    color: '#34495e'
  },
  paragraph: {
    margin: 10,
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
