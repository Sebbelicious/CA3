import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import { Constants } from "expo";
import { createStackNavigator } from 'react-navigation';
import People from './screens/People'




const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Star Wars API' };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={{ backgroundColor: "black", flex: 1 }} >
          <Text style={styles.title}>Welcome to the Star Wars Database</Text>
          <Text style={styles.title}>Press the button to search for characters</Text>
          <Touchable onPress={() => navigate('people')} title="Search People" />
        </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = createStackNavigator({
  Home: { screen: HomeScreen },
  people: { screen: People },


});

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 55,
    color: "black",
    textShadowColor: 'rgba(255, 255, 0, 1)',
    textShadowOffset: { width: -0.75, height: 0.25 },
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