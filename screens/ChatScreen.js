
import React, { Component } from "react";
import { Chat } from '@progress/kendo-react-conversational-ui';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

function MessageTemplate(props) {
    return (
        <View className="k-bubble">
            <View>The message text is {props.item.text}</View>
        </View>
    );
}

export default class ChatScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.user = {
        id: 1,
        name: "Jane",
        avatarUrl: "https://via.placeholder.com/24/008000/008000.png"
    };
    this.state = {
        messages: []
    };
  }

  addNewMessage = (event) => {
      this.setState((prevState) => {
          return { messages: [...prevState.messages, event.message] };
      });
  };
  render() {
    const { navigation } = this.props;

    return (
      <View>

      </View>
    );
  }
};

