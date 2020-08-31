import React, { Component } from "react";
import axios from 'axios';

import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class CreateProfile extends Component {
  state = {
    name: null,
    age: null,
    gender: null,
    location: null,
    bio: null,
    errors: [],
    loading: false
  };

  handleSignUp() {
    const { navigation } = this.props;
    const { name, age, gender, location, bio } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (!name) errors.push("name");
    if (!age) errors.push("age");
    if (!gender) errors.push("gender");
    if (!location) errors.push("location");
    if (!bio) errors.push("bio");

    this.setState({ errors, loading: false });

    // axios.post(`http://10.0.0.63:8080/users`, { 
    //   "name": this.state.username,
    //   "password": this.state.password,
    //   "phone": this.state.phone })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   });

    if (!errors.length) {
      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Dash");
            }
          }
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Create Profile
          </Text>
          <Block middle>
            <Input
              label="Name"
              error={hasErrors("name")}
              style={[styles.input, hasErrors("name")]}
              defaultValue={this.state.name}
              onChangeText={text => this.setState({ name: text })}
            />
            <Input
              label="Age"
              error={hasErrors("age")}
              style={[styles.input, hasErrors("age")]}
              defaultValue={this.state.age}
              onChangeText={text => this.setState({ age: text })}
            />
            <Input
              label="Gender"
              error={hasErrors("gender")}
              style={[styles.input, hasErrors("gender")]}
              defaultValue={this.state.gender}
              onChangeText={text => this.setState({ gender: text })}
            />
            <Input
              label="Bio"
              error={hasErrors("bio")}
              style={[styles.input, hasErrors("bio")]}
              defaultValue={this.state.bio}
              onChangeText={text => this.setState({ bio: text })}
            />
            
            {/* <Button gradient onPress={() => this.handleSignUp()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Create Profile
                </Text>
              )}
            </Button> */}
            <Button gradient onPress={() => navigation.navigate("TabsDashboard")}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Create Profile
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate("Welcome")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Back to Welcome Page
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
