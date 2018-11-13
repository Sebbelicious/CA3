import React, { Component } from 'react';
import { Text, View, AppRegistry, Image } from 'react-native';

//Todo: Refactor into a seperate file (Props.js), import and complete the exercise
export default class Props extends React.Component {
    static navigationOptions = { title: "Learn about Props" }
    render() {
        return (
            <View>
                <Bananas />
                <LotsOfGreetings />
            </View>
        )
    }
}

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={pic} style={{ width: 193, height: 110 }} />
        );
    }
}


class Greeting extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Greeting name='Rexxar' />
                <Greeting name='Jaina' />
                <Greeting name='Valeera' />
            </View>
        );
    }
}
