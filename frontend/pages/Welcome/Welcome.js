import * as React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* https://reactnative.dev/docs/text */}
      <Text
        style={{
          fontSize: 50,
          fontWeight: "bold",
          color: "#008000",
          textTransform: "uppercase",
          marginBottom: "10%"
        }}
      >
        Bem-vindo!
      </Text>
      
      <TouchableOpacity
        style={styles.button}
        //color="#851D86"
        onPress = {() => navigation.navigate('Signin')}
      >
      <Text style={styles.texto}> Continuar </Text>
      </TouchableOpacity>
    
      <TouchableOpacity
        style={styles.button1}
        //color="#851D86"
        onPress = {() => navigation.navigate('Register')}
      >
      <Text style={styles.texto}> Criar Conta </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button1}
        //color="#851D86"
        onPress = {() => navigation.navigate('Gerador')}
      >
      <Text style={styles.texto}> Gerador </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#851D86",
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50
  },

  button1: {
    alignItems: "center",
    backgroundColor: "#851D86",
    marginTop: 50,
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50
  },

  button2: {
    alignItems: "center",
    backgroundColor: "#851D86",
    marginTop: 70,
    padding: 20,
    paddingLeft: 50,
    paddingRight: 50
  },

  texto: {
    fontSize: 25
  }
});

export default Welcome;