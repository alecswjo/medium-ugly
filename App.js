import React from "react";
import { StyleSheet } from "react-native";
// import * as Font from 'expo-font';
import * as Font from 'expo-font';
import {YellowBox} from 'react-native';

import { AppLoading } from "expo";
import { Asset } from "expo-asset";

import Navigation from "./navigation";
import { Block } from "./components";

// import all used images
const images = [
  require("./assets/icons/back.png"),
];

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'tinderclone': require('./assets/fonts/tinderclone.ttf'),
    });
    YellowBox.ignoreWarnings([
      'Calling `getNode()` on the ref of an Animated component is no longer necessary. You can now directly use the ref instead.',
    ]);
  }

  state = {
    isLoadingComplete: false
  };

  handleResourcesAsync = async () => {
    // Caching all the images for better performance on the app
    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    return Promise.all(cacheImages);
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.handleResourcesAsync}
          onError={error => console.warn(error)}
          onFinish={() => this.setState({ isLoadingComplete: true })}
        />
      );
    }

    return (
      <Block white>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
