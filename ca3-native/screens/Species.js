import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDirectionBasics extends Component {
    render() {
        return (
            // Try setting `flexDirection` to `column`.
            <View>
                {/* <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                    <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                    <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
                </View>
                <View style={{ flex: 1}}>
                    <JustifyContentBasics/>
                </View> */}
                <View style={{ flex: 1}}>
                    <AlignItemsBasics/>
                </View>
            </View>
        );
    }
};
class JustifyContentBasics extends Component {
    render() {
        return (
            // Try setting `justifyContent` to `center`.
            // Try setting `flexDirection` to `row`.
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'tomato' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'orange' }} />
            </View>
        );
    }
};

 class AlignItemsBasics extends Component {
    render() {
      return (
        // Try setting `alignItems` to 'flex-start'
        // Try setting `justifyContent` to `flex-end`.
        // Try setting `flexDirection` to `row`.
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
          <View style={{height: 50, backgroundColor: 'skyblue'}} />
          <View style={{height: 100, backgroundColor: 'steelblue'}} />
        </View>
      );
    }
  };