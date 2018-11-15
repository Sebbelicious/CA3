import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Constants } from "expo";
import { createStackNavigator  } from 'react-navigation';
import Help from './screens/Help'
import People from './screens/People'
import Planets from './screens/Planets'
import Vehicles from './screens/Vehicles'
import Species from './screens/Species'
import Films from './screens/Films'
import Spaceships from './screens/Spaceships'



const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Star Wars API' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
      <View style={{backgroundColor: "black", flex: 1}} >
        <Text style={styles.title}>Star Wars Database</Text>
        <Text style={styles.title}>What do you want to do?</Text>
        <Touchable onPress={() => navigate('help')} title="HELP" />
        <Touchable onPress={() => navigate('people')} title="Search People" />
        <Touchable onPress={() => navigate('planets')} title="Search Planets" />
        <Touchable onPress={() => navigate('vehicles')} title="Search Vehicles" />
        <Touchable onPress={() => navigate('species')} title="Search Species" />
        <Touchable onPress={() => navigate('films')} title="Search Films" />
        <Touchable onPress={() => navigate('spaceships')} title="Search Spaceships" />

      </View>
      </ScrollView>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = createStackNavigator({
  Home: { screen: HomeScreen },
  help: { screen: Help},
  people: { screen: People },
  planets: { screen: Planets },
  vehicles: { screen: Vehicles },
  species: { screen: Species },
  films: { screen: Films },
  spaceships: { screen: Spaceships },

});

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