import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, FlatList } from 'react-native';
import datafacade from "../DataFacade";

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      persons: [],
    }
  }

  async componentDidMount() {
    //default amount to show is 5
    this.fetchData(5);

  }

  //use this in render to fetch each time the DOM changes
  async fetchData(i){
    try {
      const people = await datafacade.getPersons(i);
      this.setState({
        persons: people,
        //update amount state to the amount from picker
        amount: i
      });
    } catch (err) {
      alert("error: " + err.status)
    }
  }
  render() {
    return (
      <View style={{ color: "black", backgroundColor: "black", flex: 1, alignItems: 'center' }}>
        <Text style={styles.title}>
          How many people do you want to fetch from the database?
          Showing: {this.state.amount}
        </Text>
        <Picker
          style={styles.picker}
          //takes value from picker, updates state
          selectedValue={this.state.amount}
          //Changes the (value to (amount)) each time the picker value is updated, then calls the fetchdata which updated the amount state
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
          //to give each item a key
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Text style={styles.title}> 
               {item.name}
          </Text>}
        />
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
