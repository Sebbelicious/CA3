import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, FlatList, ScrollView } from 'react-native';
import datafacade from "../DataFacade";

export default class People extends Component {
  constructor(props) {
    super(props);
    console.log("in constructor");
    this.state = {
      amount: '',
      persons: [],
    }
  }

  async componentDidMount() {
    this.fetchData(5);

  }

  async fetchData(i){
    try {
      const people = await datafacade.getPersons(i);
      this.setState({
        persons: people,
        amount: i
      });
    } catch (err) {
      alert("error: " + err.status)
    }
  }
  render() {
    const arr = [{ key: 'a', name: "anders" }, { key: 'b', name: "bobby" }]
    return (
      <View style={{ color: "black", backgroundColor: "tomato", flex: 1, alignItems: 'center' }}>
        <Text style={styles.title}>
          How many people do you want to fetch from the database?
          Showing: {this.state.amount}
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.amount}
          onValueChange={(amount) => this.fetchData(amount)}>
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="9" />
          <Picker.Item label="10" value="10" />
        </Picker>

        <FlatList
          data={this.state.persons}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Text>
              Name: {item.name}
          </Text>}
        />

        {/* {this.state.persons.map((person, index) => (
          <FlatList
            data={person} 
            renderItem={({item})=><Text>`${item.name}`</Text> }
            />
      ))} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "yellow",
    textShadowColor: 'rgba(255, 255, 0, 1)',
    textShadowOffset: { width: -0.5, height: 1 },
    textShadowRadius: 5,
  },
  picker: {
    color: 'black',
    backgroundColor: 'white',
    width: 50

  }
});
