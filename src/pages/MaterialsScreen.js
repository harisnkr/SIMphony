import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MaterialsScreen extends Component {

  state = {
    items: [],
    isLoading: false
  }

  renderRow = ({ item }) => {
    return (

      <TouchableOpacity onPress = {()=> {Linking.openURL('https://drive.google.com/file/d/1H_Dr0GuPtGBKyeqt2S-MU3Z7bs1CauB5/view?usp=sharing')}}>

        <View style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
          <Text style={{ fontSize: 18 }}>{item.module}</Text>
          <Text style={{ fontSize: 16, marginTop: 5 }}>{item.material}</Text>
          <Text style={{ fontSize: 14, color: 'grey', marginTop: 5 }}>{item.timestampuploader}</Text>

          <View style={{ position: 'absolute', right: 0, marginTop: 35, marginRight: 10 }} >

            <Icon name="angle-right" size={24} color="#C8C7CC" />

          </View>

        </View>
      </TouchableOpacity>

    )
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    this.setState({ isLoading: true });
    this.state.items.push(

      {
        module: 'CO 3311 - Neural Networks',
        material: 'Tutorial 1.8',
        timestampuploader: 'Uploaded on 16th Nov 2019, 3:20pm by Staff'
      },

      {
        module: 'CO 3310 - Artificial Intelligence',
        material: 'Lecture 9 slides: Philosophy of AI',
        timestampuploader: 'Uploaded on 20th Nov 2019, 3:20pm by Staff'
      },

      {
        module: 'CO 3310 - Artificial Intelligence',
        material: 'Solutions for review of propositional logic',
        timestampuploader: 'Uploaded on 20th Nov 2019, 3:19pm by Staff'
      },

      {
        module: 'CO 3353 - Software Engineering Project Management',
        material: 'L11. Emerging Trends and Revision',
        timestampuploader: 'Uploaded on 20th Nov 2019, 8:20pm by Staff'
      },

      {
        module: 'CO 3310 - Artificial Intelligence',
        material: 'Lecture 9 slides: Philosophy of AI',
        timestampuploader: 'Uploaded on 20th Nov 2019, 10:05am by Staff'
      },

      {
        module: 'CO 3326 - Computer Security',
        material: ' Lecture 1 Notes',
        timestampuploader: 'Uploaded on 1st Nov 2019, 2:10pm by Staff'
      },

    );

    this.setState({ isLoading: false });
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
        <FlatList
          data={this.state.items}
          renderItem={this.renderRow}
          refreshing={this.state.isLoading}
          onRefresh={this.getData}
          keyExtractor={(i, k) => k.toString()}
        />
      </View>
    )
  }
}
