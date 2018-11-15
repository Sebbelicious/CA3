import React from 'react';
import { Text, View, StyleSheet } from 'react-native';




export default class Nav extends React.Component {
    static navigationOptions = { title: "Search the Star Wars Database" }
    render() {
      return (
        <View style={{ backgroundColor: "black", flex: 1 }}>
          <Text style={styles.title}>From the home screen, choose what you wan't to do</Text>
          
        </View>
      );
    }
  }

  
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 55,
    color: "black",
    textShadowColor: 'rgba(255, 255, 0, 1)',
    textShadowOffset: { width: -0.5, height: 1 },
    textShadowRadius: 5,
  },

  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: 'yellow',
    height: 65,
  },
  buttonText: {
    padding: 7,
    fontSize: 35,
    fontFamily: 'Roboto',
    fontWeight: "bold",
    color: '#444444',
  }
})
