import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';

const CustomTabBarIcon = (name, size) => {
  const icon = ({tintColor}) => (
    <Icon name={name} size={size} color={tintColor} />
  );

  icon.propTypes = {
    tintColor: PropTypes.string.isRequired,
  };

  return icon;
};

const LoggedInTabNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreTab,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: CustomTabBarIcon('ios-search', 22),
      },
    },
    Saved: {
      screen: SavedContainer,
      navigationOptions: {
        tabBarLabel: 'SAVED',
        tabBarIcon: CustomTabBarIcon('ios-heart-outline', 22),
      },
    },
    Trips: {
      screen: TripsContainer,
      navigationOptions: {
        tabBarLabel: 'TRIPS',
        tabBarIcon: CustomTabBarIcon('ios-ionic', 21),
      },
    },
    Inbox: {
      screen: InboxContainer,
      navigationOptions: {
        tabBarLabel: 'INBOX',
        tabBarIcon: CustomTabBarIcon('ios-archive-outline', 25),
      },
    },
    Profile: {
      screen: ProfileContainer,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: CustomTabBarIcon('ios-contact-outline', 22),
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontWeight: '600',
        marginBottom: 5,
      },
      activeTintColor: colors.pink,
    },
    tabBarPosition: 'bottom',
  },
);

export default LoggedInTabNavigator;
