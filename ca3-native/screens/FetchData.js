import React from 'react';
import { Text, View, Alert } from 'react-native';
import { Constants, WebBrowser } from "expo";
const URL = "https://1c5f4a19.ngrok.io/NGrok/api/data"

export default class FetchData extends React.Component {
    constructor(props) {
        super(props)
        this.state = { latitude: 0, longtitude: 0 }
    }
    componentDidMount = async () => {
        try {
            const locations = await fetch(URL)
                .then(res => res.json())
            let location = locations[0]
            this.setState({
                latitude: location.latitude,
                longtitude: location.longtitude
            })
        } catch (err) {
            Alert(err)
        }
    }



    render() {
        const lat = this.state.latitude;
        const long = this.state.latitude
        return (
            <View>
                <Text>Latitude: {lat}</Text>
                <Text>Longtitude: {long}</Text>
            </View>

        )
    }
}