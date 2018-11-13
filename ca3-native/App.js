import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { createStackNavigator  } from 'react-navigation';
import  Basics  from './screens/basics'
import WhatToDo from './screens/WhatToDo'
import Props from './screens/Props'
import State from './screens/State'
import Style from './screens/Style'
import HeightWidth from './screens/HeightWidth'
import FlexBox from './screens/FlexBox'
import TextInput from './screens/TextInput'
import FetchData from './screens/FetchData'
import Touches from './screens/Touches'
import ScrollViewer from './screens/ScrollView'
import ListViews from './screens/ListViews'
import NetWorking from './screens/NetWorking'


const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{backgroundColor: "#444444", flex: 1}} >
        <Text style={{ textAlign: "center", fontSize: 20, color: "#49ffc5" }}>See all Demos implemented by Adam</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props " />
        <Touchable onPress={() => navigate('state')} title="State " />
        <Touchable onPress={() => navigate('style')} title="Style " />
        <Touchable onPress={() => navigate('heightWidth')} title="Height &amp; Width " />
        <Touchable onPress={() => navigate('flexBox')} title="Flexbox " />
        <Touchable onPress={() => navigate('textInput')} title="Text Input " />
        <Touchable onPress={() => navigate('fetchData')} title="Fetch data " />
        <Touchable onPress={() => navigate('touches')} title="Touches " />
        <Touchable onPress={() => navigate('scrollViewer')} title="ScrollView " />
        <Touchable onPress={() => navigate('listViews')} title="Listviews " />
        <Touchable onPress={() => navigate('netWorking')} title="NetWorking " />
      </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = createStackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  web: { screen: WhatToDo },
  state: { screen: State },
  style: { screen: Style },
  heightWidth: { screen: HeightWidth},
  flexBox: { screen: FlexBox},
  textInput: { screen: TextInput},
  fetchData: { screen: FetchData},
  touches: {screen: Touches},
  scrollViewer: {screen: ScrollViewer},
  listViews: {screen: ListViews},
  netWorking: {screen: NetWorking}
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#49ffc5'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: "bold",
    color: '#444444',
  }
})