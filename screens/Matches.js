import React, { Component } from "react";
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';
import CardItem from '../components/CardItem';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';

export default class Matches extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;

    return (
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.bg}
      >
        <View style={styles.containerMatches}>
            <View style={styles.top}>
              <Text style={styles.title}>Matches</Text>
              {/* <TouchableOpacity>
                <Text style={styles.icon}>
                  <Icon name="optionsV" />
                </Text>
              </TouchableOpacity> */}
            </View>
  
            <FlatList
              numColumns={2}
              data={Demo}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => navigation.navigate("MatchProfile") }>
                  <CardItem
                    image={item.image}
                    name={item.name}
                    status={item.status}
                    variant
                  />
                </TouchableOpacity>
              )}
            />
        </View>
      </ImageBackground>
    );
  }
};
