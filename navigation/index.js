import React from "react";
import { Text, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';

// Plant App 
import Welcome from "../screens/Welcome";
import CreateProfile from "../screens/CreateProfile";

import { theme } from "../constants";

// Tinder App
import HomeScreen from "../screens/Home";
import MatchScreen from "../screens/Matches";
import MatchProfile from "../screens/MatchProfile";

import MessageScreen from "../screens/Messages";
import ChatScreen from "../screens/ChatScreen";

import ProfileScreen from "../screens/Profile";
import EditProfile from "../screens/EditProfile";

import styles from "../assets/styles";
import Icon from "../components/Icon";

const Matches = createStackNavigator(
  {
		MatchScreen: {
      screen: MatchScreen,
      navigationOptions: {
        header: null,
			},
		},
		MatchProfile: {
			screen: MatchProfile,
      navigationOptions: {
        header: null,
			},
		}
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

const Messages = createStackNavigator(
  {
		MessageScreen: {
      screen: MessageScreen,
      navigationOptions: {
        header: null,
			},
		},
		ChatScreen: {
			screen: ChatScreen,
      navigationOptions: {
        header: null,
			},
		}
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

const Profile = createStackNavigator(
  {
		ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null,
			},
		},
		EditProfile: {
			screen: EditProfile,
      navigationOptions: {
        header: null,
			},
		}
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

const Dashboard = createBottomTabNavigator(
	{
		Explore: {
			screen: HomeScreen,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#FE3C72" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="explore" />
						</Text>
					);
				}
			}
    },
		Matches: {
			screen: Matches,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#FE3C72" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="heart" />
						</Text>
					);
				}
			}
		},
		Chat: {
			screen: Messages,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#FE3C72" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="chat" />
						</Text>
					);
				}
			}
		},
		Profile: {
			screen: Profile,
			navigationOptions: {
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#FE3C72" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="user" />
						</Text>
					);
				}
			}
		}
	},
	{
		tabBarOptions: {
			activeTintColor: "#FE3C72",
			inactiveTintColor: "#363636",
			labelStyle: {
				fontSize: 14,
				textTransform: "uppercase",
				paddingTop: 10
			},
			style: {
				backgroundColor: "#FFF",
				borderTopWidth: 0,
				paddingVertical: 30,
				height: 60,
				marginBottom: 0,
				shadowOpacity: 0.05,
				shadowRadius: 10,
				shadowColor: "#000",
				shadowOffset: { height: 0, width: 0 }
			}
		}
	}
);

const screens = createStackNavigator(
  {
    Welcome,
    CreateProfile,
    TabsDashboard: {
      screen: Dashboard,
      navigationOptions: {
        header: null,
      },
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

export default createAppContainer(screens);
