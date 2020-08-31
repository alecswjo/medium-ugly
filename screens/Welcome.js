import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";

import { Button, Block, Text } from "../components";
import { theme } from "../constants";

const { width, height } = Dimensions.get("window");

class Welcome extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;

    return (
      <Block>
        <Block center bottom flex={0.4}>
          <Text h1 center bold>
            Medium Ugly.
          </Text>
          <Text h1 primary>
              {" "}
              Find your music match.
          </Text>
          <Text h1 primary>
              {" "}
          </Text>
        </Block>
    
        <Block center bottom>
          <Image
            source={require("../assets/images/logo.jpg")}
            resizeMode="contain"
            style={{ width: width / 1.25, height: height / 2, overflow: "visible" }}
          />
        </Block>
        
        <Block middle flex={0.5} margin={[theme.sizes.padding , theme.sizes.padding * 2]}>
          <Button gradient onPress={() => navigation.navigate("SignUp")}>
            <Text center semibold white>
              Login with Google
            </Text>
          </Button>
          <Button shadow onPress={() => navigation.navigate("SignUp")}>
            <Text center semibold>
              Login with Facebook
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}

// Welcome.defaultProps = {
//   illustrations: [
//     { id: 1, source: require("../assets/images/illustration_1.png") },
//     { id: 2, source: require("../assets/images/illustration_2.png") },
//     { id: 3, source: require("../assets/images/illustration_3.png") }
//   ]
// };

export default Welcome;

const styles = StyleSheet.create({
  stepsContainer: {
    position: "absolute",
    bottom: theme.sizes.base * 3,
    right: 0,
    left: 0
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5
  }
});
