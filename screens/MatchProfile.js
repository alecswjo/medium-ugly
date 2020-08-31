import React, { Component } from "react";
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';

export default class MatchProfile extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const index = this.props.profile;
    console.log(index);

    const {
      age,
      image,
      info1,
      info2,
      info3,
      info4,
      location,
      match,
      name
    } = Demo[0];

    const { navigation } = this.props;

    return (
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={styles.bg}
      >
        <View style={styles.containerProfile}>
          <ImageBackground source={image} style={styles.photo}>
            <View style={styles.top}>
              <TouchableOpacity onPress={() => navigation.navigate("MatchScreen")}>
                <Text style={styles.topIconLeft}>
                  <Icon name="chevronLeft" />
                </Text>
              </TouchableOpacity>

              {/* <TouchableOpacity>
                <Text style={styles.topIconRight}>
                  <Icon name="optionsV" />
                </Text>
              </TouchableOpacity> */}
            </View>
          </ImageBackground>

          <ProfileItem
            matches={match}
            name={name}
            age={age}
            location={location}
            info1={info1}
            info2={info2}
            info3={info3}
            info4={info4}
          />

          <View style={styles.actionsProfile}>
            <TouchableOpacity style={styles.roundedButton}>
              <Text style={styles.iconButton}>
                <Icon name="chat" />
              </Text>
              <Text style={styles.textButton}>Start chatting</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
};

